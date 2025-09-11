'use strict'

const contactBook = {
    contacts: [
        {
            name: "Олена",
            phone: "+380931234567",
            email: "olena.ivanenko@gmail.com"
        },
        {
            name: "Марина",
            phone: "+380931238444",
            email: "maryna.niryba-nimyaso@gmail.com"
        },
        {
            name: "Сергій",
            phone: "+380671234567",
            email: "serhiy.petrov@gmail.com"
        },
        {
            name: "Ірина",
            phone: "+380934566541",
            email: "iryna.kovalenko@gmail.com"
        },
    ],
}

const userFind = contactBook.contacts.find(user => user.name === "Марина");

if (userFind) {
    console.log("Знайдено користувача з таким ім'ям :");
    console.log(userFind);
} else {
    console.log("Такого користувача немає");
}

const newContacts = [
    {
        name: "Андрій",
        phone: "+380971211167",
        email: "andriy.suvuyi@gmail.com"
    },
    {
        name: "Марина",
        phone: "+380931238765",
        email: "maryna.kipish@gmail.com"
    },
    {
        name: "Петро",
        phone: "+380503214567",
        email: "petro.serhiif@gmail.com"
    },
    {
        name: "Марина",
        phone: "+380935558765",
        email: "maryna.nachili@gmail.com"
    },
]

Array.prototype.push.apply(contactBook.contacts, newContacts);
console.log(contactBook);