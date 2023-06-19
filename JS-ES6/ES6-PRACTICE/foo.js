const data = [10,30, 111,45, 53,34,30,47,60,135, 5, 78]
console.log(data);
const popData = data.pop() 
console.log(popData);// output: 78

const datShift = data.shift()
console.log(datShift); // output: 10
data.unshift(666) // [666, 30, 111, 45,  53,34, 30,  47, 60, 135,5]
console.log(data);
data.push(999)
console.log(data); // [666,  30, 111, 45,  53,34,  30,  47, 60, 135,5, 999]

const data2 = [90,20,34,12,50,64,119,45]

const dataConcat = data.concat(data2)
console.log(dataConcat); // [666, 30, 111, 45,  53, 34, 30,47, 60, 135,  5, 999, 90, 20,34, 12,  50, 64, 119, 45]