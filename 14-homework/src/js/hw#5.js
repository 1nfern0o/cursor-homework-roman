// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

function getRandomArray(length, min, max) {
    let randomNumbers = [];
    for (let i = 0; i < length; i++) {
        randomNumbers.push(Math.floor(min + Math.random() * max));
    }
    return randomNumbers;
}

console.log(getRandomArray(15,1,100));

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//    Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

function getModa(...numbers) {
    let arr = new Array(numbers.length).fill(0);
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) arr[i]++;
        }
    }
    let max = Math.max(...arr);
    let maxIndex = arr.findIndex((value) => {
        if (value === max) return true;
    });
    return numbers[maxIndex];
}

console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//    Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

const getAverage = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator += currentValue, 0) / numbers.length;


console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//    Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

/*function getMedian (...number){
    const result = number.filter(number => Number.isInteger(number)).sort((a, b) => a - b);
    return result[(number.length - 1) / 2];
}*/


function getMedian(...number) {
    let action = Math.floor(number.length / 2);
    number.sort((a, b) => a - b);

    if (number.length % 2) {
        return number[action];
    } else {
        return (number[action - 1] + number[action]) / 2;
    }
}
console.log(getMedian(1, 2, 3, 4));





// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
//    Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers) {
    return numbers.filter((el) => el % 2).join(", ");
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
//    Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers) {
    return numbers.filter((el) => el > 0).length;
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
//    Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

function getDividedByFive(...numbers) {
    return numbers.filter(numbers => numbers % 5 === 0);
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
//  Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

function replaceBadWords(string) {
    let word = string.split(' ');
    const CURSE_WORDS = ["fuck"];
    const SWAP_WORD = new RegExp(CURSE_WORDS.join('|'));
    word = word.map((word) => word.replace(SWAP_WORD, '*****'));
    return word.join(" ");
}

console.log(replaceBadWords('Are you fucking kidding?'));

// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]

function divideByThree() {
    let word = 'Commander'.toLowerCase();
    const THREE_LETTER = [];
    for (let i = 0; i < word.length; i += 3) {
        if (3 > word.length - i) {
            THREE_LETTER.push(word.slice(i));
        } else {
            THREE_LETTER.push(word.slice(i, i + 3));
        }
    }
    return THREE_LETTER;
}

console.log(divideByThree());

// 10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]

function generateCombinations(word) {
    if(word.length < 2) {
        return [word];
    } else {
        let result = [];
        for (let i = 0; i < word.length; i++) {
            let letter = word[i];
            let shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
            let shortwordArray = generateCombinations(shorterWord);
            for (let j = 0; j < shortwordArray.length; j++) {
                result.push(letter + shortwordArray[j]);
            }
        }
        return result;
    }
}

console.log(generateCombinations('man'));