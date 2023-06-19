getDataCustomer = (customerName, customerAddress)=>{
    if(!customerAddress){
        customerAddress = "Boston"; // Boston is the default value for customerAddress.
    }
    if(!customerName){
        customerName = "John Doe"; // default customer name is John Doe
    }
    const address = `Customer Name: : ${customerName}
    Address: ${customerAddress}`
    return address
}
console.log(typeof(getDataCustomer)); // function
console.log(getDataCustomer("Sengdao", "New York"));
console.log(getDataCustomer("Soudomsihn", "Bangkok"));
console.log(getDataCustomer("John Doe")); // customerAddress is not given. So Boston is automatically filled in customerAddress
console.log(getDataCustomer( undefined, "London")); // customer Name is not given/undefined. So John Doe is automatically filled in for customer name


` output:

Customer Name: : Sengdao
    Address: New York
Customer Name: : Soudomsihn
    Address: Bangkok
Customer Name: : John Doe
    Address: Boston // Boston is the default value defined at line 3
Customer Name: : John Doe // John Doe is the default value defined at line 6
    Address: London

`