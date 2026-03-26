const accountId = 133457;
let accountEmail = "muskan@gmail.com";
var accountPassword = "12345";
accountcity = "noida";

accountEmail = "muskan123@gmail.com";
accountPassword = "21212121";


console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountcity);

console.table([accountId, accountEmail, accountPassword, accountcity]);
//var = old way to declare a variable, it can be redeclared and updated(before ES6)
//function scoped 
//let = modern(ES6) way to declare a variable, it can be updated but not redeclared
//blocked scoped 
//const = modern(ES6) way to declare a variable, it cannot be updated or redeclared
//blocked scoped 
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// console.log(a);//works because var is function scoped
// console.log(b);//error because let is blocked scoped
// console.log(c);//error because const is blocked scoped
//hoisting = variable are moved to the top before execution.
console.log(d);
var d = 40;
//no error but value is undefined because of hoisting 
// console.log(e);
// let e = 50;
// //error because let is not hoisted 
// console.log(f);
// const f = 60;
//error because const is not hoisted
//datatype conversion confusion 
//let score = "33abc"; -> NaN
//let score = "hitesh";
//let score = true; -> 1
// console.log(typeof score);
// console.log(typeof(score));
// let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);
// let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); => true

// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// let str1 = "hello";
// let str2 = "muskansingh";

// let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
//console.log(true + 3); => 4 
// console.log(+true); //1
// console.log(+""); //0

// let num1 , num2 , num3;
// num1 = num2 = num3 = 2+2;
// console.log(num1);

// let gameCounter = 100;
// //++gameCounter;
// //gameCounter++;
// console.log(gameCounter++);
// console.log(gameCounter);

//a++ ->  first increment then use
//++a -> first use then increment
console.log("2" > 1); // true
console.log("02" > 1); //true
console.log(null > 0); //false because null is converted to 0 and 0 is not greater than 0
console.log(null == 0);//false because null is only equal to undefined and not equal to any other value
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" == 2);//true because == checks for value only and not type
console.log(null == undefined);
console.log("2" === 2);//false because === checks for both value and type
//learn the basics of javascript - 
//everything in js happens inside an execution context -> ec have two component memory(variable environement) and code component(thread of execution)
//1. variable environment -> where all the variable and function declaration are stored in the form of key value pair
//js is a synchronous and single threaded language -> it can execute one line of code at a time in a specific order

//difference between undefined and not defined 
//undefined -> a variable is declared but not assigned any value to it
//undefined is not like a empty value it is a type of value which take memory space and work like a placeholder for future value assignment
//not defined -> a variable is not declared at all and we are trying to access it
//javascript is known as lossely typed or dynamic typed language -> we can change the type of value assigned to a variable at runtime
// it is not good practice in js - a = undefined
//how javascript code is executed -> 
var n = 2;
function square(num){
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);

//hoisting in js -
//hoisting is a default behavior of js where all the variable and function declaration are moved to the top of their scope before execution.
console.log(z);
var z = 30;
//no error but value is undefined because of hoisting.
//temporal dead zone -> it is the time between the hoisting of a variable and its actual declaration in the code. during this time we cannot access the variable and it will throw an error if we try to access it.
//closure in js -
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();