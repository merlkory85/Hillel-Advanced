"use strict"

class Student {
    constructor(name, surname, birthYear, grades = []) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = grades;
        this.attendance = new Array(25); // масив з 25 порожніх елементів
        this.attendanceIndex = 0; // лічильник для відвідувань
    }

    // Метод для розрахунку віку
    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    // Метод для розрахунку середньої оцінки
    getAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((acc, val) => acc + val, 0);
        return sum / this.grades.length;
    }

    // Метод для відмітки "присутній"
    present() {
        if (this.attendanceIndex >= 25) {
            console.log(`${this.name} ${this.surname}: Відвідування вже заповнено!`);
            return;
        }
        this.attendance[this.attendanceIndex] = true;
        this.attendanceIndex++;
    }

    // Метод для відмітки "відсутній"
    absent() {
        if (this.attendanceIndex >= 25) {
            console.log(`${this.name} ${this.surname}: Відвідування вже заповнено!`);
            return;
        }
        this.attendance[this.attendanceIndex] = false;
        this.attendanceIndex++;
    }

    // Метод для підрахунку середньої відвідуваності
    getAverageAttendance() {
        const attended = this.attendance.filter(v => v === true).length;
        const total = this.attendance.filter(v => v !== undefined).length;
        return total === 0 ? 0 : attended / total;
    }

    // Підсумковий метод
    summary() {
        const avgGrade = this.getAverageGrade();
        const avgAttendance = this.getAverageAttendance();

        if (avgGrade > 90 && avgAttendance > 0.9) {
            return "Молодець!";
        } else if (avgGrade > 90 || avgAttendance > 0.9) {
            return "Добре, але можна краще";
        } else {
            return "Редиска!";
        }
    }
}

const student1 = new Student("Іван", "Петренко", 2003, [95, 90, 100, 92]);
const student2 = new Student("Марія", "Іваненко", 2004, [99, 88, 90, 89]);
const student3 = new Student("Олег", "Сидорчук", 2002, [60, 70, 65, 75]);

// Заповнимо відвідуваність
for (let i = 0; i < 23; i++) student1.present();
for (let i = 0; i < 2; i++) student1.absent();

for (let i = 0; i < 20; i++) student2.present();
for (let i = 0; i < 5; i++) student2.absent();

for (let i = 0; i < 10; i++) student3.present();
for (let i = 0; i < 15; i++) student3.absent();

console.log(`${student1.name} ${student1.surname}, ${student1.getAge()} років`);
console.log("Середній бал:", student1.getAverageGrade());
console.log("Відвідуваність:", student1.getAverageAttendance());
console.log("Підсумок:", student1.summary());

console.log("----");

console.log(`${student2.name} ${student2.surname}, ${student2.getAge()} років`);
console.log("Середній бал:", student2.getAverageGrade());
console.log("Відвідуваність:", student2.getAverageAttendance());
console.log("Підсумок:", student2.summary());

console.log("----");

console.log(`${student3.name} ${student3.surname}, ${student3.getAge()} років`);
console.log("Середній бал:", student3.getAverageGrade());
console.log("Відвідуваність:", student3.getAverageAttendance());
console.log("Підсумок:", student3.summary());
