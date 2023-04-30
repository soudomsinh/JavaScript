// JavaScript Object

// let Name_of_Object = {propertyName:value}

// For example

let product = {
    names: "mouse", 
    price: 20,
    color: "black",
    category: "electronic",
    size: "regular",
};

// // method 1
console.log("name of product is =", product.names);
console.log("price of product is =", product.price);

// // method 2
console.log("color of product is =", product["color"]);

// Object with Method
console.log(" /////below is how to use Object with Method/////");
let product2 = {
    names: "mouse", 
    price: 25,
    color: "black",
    category: "electronic",
    size: "regular",
    displyProduct:function(){
        return "product name = " + this.names + "price = " + this.price + "category = " + this.category
    },
    discount:function(){
        return this.price - 10;
    },
    getColor:function(){
        return this.color;
    }
};
console.log(product2.displyProduct());
console.log(product2.discount());
console.log(product2.getColor());



// display on the website 
// document.write(product.displyProduct());
