// DOM Node

const textALL = document.querySelectorAll('p')

console.log(textALL);
console.log(textALL[0]);
console.log(textALL[1]);
console.log(textALL[2]);
console.log(textALL[3].innerHTML);
let message = textALL[4].innerHTML;
console.log(message);


let count = 1;

function addItem() {
    const menu = document.getElementById('menu');
    const item = document.createElement('li');
    item.innerText = 'My new item ' + (count ++)
    menu.appendChild(item) 
}

//////////
const foo = document.getElementById('foo');
const fooItem = document.getElementById('item-3'); //item-3 = C 
const itemB = document.getElementById('item-2') // item-2 = B and it get replaced with X
const newItem = document.createElement('li')
newItem.innerText = "X"


function deleteItem() {
    foo.removeChild(fooItem);
}

function replaceItem() {
    foo.replaceChild(newItem, itemB)
}