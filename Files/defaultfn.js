"use strict";
let percentBonus = () => 0.1;
let defaultfn = function (value = 10, bonus = value * percentBonus()) {
    console.log(value + bonus);
    console.log(arguments.length);
};
defaultfn();
defaultfn(20);
defaultfn(10, 20);
