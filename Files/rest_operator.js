"use strict";
let displayColors = function (message, ...colors) {
    //console.log(arguments.length);
    console.log(message);
    for (let i in colors) {
        console.log(colors[i]);
    }
};
let message = "List of colors";
let colorsArray = ["Orange", "Indigo", "Violet"];
displayColors(message, ...colorsArray);
//displayColors(message,"Red");
//displayColors(message,"Red","Blue");
//displayColors(message,"Red","Blue","Green");
