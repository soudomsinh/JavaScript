// common way
const colors = ["white", "red", "blue"];
const red = colors[1]
// console.log(red);

// destructuring
const color2 = ["white", "red", "blue", "green", "orange", "yellow"];
const[white,, blue] = color2; // the comma means to skip that particular index. In this case "red" is being skipped and 2nd index is saved to blue 
console.log(blue); // output: blue

const[,,,green, orange, yellow] = color2 // skips index 0,1,2
console.log(green);
console.log(orange);
console.log(yellow);

// 2nd example

function getScores() {
    return [70, 80, 90];
}
const scores = getScores();
console.log(scores);// [ 70, 80, 90 ]
let x = scores[0], 
    y = scores[1],  
    z = scores[2];

console.log(x); // 70
console.log(y); // 80
console.log(z); // 90

// destructure in array Object

const product ={
    productname : "Laptop",
    price :2000,
    stock: 10
}

const{productname: productName, price: PRICE, stock:quantity} = product;
// or you use name if variable and name is the same like below
//const{productname, price, stock} = product;
console.log(productName);
console.log(PRICE);
console.log(quantity);

// 