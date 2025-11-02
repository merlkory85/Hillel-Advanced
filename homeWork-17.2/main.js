'use strict'

// Оголошення класу Coach
class Coach {
    // Конструктор класу — викликається під час створення нового об'єкта
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }

    // Метод displayInfo() — виводить інформацію про тренера в консоль
    displayInfo() {
        console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`);
    }

}

// Створення двох об'єктів класу Coach з різними даними
const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

// Виклик методу displayInfo() для кожного тренера
coach1.displayInfo(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
coach2.displayInfo(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"