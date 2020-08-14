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

/*function getModa(...numbers) {
    return numbers.sort((a, b) =>
        numbers.filter(n => n === a).length - numbers.filter(n => n === b).length
    ).pop();
}

console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));*/

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//    Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

const getAverage = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator += currentValue, 0) / numbers.length;


console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//    Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 Приклад: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(...numbers) {
    numbers.sort((a, b) => a - b);
    let i = Math.floor(numbers.length / 2);
    return numbers[i];
}

console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
//    Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers) {
    return numbers.filter((el) => el % 2).join(", ");
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
//    Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers) {
    numbers = numbers.filter((el) => el > 0);
    return numbers.length;
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
//    Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

function getDividedByFive(...numbers) {
    return numbers.filter(numbers => numbers % 5 === 0);
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

