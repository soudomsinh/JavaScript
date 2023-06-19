const items = [
    {itemName: "tootbush", price: 5.00},
    {itemName: "phone", price: 750.56},
    {itemName: "earphone", price: 78.45},
    {itemName: "bag", price: 54.99},
    {itemName: "t-shirt", price: 24.90},
    {itemName: "laptop", price: 1299.90},
    {itemName: "pants", price: 32.70},
    {itemName: "jacket", price: 130.25},

]


const totalPrice = items.reduce((fooVariable, priceTotal)=> priceTotal.price + fooVariable, 0)
console.log(`Subtotal = ${totalPrice} Dollars`); // output: Subtotal = 2376.75 Dollars
