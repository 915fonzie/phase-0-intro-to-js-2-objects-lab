// Write your solution in this file!
const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const tempEmployee = { ...employee };
    tempEmployee[key] = value;
    return tempEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const tempEmployee = {...employee };
    delete tempEmployee[key];
    return tempEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}