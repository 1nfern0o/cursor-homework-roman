const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

const getSubjects = id => Object.keys(students[id].subjects).map(item => item[0].toUpperCase() + item.slice(1).toLowerCase().replace('_', ' '));

console.log(`${students[0].name}` + ': ' + getSubjects(0));

// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverageMark(students) {
    let values = Object.values(students.subjects),
        sumValues = (values[0].concat(values[1], values[2])),
        result = 0;
    for (let i = 0; i < sumValues.length; i++) {
        result += sumValues[i]
    }
    let mean = result / sumValues.length;
    return mean.toFixed(2);
}

console.log(`${students[2].name}` + ': ' + getAverageMark(students[2]));

// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(id) {
    let name = students[id].name,
        course = students[id].course,
        result = 'Имя студента: ' + name + ', ' + 'Курс: ' + course + ', ' + 'Среднее арифметическое: ' + getAverageMark(students[0]);
    return result;
}

console.log(getStudentInfo(0));

// 4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
    let alphabetName = [];
    for (let key in students) alphabetName.push(students[key].name);
    return alphabetName.sort();
}

console.log(getStudentsNames(students));

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
    let mark = 0;
    for (let i = 0; i < students.length; i++) {
        if(getAverageMark(students[i]) > mark) {
            mark = getAverageMark(students[i]);
            bestStudent = students[i];
        }
    }
    return bestStudent.name;
}

console.log(getBestStudent(students));

// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(word) {
    word = word.split('').reduce((letter, times) => {
        letter[times] = (letter[times] || 0) + 1;
        return letter;
    }, {});
    return word;
}

console.log(calculateWordLetters('test'));