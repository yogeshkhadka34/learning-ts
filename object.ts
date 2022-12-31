
let firstname="Chanler";
let lastname= "Bing";
let fullname;
//console.log(firstname+" "+lastname);

let person= {
    firstname,
    lastname,
    fullname
};

let createPerson = function(firstname: string,lastname: string,fullname: string){
    person.firstname = firstname; 
    return person;
}
let p = createPerson("Rei", "Reid","Rai");
console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.fullname);
console.log("hi");

