const bodyBG = document.querySelector('.bgcolor');
const title_Element = document.getElementById('title'); // refer by id attribute
const content_Element = document.querySelector('.content'); // refer by class attribute
const All_Element = document.querySelectorAll('p');
const box = document.querySelector('.box');

function displayText() {
    bodyBG.style.backgroundColor= "hsla(89, 43%, 51%, 0.3)"
    title_Element.style.color = "red";
    title_Element.style.backgroundColor="yellow"
    title_Element.style.fontSize = "60px"
    content_Element.setAttribute('class', 'newContent' )

}


function orangeMode() {
    box.setAttribute('class', 'orange' )
    
}


function purpleMode() {
    box.setAttribute('class', 'purple' )
    
}



function newBGcolor(){
    bodyBG.style.backgroundColor="white"
}

