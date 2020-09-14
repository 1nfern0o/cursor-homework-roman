/*
Завдання 1:
Створіть нескінченний генератор ідентифікаторів. Повинен працювати наступним чином:
const idGenerator = createIdGenerator();
idGenerator.next().value -> 1
idGenerator.next().value -> 2
idGenerator.next().value -> 3
...
*/

/*const idGenerator = [];
idGenerator[Symbol.iterator] = function () {
    let i = 0;
    return {
        next: function () {
            i++;
            return {
                done: i < false,
                value: i
            }
        }
    }
}

for (let item of idGenerator) {
    console.log(item)
}*/


function* createIdGenerator(){
    let i = 1;
    while(true)
        yield i++;
}

const idGenerator = createIdGenerator();

/*
Завдання 2 (advanced)
Створіть генератор, який буде регулювати розміри шрифту для вашого сайту. (Можна допрацювати, щоб реально змінював шрифт, але це не є обов'язковою умовою)
Працювати генератор буде наступним чином:
const fontGenerator = newFontGenerator(14); // 14 – стартове значення
fontGenerator.next("up").value -> 14
fontGenerator.next("up").value -> 16
fontGenerator.next("up").value -> 18
fontGenerator.next().value -> 18
fontGenerator.next("down").value -> 16
fontGenerator.next("down").value -> 14
fontGenerator.next("down").value -> 12
fontGenerator.next().value -> 12
*/

let title = document.querySelector('#fontSizeChanger h3');
let fontSize = +window.getComputedStyle(title,null).getPropertyValue('font-size').split('px')[0];

const fontGenerator = function *(action) {
    if(fontSize < 10 || fontSize > 100){
        alert('Enough!!!')
        return
    }

    if(action === 'up'){
        title.style.fontSize = `${++fontSize}px`;
    }
    else if(action === 'down'){
        title.style.fontSize = `${--fontSize}px`;
    }
    yield action;
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#generatorRun').addEventListener('click', ()=>{
        document.querySelector('#outputField').innerText = idGenerator.next().value;
        document.querySelector('#outputField').classList.remove('d-none')
    })
    document.querySelectorAll('#fontSizeChanger button').forEach(button => {
        let action = button.innerText.toLowerCase();
        button.addEventListener('click', ()=>{
            fontGenerator(action).next();
        })
    })
})
