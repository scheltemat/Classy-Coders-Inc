const {Employee} = require('./Employee');

class SoftwareEngineer extends Employee {
    #programmingLanguages;

    constructor(name, position, salary, languages) {
        super(name, position, salary);
        this.#programmingLanguages = languages || []; 
    }
    getProgrammingLanguages(){
        return [...this.#programmingLanguages];
    }

    setProgrammingLanguages(language){
        this.#programmingLanguages.push(language);
    }

}
    


module.exports = {
    SoftwareEngineer,
}