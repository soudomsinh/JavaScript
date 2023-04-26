let color = ["red", "blue", "yellow"].sort(); // Arrange items in arrays in alphabetical order from A-Z(descending order)
let countColor = color.length
console.log("There are" , countColor, "in color");
console.log(color);

// let colorArrange = color.sort(); // Arrange items in arrays in alphabetical order from A-Z
// console.log("Arrange in descending order (alphabetical order from A-Z) ", colorArrange); 


let fruits = ["Apple", "Orange", "Peach", "Pear", "Banana", "Pineapple","Mango",]
console.log("Before:  = ", fruits);

let fruits_arrange = fruits.sort();
console.log("After: Sorting in alphabetical order = ", fruits_arrange);

// finding first and last index

let first_fruit = fruits[0]
let last_fruit_notArrange = fruits[fruits.length-1]
let last_fruit2 = fruits_arrange[fruits_arrange.length-1]

console.log(first_fruit);
console.log(last_fruit_notArrange);
console.log(last_fruit2);

// adding new array items to array list with push

console.log("Before = ", fruits);
fruits.push("papaya", "grapes")
console.log("After adding = " ,fruits);