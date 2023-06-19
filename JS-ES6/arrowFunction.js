// common way to write function JS

function fullName(fname, lname){
    return fname + lname
}

console.log("Sara", "Smith");

// arrow function
// example 1
fullname =(fname, lname)=>{
    return fname, lname
}
console.log("John", "Doe");

//example 2
setAge = (age)=>age
console.log("Age = ", 20); // Age =  20

// or

setAge2 = (Age) => "Age2 = " + Age
console.log(setAge2(20));// Age2 =  20


