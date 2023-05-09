//  Arrow function


// Example 1
// Regular function
function fullname(fname, lname) {
    return fname + lname
}

console.log(fullname, "Sengdao" , "oudomsihn")

// Arrow function
fullname2=(f_name, l_name) => f_name+l_name
console.log(fullname2, "John ", "Doe");


// Example 2
// regular function
function setAge(age) {
    return "Age = " + age
}
console.log(setAge(20));

// arrow function
setAge2 = (age2)=> "Age = " + age2

console.log(setAge2(20));