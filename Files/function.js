"use strict";
var getRegvalue = function () {
    return 10;
};
var Car = {
    brand: "Audi",
    greet: function () {
        setTimeout(() => { console.log(this.brand); }, 1000);
    }
};
Car.greet();
console.log("Functions");
console.log(getRegvalue());
var getArrowvalue = (m) => m;
console.log(getArrowvalue(5));
