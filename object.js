"use strict";
let firstname = "Chanler";
let lastname = "Bing";
let fullname;
console.log(firstname + " " + lastname);
let person = {
    firstname,
    lastname,
    fullname
};
let createPerson = function (firstname, lastname, fullname) {
    //fullname = firstname+" "+lastname;
    return { firstname, lastname, fullname };
};
let p = createPerson("Reiley", "Reid", "Rai");
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
