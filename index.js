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