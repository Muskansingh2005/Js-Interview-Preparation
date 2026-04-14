//map - map() is used to transform every element of an array and return a new array.
//how its work internally - 
//its loop through array
//Applies a function to each item 
//Returns new array

//syntax -
// Array.map((element , index) => {
//     return newValue;
// })

// let nums = [1,2,3]

// let result = nums.map(num => num * 2);
// console.log(result);

//real world example of map - 
// let users = [
//     { name: "aman" },
//     { name: "riya" },
// ];
// let names = users.map(user => user.name);
// console.log(names);

// //change the given name into uppercase using map 
// let names1 = ["shubham","aman","vinay","sanjay","priyanshu"];

// let upperCase = names1.map(name => name.toUpperCase());
// console.log(upperCase);
// //add Mr. befor each name in the array using map
// let mrNames = names1.map(name => "Mr. " + name);
// console.log(mrNames);

//Filter - filter() return only those elements which satisfy a condition.
//how its work 
//loop through array 
//check condition 
//if true -> include or add to new array 
//if false -> ignore 

//syntax -
// Array.filter((element)=>{
//     return condition;
// })

// let nums = [1,2,3,4,5,6,,7,8]

// let evenNums = nums.filter(num => num% 2 == 0);
// console.log(evenNums);
// users = [{name: "muskan", age : 18},
//     {name: "riya", age : 17},
//     {name: "shubham", age : 20},
//     {name: "vinay", age : 19},
//     {name: "sanjay", age : 16},
//     {name: "priyanshu", age : 21}]


//     let adults = users.filter(user => user.age > 18);
//     console.log(adults);

//filter long name( > 4 letters)
// let names = ["shubham","aman","vinay","sanjay","priyanshu","riya","aman","ayu"];
// let longNames = names.filter(name => name.length > 4);
// console.log(longNames);

//reduce - reduce() is used to reduce an array to a single value by applying a function to each element and accumulating the result.
//how its work 
//loop through array 
//apply function to each item and accumulate result 
//return single value

//syntax -
// Array.reduce((acc , curr)=>{
//     return something;
// })
//sum of all numbers in an array using reduce
// let nums = [1,2,3,4,5,6,7];
// let result = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(result);

//maximum number in an array using reduce
// let nums = [1,3,7,2,5,0];

// let max = nums.reduce((acc,curr) => {
//    return curr > acc ? curr : acc; //ternary operator - if curr is greater than acc then return curr else return acc
// },nums[0]);

// console.log(max);
//return vs console.log 
//console.log() - 1. print value
//2. Does not send it back to where the function was called
//return - 1. sends value back to where the function was called
//2.Does not print value


//combine all the concept together - map, filter and reduce 
let users = [
    {name: "muskan", age: 20, salary: 50000},
    {name: "riya", age: 17, salary: 30000},
    {name: "shubham", age: 20, salary: 60000},
    {name: "vinay", age: 19, salary: 40000},
    {name: "sanjay", age: 16, salary: 20000},
    {name: "priyanshu", age: 21, salary: 70000}
];

let adult = users.filter(user => user.age >=18);
console.log(adult);

let names = users.map(user => user.name);
console.log(names);

let totalSalary = users.reduce((acc , curr) => acc + curr.salary, 0);
console.log(totalSalary);


//Product card system - 
let cart = [
    {name: "shirt" , price : 500, quantity: 2},
    {name: "pant" , price : 1000, quantity: 1},
    {name: "shoes" , price : 2000, quantity: 1},
    {name: "watch" , price : 3000, quantity: 1},
    {name: "cap" , price : 300, quantity: 3},
]


let cartValue = cart.reduce((acc , item) => acc + item.price * item.quantity,0);
console.log(cartValue);

let expensiveItems = cart.filter(cartItem => cartItem.price > 1000);
console.log(expensiveItems);

let productNames = cart.map(carts => carts.name);
console.log(productNames);