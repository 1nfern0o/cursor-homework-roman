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

function payrollTax(percent, yourSalary) {
    yourSalary = 18500;
    percent = 19.5/100;
    let accountant = yourSalary - (yourSalary * percent);
    return accountant;
}

console.log('Ваша зарплата с учётом налога', +payrollTax().toFixed(0));


// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber() {
    let minNumber = 1;
    let maxNumber = 10;
    return minNumber + Math.floor(Math.random() * maxNumber);
}

console.log(getRandomNumber());


// 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(letter, word) {
    let  result = 0;
    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) result++;
    }
    return result;
}
console.log(countLetter('а', 'Асталавіста'));


// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

function convertCurrency() {
    let currency = prompt('Введите сумму с "uah" или "$"').toLowerCase(),
        currencyDollars = ' $',
        currencyUAH = ' UAH',
        rate = 27.5,
        totalSum = null;

    if (currency.indexOf('$') != -1) {
        totalSum = (parseInt(currency) * rate).toFixed(2) + currencyUAH;
    } else if (currency.indexOf('uah') != -1 ) {
        totalSum = (parseInt(currency) / rate).toFixed(2) + currencyDollars;
    } else {
        totalSum = 'такую валюту мы не меняем, введите uah или $';
        prompt('Введите сумму с "uah" или "$"');
    }
    return totalSum;
}
console.log(convertCurrency());

// 8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124



function getRandomPassword(lengthPassword) {
    let randomPassword = '',
        lengthDefault = 8,
        password = 0;
    if (lengthPassword == 0) {

        for (let i = 0; i < lengthDefault; i++) {
            password = Math.floor(Math.random() * 10);
            randomPassword = randomPassword + +password;
        }

    } else {

        for (let i = 0; i < lengthPassword; i++) {
            password = Math.floor(Math.random() * 10);
            randomPassword = randomPassword + +password;
        }

    }
    return randomPassword;
}

console.log(getRandomPassword(8));

// 9. Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(letter, word) {
    let result = '';
    for (let i = 0; i < word.length; i++) {
        if (letter !== word[i]) result = result + word[i];
    }
    return result;
}

console.log(deleteLetters('b', 'blablabla'));

// 10. Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(word) {
    let wordFormat = '';
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ' ') continue;
        else wordFormat += word[i].toLowerCase();
    }
    for (let i = wordFormat.length - 1, j = 0; i >= 0 && j < wordFormat.length - 1; i--, j++) {
        if (wordFormat[i] !== wordFormat[j]) return false;
    }
    return true;
}

console.log(isPalyndrom('Я несу гусеня'));

// 11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicateLetter(word) {
    let letterNoRepeat = ' ';
    for (let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) letterNoRepeat += word[i];
    }
    return letterNoRepeat;
}

console.log(deleteDuplicateLetter('Саламон Гранди и Двуликий'));
