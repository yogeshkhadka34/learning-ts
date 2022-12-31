"use strict";
//Methods in class
class Person {
    //constructor method
    constructor(name) {
        console.log("Person Constructor " + name);
    }
    //static method
    static staticMethod(name) {
        console.log("Static Method " + name);
    }
    //Prototype Method
    getGreetings(name) {
        console.log("Hello " + name);
    }
}
let per = new Person("chandler");
Person.staticMethod("done");
per.getGreetings("Reiley");
//Class Inheritance
class Employee extends Person {
    constructor(name) {
        super(name);
        console.log("Employee constructor " + name);
    }
}
let e = new Employee("Chandler");
