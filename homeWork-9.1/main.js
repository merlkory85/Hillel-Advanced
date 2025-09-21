'use stict'

let ladder = {
    step: 0,
    up: function () { // підніматиме вас на одну сходинку
        this.step++;
    },
    down: function () { // опускатиме вас на одну сходинку
        this.step--;
    },
    showStep: function () { // показує поточну сходинку
        alert(this.step);
    }

};

ladder.up();
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 2
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0