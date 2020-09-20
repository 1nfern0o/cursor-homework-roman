const STUDENTS = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"],
      THEMES = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"],
      MARKS = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

function getPairs() {
    const FIRST_PAIR = [],
          TWO_PAIR = [],
          TREE_PAIR = [],
          ALL_PAIRS = [];

    FIRST_PAIR.push(STUDENTS[0], STUDENTS[2]);
    TWO_PAIR.push(STUDENTS[1], STUDENTS[3]);
    TREE_PAIR.push(STUDENTS[4], STUDENTS[5]);
    ALL_PAIRS.push(FIRST_PAIR, TWO_PAIR, TREE_PAIR);
    
    return ALL_PAIRS;
}

const PAIRS = getPairs(STUDENTS);
console.log(PAIRS);

/*Пример
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const getPairs = () => {
  let newArr = students.slice();
  let studGirl = [];
  let studBoy = [];
  for (let i = 0; i < newArr.length; i++) {
    if (
      newArr[i].toString(newArr[i]).endsWith(а) ||
      newArr[i].endsWith(я)
    ) {
      studGirl.push(newArr[i]);
    } else {
      studBoy.push(newArr[i]);
    }
  }
  let studNew = [];
  while (studBoy.length > 0) {
    newStudB = studBoy.pop();
    newStudG = studGirl.pop();

    let count = studNew.push(newStudB.split(,).concat(newStudG));
  }
  return studNew;
};

const pairs = getPairs(students);
console.log(pairs);
*/

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function getProjectTheme(ALL_PAIRS, THEMES) {
    const THEME_SELECTED = [];
    for (let i = 0; i < ALL_PAIRS.length; i++) {
        const PAIR_WITH_SUBJECT = [];
        PAIR_WITH_SUBJECT.push(ALL_PAIRS[i].join(' і '));
        PAIR_WITH_SUBJECT.push(THEMES[i]);
        THEME_SELECTED.push(PAIR_WITH_SUBJECT);
    }
    return THEME_SELECTED;
}

const ALL_PAIRS_THEME = getProjectTheme(PAIRS, THEMES);
console.log(ALL_PAIRS_THEME);


// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function studentAssessments(STUDENTS, MARKS) {
    const ASSESSMENTS = [];
    for (let i = 0; i < STUDENTS.length; i++) {
        ASSESSMENTS.push([STUDENTS[i], MARKS[i]])
    }
    return ASSESSMENTS;
}

const STUDENTS_ASSESSMENTS = studentAssessments(STUDENTS, MARKS);
console.log(STUDENTS_ASSESSMENTS);

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function randomAssessments(ALL_PAIRS_THEME) {
    const PAIRS_RANDOM_ASSESSMENT = [];
    for (let i = 0; i < ALL_PAIRS_THEME.length; i++) {
        const RANDOM_ASSESSMENT = Math.floor(Math.random() * 5 + 1);
        PAIRS_RANDOM_ASSESSMENT.push([...ALL_PAIRS_THEME[i], RANDOM_ASSESSMENT]);
    }
    return PAIRS_RANDOM_ASSESSMENT;
}

const PAIRS_ASSESSMENTS = randomAssessments(ALL_PAIRS_THEME);
console.log(PAIRS_ASSESSMENTS);