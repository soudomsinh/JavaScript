let a = 100 // global variable

function display() {
    let b = 50; // local variable
    console.log("Variable = ", a);
    console.log("Variable = ", b);

}

console.log("Global varibale = ", a);
// console.log("Local varibale = ", b); //output: ReferenceError: b is not defined => this is because b is defined as local variable

display();



//  what if both local and global variable have same name? Let's see
let c = 100 // global variable

function display2() {
    let c = 50; // local variable
    console.log("Variable(local) = ", c);
    console.log("Variable (local) = ", c);

}

console.log("varibale(global) = ", c);
console.log("varibale(global) = ", c); 
display2();

//output: 
// varibale(global) =  100
// varibale(global) =  100
// Variable(local) =  50
// Variable (local) =  50

// Notice 