// common way

const colors = ["Blue", "Green", "yellow", "ornage"];
const blue = colors[0]
console.log(blue);

// destructure way
const [,green, , orange] = colors
console.log(green);
console.log(orange);


// example 2
function getScore(){
    return [70,78,75,80,85,83,89,90,95]
}

const score = getScore();
console.log(score);

const
     student1 = score[0],
     student2 = score[1],
     student3 = score[2],
     student4 = score[3],
     student5 = score[4],
     student6 = score[5],
     student7 = score[6],
     student8 = score[7],
     student9 = score[8]
    ;
console.log(student1);



const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Fridays"];
const[day1, day2, day3, day4, day5 ] = weekdays
// console.log(day1);


function weather(){
    return ["Sunny", "cloudy", "rainny", "stormy", "snowy"]
}



const[monday, tueday, Wednesday, Thursday, Fridays] = weather()
console.log( `Monday weather is = ${monday}`);
console.log( `Friday weather is = ${Fridays}`);
