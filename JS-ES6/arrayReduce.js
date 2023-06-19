// Array Reduce

const mydata = [10,20,30,40]; 

// The function you're passing into reduce() takes two arguments: value (the accumulator) and foo (the current value in the array).
const reducedData =  mydata.reduce((value,foo) =>{
    const total = foo + value
    return total 

},5) // The 5 is the initial value of the accumulator (value). So in the first iteration, value would be 5 and foo would be 15.
console.log(reducedData); // output: 105


const cart = [
    {Name:"iphone", price:1200},
    {Name:"Laptop", price:1500},
    {Name:"Speaker", price:300},
    {Name:"camera", price:700},
    {Name:"tripod", price:150},
]

const summation = cart.reduce((accumulator, currentValue)=>{
    const cartTotal = currentValue.price + accumulator 
    return cartTotal
},0) // The 0 is the initial value of the currentValue.price.

console.log(summation); //output: 3850

//shorter method 
const summation2 = cart.reduce((accumulator, currentValue)=> currentValue.price + accumulator ,0)
console.log(`subtotal price = ${summation2} Dollars`); // output: 3850