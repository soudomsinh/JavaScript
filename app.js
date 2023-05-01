// DOM CSS & Remove class
const box = document.getElementById('box');
let status;

function addDarkMode() {
    box.classList.add("darkMode");
}

function removeDarkMode() {
    box.classList.remove("darkMode");
}

function switchMode() {
    box.classList.toggle("darkMode");
   Status = box.classList.contains("darkMode")
   console.log(Status);
   if (Status) {
    box.style.color="yellow";
   }else{
    box.style.color="red";
   }

}

