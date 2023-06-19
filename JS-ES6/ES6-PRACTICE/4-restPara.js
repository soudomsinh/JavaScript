function summation(x, y){
    return x + y
}

// console.log(summation(5, 7));

summation2 =(... num)=> {
    let total = 0;
    for(let number of num)total += number
    return total
}

console.log(summation2(5, 7, 5,7,9));
