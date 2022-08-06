'use strict';

const clear = document.getElementById("clear");
const screen = document.getElementById("screen");
const nums = document.querySelectorAll(".num");
const operatrs=document.querySelectorAll(".operator");
const evaluate=document.querySelector(".eval");

console.log(nums);

let string="";
nums.forEach(num => {
    num.addEventListener('click', function(event) {
        console.log(event.target.textContent);
        string+=event.target.textContent;
        screen.textContent=string;
    });
});

operatrs.forEach(opert => {
    opert.addEventListener('click', function(event) {
        string+=event.target.textContent;
        screen.textContent=string;
    });
});

// calculator main logic
function calculate(v1, v2, operter){
    let ans="";
    if(operter=='-'){
        ans+=v1-v2;
    } else if(operter=='+'){
        ans+=v1+v2;
    }else if(operter=='x'){
        ans+=v1*v2;
    } else{
        ans+=v1/v2;
    }
    return ans;
}

evaluate.addEventListener("click", function(){
    let ans=""
    for(let i=0;i<string.length;i++){
        let char=string[i];
        if(char=='-' || char=='+' || char=='x' || char=='÷'){
            let val1 =Number(string.substring(0,i));
            let val2=Number(string.substring(i+1));
            ans+=calculate(val1,val2, char);
        }
    }
    // display answer into screen
    string="";
    screen.textContent=ans;
    string=ans;  // agr ko aswer m waps se operation krna chahe
})

clear.addEventListener("click", function(){
    string=""
    screen.textContent=string;
})