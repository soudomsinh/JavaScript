// loop in array
// for loop, forEach, forOf

const data = [10, 20, 30, 40, 50,60,80, 140,150];

// for loop
for(let i = 0; i < data.length; i++){
    if (data[i] >=40)
    break;
    // console.log(`order ${i} = ${data[i]}`);
}

// foreEach
data.forEach(element => {
    // console.log(`Element =  ${element}`);
});
                // forEach loop can't be used with break() and continue()
let sum = 0;
data.forEach(element => {
    sum += element;
    // console.log(`total =  ${sum}`);
});

// forOf

for (const fooElement of data){
    if (fooElement >= 50) {
        break;
    }
    // if(fooElement >= 50) break # either one works
    console.log(`Element: ${fooElement}`);
}