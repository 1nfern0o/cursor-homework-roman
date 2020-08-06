// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
    maxNumeral = number.toString().split('');
    return Math.max(...maxNumeral);
}
console.log(getMaxDigit(251454873656));


// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function degreeOfNumber(number, degree) {
    let result = 1;
    for (let i = 0; i < degree; i++) {
        result *= number;
    }
    return result;
}

console.log(degreeOfNumber(12,3));


// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function firstLetterUppercase(name) {
    return name.charAt(0).toUpperCase() + (name.substring(1)).toLowerCase();
}

console.log(firstLetterUppercase('влад'));

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805