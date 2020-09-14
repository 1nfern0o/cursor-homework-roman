/*
https://swapi.dev – Працювати необхідно з цим API.
Інформацію про те, як влаштовано АПІ шукайте в документації!
Уявіть, що вам прийшло завдання на работі – все що залишив бекендер - це таку документацію та полетів у відпустку (ні, не в Китай, покладіть каміння :) )
Дуже заохочується максимально креативний підхід до цього завдання – робіть стилі, додайте який-небудь приємний шрифт (Якщо зовсім туго з ідеями шрифтів візьміть Roboto с Google Fonts).



5. ADVANCED: Додайте кнопку перекладу на вукийську мову. Після натискання на кнопку – весь отриманий по апі контент повинен перекластись на мову вуки.
Для цього достатньо додати до будь-якого запиту: ?format=wookiee.
При фантазії – можете ще і текст кнопок перекласти :)


    */

const BASE = "https://swapi.dev/api/";
let part = 1;
let wookieLang = '';

/*1. Створіть кнопку: "отримати інформацію". При натисканні на неї отримайте та відобразіть інформацію про усіх персонажів 5 епізоду зоряних війн(films/2). Зверніть увагу, що необхідно вивчити документацію та на її основі вивести інформацію
Виводимо тільки: повне ім'я персонажа, дата народження, стать(якщо зробите іконкою, буде взагалі ідеально).
БОНУС ПЛЮС: Якщо додумаєтесь, як зберігати і виводити фотки персонажів – буде дуже круто.
    Я дам підказку: можна створити об'єкт з ключ=посилання_на_персонажа, значення=посилання_на_фотку
У самому АПІ фотографій нмає, але ДЗшка стане набагато приємніше виглядати з зображеннями персонажів!*/

function renderCharacter() {
    const renderCharacter = document.querySelector('#getInfo');
    const characters = document.querySelector('.characters');
    if(event.target === renderCharacter) characters.classList.toggle("active");

    if(characters.classList.contains('active')){
        document.querySelector('.planetsContainer').style.marginLeft = '950px';
    }
    else document.querySelector('.planetsContainer').style.marginLeft = '50px';

    const config = {
        method: "GET",
        url: BASE + 'films/' + document.querySelector('#filmNumber').value + '/',
    }

    return axios(config)
        .then((res) =>{
            return displayCharacters(res.data.characters)
        })
        .catch(err => alert('Sorry, this episode does not exist!' + err))
}

function displayCharacters(characters) {
    const container = document.querySelector('.characters');
    container.innerHTML = `<h1>Characters</h1>`

    characters.forEach(character => {
        const user = character.replace(/^http:\/\//i, 'https://');
        const config = {
            method: "GET",
            url: user,
        }

        return axios(config)
            .then((res) => {
                const characterElement = document.createElement('div');
                characterElement.className = 'character';
                let characterId;
                let gender;
                res.data.url.length === 30 ? characterId = res.data.url.slice(28, 29) : characterId = res.data.url.slice(28, 30);


                if(res.data.gender === 'female') gender = String.fromCharCode(9792);
                else if(res.data.gender === 'male') gender = String.fromCharCode(9794);
                else gender = 'n/a';

                characterElement.innerHTML = `
            <img class = 'characterImage' src = 'images/characters/${characterId}.png' alt = 'Image not found'><br>
            <span class = 'characterName'>${res.data.name}</span><br>
            <span class = 'characterInfo'>${res.data.birth_year} ${gender}</span>
            `
                container.append(characterElement);
            })
    })
}

/*2. Виведіть список усіх планет, які були у зоряних війнах.*/

function getPlanets() {
    const config = {
        method: "GET",
        url: BASE + 'planets/',
        params: {
            page: part,
        }
    };

    const paginationContainer = document.querySelector('#paginationContainer');
    paginationContainer.innerHTML =`<button id="prev" class="pagination">Prev</button>
    <button id="next" class="pagination">Next</button>`;
    pagination ();

    const getPlanets = document.querySelector('#getPlanets');
    const planetsContainer = document.querySelector('.planetsContainer');
    if(event.target === getPlanets) planetsContainer.classList.toggle("active");

    return axios(config)
        .then((res) =>{
            return displayPlanetsList(res.data.results)
        })
        .catch(err => alert('Something went wrong!'))
}

function displayPlanetsList(planets) {
    const planetsList = document.querySelector('.planetsList');

    planetsList.innerHTML = `<h1>Planets</h1>
    <h3>Page:${part}</h3>`;

    planets.forEach(planet => {
        const planetElement = document.createElement('div');
        planetElement.innerHTML = `<span class='accordion'>${planet.name}</span>
        <ul class='panel'> 
            <li>Population: ${planet.population}</li>
            <li>Climate: ${planet.climate}</li>
            <li>Terrain: ${planet.terrain}</li>
            <li>Diameter: ${planet.diameter}</li>
            <li>Orbital period: ${planet.orbital_period}</li>
        </ul>`
        planetsList.append(planetElement);
    })

    let acc = document.querySelectorAll('.accordion');
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let panel = this.nextElementSibling;
            if (panel.style.display === "block") panel.style.display = "none";
            else panel.style.display = "block";

        });
    }
}

/*3. Додайте кнопку next, яка завантажить наступну сторінку зі списком планет. Попередня сторінка при цьому має пропасти. (відбувається заміна даних)*/

function pagination() {
    document.querySelector('#prev').addEventListener('click', ()=>{
        if(part <= 1) return;
        getPlanets(--part)
    });
    document.querySelector('#next').addEventListener('click', ()=>{
        if(part >= 6) return;
        else getPlanets(++part)
    });
}

/*4. ADVANCED: додайте до 1 завдання поле вводу з номером фільму(номер по порядку випуску фильму). Тепер при натисканні на кнопку – необхідно отримати інформацію не про 5тий епізод, а про фільм, номер якого вказано у полі вводу.
Якщо вказана цифра 1 – потрібно передати запит на /films/1*/

function filmNumber() {
    const number = document.querySelector('#filmNumber').value;
    renderCharacter(number);
}

document.querySelector('#getInfo').addEventListener('click', renderCharacter);
document.querySelector('#getPlanets').addEventListener('click', getPlanets);
document.querySelector('#filmNumber').addEventListener('input', filmNumber);






/*function getInfo() {
    updateInfoWithLoading()
    let randomNumber = Math.floor((Math.random() * 83) + 1 )
    axios.get(BASE + PEOPLE + `${randomNumber}`).then((res) => {
        updateInfo(res.data)
    }).catch(err => {
        updateInfoWithError()
    })
}


const BASE = 'https://swapi.dev/api/',
      PLANETS = 'planets/',
      FILMS = 'films/',
      PEOPLE = 'people/'
      PART = '1/';


let button = document.querySelector('#button');
let name = document.querySelector('#name');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birthYear');

function updateInfo(data) {
    name.innerHTML = `Name: ${data.name}`
    gender.innerHTML = `Gender: ${data.gender}`
    birthYear.innerHTML = `Birth Year: ${data.birth_year}`
}

function updateInfoWithError() {
    name.innerHTML = 'Oh No! That person isnt available.'
    gender.innerHTML = ''
    birthYear.innerHTML = ''
}

function updateInfoWithLoading() {
    name.innerHTML = '<i class="lds-dual-ring"></i>'
    gender.innerHTML = ''
    birthYear.innerHTML = ''
}

button.addEventListener('click', getInfo)
*/


