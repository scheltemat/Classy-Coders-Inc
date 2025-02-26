class Employee {
    #salary;
    #isHired;
    constructor(name, position, salary, isHired = true) {
        this.name = name;
        this.position = position;
        this.#salary = salary;
        this.#isHired = isHired;
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
}

module.exports = {
    Employee,
}
