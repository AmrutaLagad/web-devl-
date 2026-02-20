// function greet (name, callback){
//                                                   console.log("Hello", name);
//                                                   callback();

// }

// function sayBye(){
//                                                   console.log("Goodbye!");
// }
// greet("Alice", sayBye);



// function orderfood(item, callback){
//  console.log("Order place for:", item);
// setTimeout(() => {
//    console.log(item, "is ready");
//    callback();
// },5000);

//  }
// orderfood("Pizza", function() {
//   console.log("enjoy your meal!");
// })


function check(age){
                                                  if (age >= 18 && age <= 60) {
        console.log("Eligible");
    } 
    else {
        console.log("Not Eligible");
    }
}
check(age=12);    
check(age=55);          
check(age=61);       
