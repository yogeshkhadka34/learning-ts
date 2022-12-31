//Methods in class
class Person {
    //constructor method
    constructor(name: String){
        console.log("Person Constructor "+name); 
    } 
    //static method
    static staticMethod(name: string | undefined){
        console.log("Static Method "+name);
    } 
    //Prototype Method
    getGreetings(name: string){
        console.log("Hello "+name);
  }
 } 
 let per= new Person("chandler");
Person.staticMethod("done"); per.getGreetings("Reiley");

//Class Inheritance

class Employee extends Person{
    constructor(name: String){
        super(name);
        console.log("Employee constructor "+name);
    }

}

let e= new Employee("Chandler");

