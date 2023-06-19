// Array Filter 

const fooNumber = [10,33,44,60,85,14,32,56,37,90,67];
const filteredNumber = fooNumber.filter(foo =>foo>30).sort() 
console.log(filteredNumber); //output : [32, 33, 37, 44, 56,60, 67, 85, 90]

//Filter in Array Object 
const employees = [
    {empName: "John Doe", salary: 3500, department:"Programmer"},
    {empName: "jojo", salary: 2200, department:"Accounting"},
    {empName: "Joey ", salary: 1700, department:"Accounting"},
    {empName: "Monica", salary: 2600, department:"cook"},
    {empName: "Chandler", salary: 2700, department:"Marketing"}
]


const filteredSalary = employees.filter(filteredData =>filteredData.salary >2000).sort();

` const filteredSalary = employees.filter(filteredData =>filteredData.salary >2000).sort().filter(kk=>kk.department==="Accounting");
    // this adds more conditions to the filter
` 

console.log(filteredSalary);
`

only salary thar meets condition show
[
    { empName: 'John Doe', salary: 3500, department: 'Programmer' },
    { empName: 'jojo', salary: 2200, department: 'Accounting' },
    { empName: 'Monica', salary: 2600, department: 'cook' },
    { empName: 'Chandler', salary: 2700, department: 'Marketing' }
  ]
`