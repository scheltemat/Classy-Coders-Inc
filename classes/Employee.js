class Employee {
    static #allEmployees =[];
    #salary;
    #isHired;
    constructor(name, position, salary, isHired = true) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = isHired;
        Employee.#allEmployees.push(this);
    }
    getSalary() {
        return this.#salary;
    }
    setSalary(newSalary) {
        this.#salary = newSalary;
    }
    getStatus() {
        return this.#isHired;
    }
    setStatus(command) {
        if(command === "hire") {
            this.#isHired = true;
        } else if (command === "fire") {
            this.#isHired = false;
        }
    }
    static getEmployees() {
        return [...Employee.#allEmployees];
    }
    static getTotalPayroll() {
        return Employee.#allEmployees.reduce((total, employee) => { return total + employee.getSalary();}, 0);
    }
}

module.exports = {
    Employee,
}
