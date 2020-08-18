const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
    return (salary * this.tax).toFixed(2);
}

console.log(getMyTaxes.call(ukraine, 15000) + ' uah');

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платять IT-спеціалісти у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes() {
    return (this.middleSalary * this.tax).toFixed(2);
}


console.log('Україна у середньому податків платять IT-спеціалісти: ' + getMiddleTaxes.call(ukraine) + ' uah');
console.log('Латвия у середньому податків платять IT-спеціалісти: ' + getMiddleTaxes.call(latvia) + ' €');
console.log('Литва у середньому податків платять IT-спеціалісти: ' + getMiddleTaxes.call(litva) + ' €');

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes() {
    return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
}

console.log(getTotalTaxes.call(ukraine) + ' $');

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function getMySalary() {
    const MIN = 1500,
          MAX = 2000;
    setInterval(() => {
        let salary = Math.floor(MIN + Math.random() * MAX),
            taxes = salary * this.tax,
            profit = salary - taxes,
            result = {salary, taxes, profit};
        console.log(result);
    }, 10000);
}

getMySalary.call(ukraine);