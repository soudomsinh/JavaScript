                            // join() vs concatenation()

// join()
const data1 = [200, 300, 400];
console.log(typeof(data1)); // array object
const result = data1.join("|"); // join() converts to string data type and separated by vertical bar
console.log(result);
console.log(typeof(result)); // data type: string

// concat
const data2 = [500, 600, 700];
const dataConcat = data1.concat(data2); // output:  [ 200, 300, 400, 500, 600, 700 ]
console.log(dataConcat);



                                                // push, pop, shift, unshift
const data3 = [5,6,7,8,9];
console.log(data3);
data3.push(18);
console.log(data3);
data3.push(40);
// data3.push([70, 100,150]);
// console.log(data3);
data3.push(...[70, 100,150]); // add spread operator with "..." infront of [70, 100,150]
console.log(data3);

data3.pop() // pop() remove the last index in the array # 150
console.log(data3); // [ 5,  6,  7,   8, 9,18, 40, 70, 100] # 150 is removed 

data3.shift() // shift() remove the first index in the array # 5
console.log(data3);  // [ 6,  7,   8, 9,18, 40, 70, 100] # 5 is removed 

data3.unshift(999) // unshift() append new index at first index in the array # 999
console.log(data3); // [999,  6,  7,   8, 9, 18, 40, 70, 100] # 99 is added


                                                    // splice & slice 

// splice(start: number, range of index to be deleted) remove index in the middle of array

const newData = [1000, 3000, 500, 700, 9000];
console.log(newData);
// newData.splice(1, 3) // delete index 3000, 500, 700 in the index
newData.splice(1, 3, 888) // delete index 3000, 500, 700 in the index and add 888 into index
console.log(newData); // output [ 1000, 9000 ]


// slice (start, end)

const sliceData = [20, 40, 50, 70, 90];
console.log(sliceData);
const sliceResult = sliceData.slice(1,4) // start at 1st index until 3rd index. 4th index is exclusive. # 40, 50, 70,
console.log(sliceResult); // [ 40, 50, 70 ] 


                    //// SEARCHING
        `searching/finding in array with 

        indexOf() = searches for a specific value. Return result in number of index. Return-1 if not found
        find()    =  
        finIndex() = searches for a value that meets certain criteria. Return -1 if not found
        
        ` 

const colors = ["red", "green", "blue", "purple", "white", "black", "yellow"]
console.log(colors);
const redIndex = colors.indexOf("red") // output: 0 cuz "red" is at index 0
console.log(redIndex);
const notFoundIndex = colors.indexOf("skyblue");
console.log(notFoundIndex); //output: -1 meaning index not found cuz "skyblue" is not define in colors
const purpleIndex = colors.indexOf("purple") // output: 3 cuz "purple" is at index 3
console.log(purpleIndex);
const foundGreen = colors.find(element => element === "green")
console.log(foundGreen); //output: "green"

const array1 = [5, 11,12, 8, 130, 44];
const found = array1.find(element => element > 15); //The Array.find() method checks each element in the array from first to last, according to their index, not their value. It doesn't sort or rearrange the array before it begins its search.
console.log(found);
// expected output: 130