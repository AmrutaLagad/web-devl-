// function add(a, b) {
//                                                   console.log(a + b);

// }

// add(10, 20);
// add(100, 200);
// add(1.5, 2.5);
// add("Hello", "World");
// add("10", "20");
// add("10", 20);
// add(10, "20");


// const prompt = require("prompt-sync");
// int a = prompt("Enter a number:");

// function square(n) {
//                                                   console.log(n * n);

// }
// a = parseInt(a);
// square(a);


// let n = prompt("Enter a number: ");
// n = parseInt(n);


// function isprime(a){
// if(a <=1)
//    return false;
// for (let i=2; i<=Math.sqrt(a); i++){
//     if(a % i === 0)
//                                                                                                                                                       return false;


// }
// return true;
                                                  
// }
// isprime(n) ? console.log(n, "is a prime number") :





const greet= function(name){
  console.log("Hello", name);
}
greet("Alice");


// const multiply = function(a, b) => {
//                                                   a * b;

// }
  
// console.log("multiplication is:",multiply(10, 20));

// function welcome(name= "Guest"){
//                                                   console.log("welcome", name);

// }
// welcome();
// welcome("bob");

// function login(username,password){
//                                                   if(username === "admin" && password === "password"){
//                                                                                                     console.log("Login successful");

//                                                   }
//                                                   else{
//                                                                                                     console.log("Login failed");

//                                                   }
// }
// login("admin", "password");
// login("user", "1234");
// login("admin", "1234");

function greet (name, callback){
                                                  console.log("Hello", name);
                                                  callback();

}

function sayBye(){
                                                  console.log("Goodbye!");
}
greet("Alice", sayBye);





