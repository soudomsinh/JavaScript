// MultiLine String vs Interpolation


//   Single quote string vs MultiLine String
const address1 = "Name: John Doe Email: example@gmail.com Contact: 123456787"
// Single quote has limitation-it does not allow to enter/indent new line whilst backtick can
const address2 = `Name: John Doe 
Email: example@gmail.com 
Contact: 123456787` // backitck

console.log(address1);
console.log(address2);


// interpolation
let customerName = "Sara Doe"
let age = "23"
let address = "Bangkok"

const customer_info = `Name: ${customerName}
Email: example@gmail.com 
Contact: 123456787
Age: ${age}
Address: ${address}` // backitck

console.log(customer_info);