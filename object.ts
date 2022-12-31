
let firstname="Chanler";
let lastname= "Bing";
let fullname;
console.log(firstname+" "+lastname);

let person= {
    firstname,
    lastname,
    fullname
};

let createPerson = function(firstname: string,lastname: string,fullname: string){
    //fullname = firstname+" "+lastname;
    return {firstname,lastname,fullname};
}
let p=createPerson("Reiley", "Reid","Rai");
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log("hi");

