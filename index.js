// JS DOM = JavaScript Document Object Method

let p = document.getElementsByTagName('p');
console.log(p);

// let mydemo = document.getElementById('demo');
let mydemo2 = document.querySelector('#demo');
// console.log(mydemo);
console.log(mydemo2);


let mycss = document.querySelector('.mycss');
console.log(mycss);


function displayText1() {
    mydemo.innerText= "<strong>Learning JavaScript and DOM basic </strong>";


    
};

function displayText2() {
    mydemo.innerHTML= "<h1>Learning JavaScript and DOM basic </h1>";

};


let j = 10;
let i = 20;
function displayText3() {
    mydemo.innerText= "Rendering variable j = " + j + "," + "Rendering variable i = " + i ;
    mydemo.innerText= `Rendering j = ${i} and j = ${j}` ;



    
};

const a = document.querySelector("#demo");
const b = document.querySelector('.mycss');
const c = document.querySelectorAll('p')

console.log(a);
console.log(b);
console.log(c);

