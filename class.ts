//Methods in class
class Person {
    //constructor method
    constructor(name: string){
        console.log("Hi Usha "+name); 
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
Person.staticMethod("done");
per.getGreetings("Reiley");
