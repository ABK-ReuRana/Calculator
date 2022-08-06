'use strict';
const clear = document.getElementById("clear");
const screen = document.getElementById("screen");
const nums = document.querySelectorAll(".num");
const operatrs=document.querySelectorAll(".operator");
const evaluate=document.querySelector(".eval");

let string="";

// press number
nums.forEach(num => {
    num.addEventListener('click', function(event) {
        string+=event.target.textContent;
        screen.textContent=string;
    });
});

// press operator
operatrs.forEach(opert => {
    opert.addEventListener('click', function(event) {
        string+=event.target.textContent;
        screen.textContent=string;
    });
});


// press evaluate (=)
evaluate.addEventListener("click", function(){
    string=eval(string); //JS inbuid function
    screen.textContent=string;
})

// press (C)
clear.addEventListener("click", function(){
    string=""
    screen.textContent=string;
})