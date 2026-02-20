const readline= require("readline");

let name = process.argv[2];
console.log("Hello",name);


// const prompt = require("prompt-sync")
// let name = prompt("Enter your name:")
// console.log("Hello",name);

// let n=prompt("Enter a number: ")
//  n = parseInt(n);

// for(let i=1; i<=n; i++){
//                                                   console.log(i);
// }


let a;
let b;
a = promt("Enter a number:");
b = promt("Enter another number:");
b = parseInt(b);

switch(c){
                                                  case "+":
                                                             console.log("addition:", a+b);
                                                             break;
                                                  case "-":
                                                              console.log("subtrcation:", a-b);
                                                              break;
                                                  case "*":
                                                              console.log("multiplication:", a*b);
                                                              break; 
                                                              
                                                  case "/":
                                                              console.log("divison:", a/b);
                                                              break; 

                                                  default:
                                                              console.log("invalid operator:");
                                                              
}


