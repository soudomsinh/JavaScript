summation = (x, y) => {
    return x + y
}

// console.log(summation(50, 100));


summation2 = (... numerArr) => {
    let total = 0;
    for(let number of numerArr) total += number
    return total
}
// ... is the spread operator

console.log(summation2(50, 1000));
console.log(summation2(50, 100));
console.log(summation2(50, 1000, 200, 400, 20));
