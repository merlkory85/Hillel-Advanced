'use strict'

const person = {
    firstName: 'John',
    lastName: 'Silver',
    age: 42,
    country: 'UK',
    city: 'London',
    profession: 'Captain',
    maritalStatus: 'Not married',
    character: 'Nasty temper',
    sex: 'Male',
};

const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

console.log(keys);
console.log(values);
console.log(entries);