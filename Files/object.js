"use strict";
let firstname = "Chanler";
let lastname = "Bing";
let fullname;
//console.log(firstname+" "+lastname);
//String templates
console.log(`Welcome to internet ${firstname}
Say hello please
`);
let person = {
    firstname,
    lastname,
    fullname
};
let createPerson = function (firstname, lastname, fullname) {
    person.firstname = firstname;
    return person;
};
let p = createPerson("Rei", "Reid", "Rai");
console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.fullname);
//Destructuring of Object
let { firstname: f, lastname: l, fullname: fl } = person;
console.log(person);
console.log(f);
//Destructuring of array
fullname = [firstname, lastname];
console.log(fullname);
//let [first,last,third] = fullname;
let [, , third = "thirds"] = fullname;
//console.log(first);
//console.log(last);
console.log(third);
