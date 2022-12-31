"use strict";
//Methods in class
class Person {
    //constructor method
    constructor(name) {
        console.log("Hi Usha " + name);
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
