// 1. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
class Students {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course ;
        this.fullName = fullName;
        this._marks = [];
        this._studentStatus = true;
    }

    // 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    getInfo() {
        return "Студент " + this.course + "-го курса, " + this.university + ", Имя: " + this.fullName;
    }


    // 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
    get StudentMarks() {
        if (this._studentStatus)return this._marks
        else return null;
    }
    // 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
    set Marks(mark) {
        this._marks.push(mark);
    }


    // 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

    /*getAverageMark() {
        if ((this._studentStatus = false)) {
            let averageScore = 0;
            this._marks.reduce(function (acc , cur) {
                return (averageScore = acc + cur);
            });
            averageScore = averageScore / this._marks.length;
            return averageScore;
        } else  return null
    }*/

    getAverageMark() {
        return this._marks.reduce((acc, mark) => acc + mark, 0) / this._marks.length ;
    }

    // 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
    dismiss() {
        return this._studentStatus = false;
    }

    // 7 .Створіть метод this.recover, який дозволить поновити студента
    recover() {
        return this._studentStatus = true;
    }
}

// Advanced


// 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student

class BugetStudent extends Students{
    constructor(univetsity, course, fullname) {
        super(univetsity, course, fullname);
        this.schoarship = 2500;
        // 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor
        setInterval(() => {this.getScholarship()}, 30000)
    }

    // 2. Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
    getScholarship() {
        // 5. Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )
        if (this._studentStatus = true && this.getAverageMark() <= 4) console.log('Подтяни оценки троечник')
        // 4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
        else console.log('Твоя степендия: ' + this.schoarship + ' грн.')
    }
}

const STUDENT_1 = new Students('Вищої Школи Психотерапії м.Одеса','1', 'Остап Бендер');
const STUDENT_1_MARKS = [5, 4, 4, 5];
STUDENT_1._marks = STUDENT_1_MARKS;
console.log(STUDENT_1.getInfo());

console.log('Старые оценки: ' + STUDENT_1.StudentMarks);
STUDENT_1.Marks = 5;
console.log('Новые оценки: ' + STUDENT_1._marks);
console.log('Средний балл: ' + STUDENT_1.getAverageMark());
console.log('Отчислили студента: ' + STUDENT_1.dismiss());
console.log('Студента отчислили: ' + STUDENT_1.StudentMarks);
console.log('Заплатил и приняли студента обратно: ' + STUDENT_1.recover());

console.log('Advanced')

const STUDENT_2 = new BugetStudent('Міжнародний науково-технічний університет (МНТУ) м.Киев','4', 'Цветков Роман');
console.log(STUDENT_2.getInfo());

const STUDENT_2_MARKS = [5, 5, 4, 5];
STUDENT_2._marks = STUDENT_2_MARKS;
console.log('Средний балл: ' + STUDENT_2.getAverageMark());
console.log('Оценки: ' + STUDENT_2.StudentMarks);
STUDENT_2.getScholarship();





