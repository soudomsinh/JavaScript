// Array Filter

const data = [10,30, 111,45, 53,34,30,47,60,135, 5, 78]
const foo = data.filter(num => num >=50)
// console.log(foo); // output: [ 53, 60, 78, 111, 135 ]

// Array Object

const employees = [
    {fname: "Neo", lname: "Anderson", salary: 5400, department: "Programmer" },
    {fname: "Sara", lname: "Anderson", salary: 4700, department: "Product Manager" },
    {fname: "Adam", lname: "Smith", salary: 7000, department: "CEO" },
    {fname: "John", lname: "Doe", salary: 3400, department: "HR" },
    {fname: "Trinity", lname: "XyZ", salary: 3700, department: "Accounting" },
    {fname: "Joel", lname: "Aliyaza", salary: 4400, department: "Graphic Designer" },
]



// filter for salary that is higher than 4500

const filteredSalary = employees.filter(foo => foo.salary>=4500)
console.log(filteredSalary);

`
[
    {
      fname: 'Neo',
      lname: 'Anderson',
      salary: 5400,
      department: 'Programmer'
    },
    {
      fname: 'Sara',
      lname: 'Anderson',
      salary: 4700,
      department: 'Product Manager'
    },
    { fname: 'Adam', lname: 'Smith', salary: 7000, department: 'CEO' }
  ]

`