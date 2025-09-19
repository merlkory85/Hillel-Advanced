'use strict'

function getNumberOver100() {
    let userInput = null;

    for (let i = 0; i < 10; i++) {
        userInput = prompt("Введіть число більше 100:");

        if (userInput === null || userInput.trim() === "") {
            console.log("Ввід скасовано або порожній рядок.");
            return;
        }

        userInput = Number(userInput);

        if (isNaN(userInput)) {
            alert("Це не число. Спробуйте ще раз.");
            i--;
            continue;
        }

        if (userInput > 100) {
            console.log(`Ви ввели число більше 100: ${userInput}`);
            return;
        } else {
            alert("Число менше або дорівнює 100. Спробуйте ще раз.");
        }
    }

    console.log(`Останнє введення: ${userInput}`);
}

getNumberOver100();
