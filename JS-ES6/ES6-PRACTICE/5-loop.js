const data = [10,30, 111,45, 53,34,30,47,60,135, 5, 78].sort((a, b)=> a-b)
for(let k = 0; k< data.length; k++){
    if(data[k] > 50) break
    console.log(`data = ${data[k]}`); 

    `
    output:
    
    data = 5
    data = 10
    data = 30
    data = 30
    data = 34
    data = 45
    data = 47
    
    `
}


const foo = data.filter(num => num >=50)
console.log(foo); // output: [ 53, 60, 78, 111, 135 ]