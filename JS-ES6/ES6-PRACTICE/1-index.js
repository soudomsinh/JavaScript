const data = [90,20,34,12,50,64,119,45].sort((a,b)=>b-a); // sort in descending order uses b-a and sort in ascending order uses a-b
for(let t =0; t<data.length; t++){
    console.log( `T = ${data[t]}`);
}