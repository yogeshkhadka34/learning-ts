"use strict";
const c = 100;
const obj1 = {
    age: 10
};
console.log(obj1.age);
obj1.age = 11;
console.log(obj1.age);
function greetChandler(name) {
    if (name === "Chandler") {
        var greet = "Hi Chandler";
    }
    else {
        var greet = "Hi there";
    }
    console.log(greet);
}
greetChandler("Chandler");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    let b = 20;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);
setTimeout(function () { console.log(a + b); }, 1000);
