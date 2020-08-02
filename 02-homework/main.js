// Отримайте у користувача число(N, M) від якого ми будемо складати. Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!
let firstNumber = +prompt('Введите первое число :');
let lastNumber = +prompt('Введите второе число :');

// Перевірте, чи є передане значення N, M ЦІЛИМ числом. (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходить)
while(!Number.isInteger(firstNumber) || firstNumber === 0) {
    alert('Вы ввели не целоё число');
    firstNumber = +prompt('Введите целое число');
}

while(!Number.isInteger(lastNumber) || lastNumber === 0) {
    alert('Вы ввели не целоё число.')
    lastNumber = +prompt ('Введите целое число.');
}

console.log("Первое число:", firstNumber, "Второе число:", lastNumber);

// Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm
let paired = confirm ("Пропустить парные числа?");

console.log("Пропуск парных чисел: " + paired);

// Напишіть цикл, який буде складати числа від раніше отриманих N и M
let totalSum = null;

for (firstNumber; firstNumber <= lastNumber; firstNumber++) {
    // В циклі додайте перевірку – чи потрібно пропускати при складанні парні числа. (Використовуйте для цього if/else). Якщо парні числа потрібно пропускати не додавайте їх до суми.
    if (paired && firstNumber % 2 === 0) continue;
    totalSum += firstNumber;
}

console.log('Сумма чисел:', totalSum);
