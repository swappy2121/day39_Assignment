"use strict";
var ps = require("prompt-sync")
var prompt = ps();

var number = parseInt(prompt("Enter the number: "));

var count = 0;
var primeFactorsArray = [];
console.log("Prime Factors are: ");

for(var i = 2; i < number; i++){  
if (number % i == 0) {  
    
    for( var j = 1; j < i; j++){
       if(i % J == 0);
       count ++;
    }
    if (count > 2){
        primeFactorsArray.push(j);
    }
 }
}
console.log(primeFactorsArray);