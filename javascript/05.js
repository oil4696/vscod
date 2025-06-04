/**
 * javascript class
 */

class Stduent {
    name;
    age;

    constructor(name, age) {

        this.name = name;
        this.age = age;
    }
}

const newStudent1 = new Stduent('김준일',32);
console.log(newStudent1);
console.log(newStudent1.name);
