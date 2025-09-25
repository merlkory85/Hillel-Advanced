'use strict'

let company = {
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        web: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((sum, employee) => sum + employee.salary, 0);
    } else {
        let sum = 0;
        for (let subDept of Object.values(department)) {
            sum += sumSalaries(subDept);
        }
        return sum;
    }
}

console.log(sumSalaries(company));