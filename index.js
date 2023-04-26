// let balance = 1000
// let withdraw = 10000

// if(withdraw <= balance){
//     console.log("Proceeding", withdraw,"$ of withdraw")
//     balance = balance - withdraw
//     console.log("Your current balace is ", balance)
// }else{
// console.log("You don't have enough money")
// }

// // 

// // score = 
// let score = 35;

// if(score >= 70){
//     console.log("Grade A");
// }else if(score >= 60){
//     console.log("Grade B ");
// }else if(score >= 50){
//     console.log("Grade C");
// }else if(score>= 40){
//     console.log("Grade D");
// }else{
//     console.log("Grade F")
// }

// // if..else (Ternary Operator)
// // condition ? doThisIfTrue : doThisIfFalse
// let score2 = 30;
// let pass;
// if(score2 >= 50){
//     pass = "You passed";
// }else{
//     pass = "You failed"
// }
// console.log(pass)

// let score3 = 50
// pass2 = score3 >= 50? "You passed": "You failed"
// console.log(pass2)

// // nested if conditional statements

// let height = 120
// let age = 100

// if(height >= 120 ){
//     console.log("You can ride on rollercoaster ")
    
//     } if(age <= 12){
//         console.log("Your ticket is $5")
//     }else if(age <= 18){
//         console.log("Your ticket is $7")
//     }else if(age >= 45 && age <= 55){
//         console.log("It's mid life crisis. Everything will be okay")
//     }else if(age >= 75){
//         console.log("Free ride for eldery")
// }else{
//    console.log("You don't exist") 
// }


// conditional statement in normal format vs Switch..Case format

// normal format

let light_status = 1; // 0 = turn of light,  1 = turn on light
let light;

if(light_status == 0){
    light = "turn of the light";
}else if(light_status==1){
    light= " turn on light";
}else{
    light= "system error"
}
console.log(light)



// Switch.. Case
switch(light_status){
    case 0: light="turn off light";
    break;
    case 1: light="turn on light";
    break;
    default:light="system error"
}
console.log(light)

let month = 9; 
let number;

switch(month){
    case 1: number="Jan";
    break;
    case 2: number="Feb";
    break;
    case 3: number="March";
    break
    case 4: number="April";
    break;
    case 5: number="May";
    break;
    case 6: number="June";
    break
    default:number="month not found"
}
console.log(number)

if(month == 1){
    number = "Jan";
}else if(month == 2){
    number = "Feb";
}else if(month ==3){
    number = "March"
}else if(month == 4){
    number = "April";
}else if(month == 5){
    number="May";
}else{
    number = "Month not found"
}
console.log(number)


// using conditional to compare greater or less value

let x=200, y=100

if(x>y){
    console.log("x is greater than y");
}else if(x<y){
    console.log("Y is greater than x")
}else{
    console.log("x and y are even")
}

// using conditional statement to check even or odd number

let num = 50;
if(num % 2 == 0){
    console.log("Even number")
}else{
    console.log("Odd number")
}

// while loop 
let count = 1;
while(count <= 5){
    console.log("keep doing at n times", count);
    if(count == 3){
        break;
    }
    count ++ ; // 1=> 2 =>3 => 4....
}

// for loop
for(let count2 = 1; count2 <= 5; count2++ ){
    console.log("Hello world")
}

// Do while
let doo = 0;
do{
    console.log(doo);
    doo ++
}while(doo <= 5){

};

// compare do... while() to while()
// let boo = 1;
// while(true){
//     if(boo == 100) break;
//     boo ++;
//     console.log(boo)
// }

// break()
for(let bazz = 1; bazz <= 10; bazz ++ ){
    if (bazz == 7) break; {
        console.log(bazz);    
    }
}
console.log("Loop end");

// continue()
for(let foo = 1; foo <= 10; foo ++ ){
    if (foo == 7) continue; {
        console.log(foo);    
    }
}
console.log("Loop end");

// Null, undefined, NaN
// Nan => Not A Number
let a=null;
if (a) {
    console.log("a is null");
}else{
    console.log("a is not null");
}

let aa=null;
if (!aa) {
    console.log("aa is null");
}else{
    console.log("aa is not null");
}

let naan = 10 * "hello";
console.log(naan); // output NaN

// function without return and parameters
function greeting() {
    console.log("Hello world");
}
greeting();

function message() {
    alert("Thanks for clicking me")
}

function displayName() {
    document.write("I am a developer")
    
}

// function(s) with parameter(s) and return
function MathsAddition(t) {
    console.log("Received number is = ", t);
}
MathsAddition(6)
MathsAddition(20)
let myvar = "Apple";
MathsAddition(myvar)

function fullname(fname, lname, address) {
    console.log("Firstname is :",  fname, "|", "Lastname is : ", lname, "|", "Address is :", address);
}

fullname("Sengdao", "oudomsinh")
fullname("John", "Wick", "New York")
fullname("John",)



function sumation(num1, num2) {
    let total = num1 + num2;
    console.log("total sum is : ", total);
}

sumation(40, 30)


function localIP() {
    return "123456789"
}

let ipadress = localIP();
console.log("IP Address is : ", ipadress);


function uni() {
    let college = "College of the Atlantic";
    return college;
}
console.log("University i study at is ", uni());

function newSumation() {
    return 10*10;
}

let newSum = newSumation()
console.log("Summation of number is : ", newSum);

function setSalary(salary) {
    let bonus = 1000;
    return bonus + salary
}

///
let monthly = setSalary(2000), rent = 700;

console.log("Total earning is : ", monthly - rent );


function family(dad, mom) {
    return dad + mom
}

let parent = family(1, 1)
console.log("dad + mom = " , parent);


// 
function fullname(fname, lname, address = "Boston") {
    console.log("Firstname is :",  fname, "|", "Lastname is : ", lname, "|", "Address is :", address);
}

fullname("Sengdao", "oudomsinh")
fullname("John", "Wick", "New York")
fullname("John","Doe", "Unknown")