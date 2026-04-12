/*
what is async ?
what is await?
how async await works behind the scences?
Examples of using async/await
Error handling
Interview
Async await vs Promise.then/.catch
*/

// const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//          resolve("Promise Resolved Value!!");
//     }, 20000);
// });

// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise 2 Resolved Value");
//     }, 40000);
// });;
// const val2 = await pr2;
// console.log("Namaste Javascript");
// console.log(val2);
// handlePromise();
//await - await can only be used inside an async function.
// function getData(){
//     pr.then((res) => console.log(res));
// }
// getData();
//real world example of async await 
//https://api.github.com/users/Muskansingh2005
const API_URL = "https://api.github.com/users/Muskansingh2005";
//const API_URL = "https://randomApiurl"//intentional wrong url to show error handling
async function handlePromise(){
    try{
const data = await fetch(API_URL);
const jsonValue = await data.json();
console.log(jsonValue);
    }
//fetch() => Response object
//Response object has a method called json() which returns a promise that resolves to the JSON data
//fetch() => Response.json() => jsonValue
catch(err){
    console.log("Error:", err);
}
}
handlePromise();
//interview Tips -
//what is async await? 
//aync await is just a syntatic sugar over promises, it makes our code look cleaner and more readable. It allows us to write asynchronous code in a synchronous manner, making it easier to understand and maintain. Async functions return a promise, and we can use the await keyword to wait for the promise to resolve before moving on to the next line of code. This helps us avoid callback hell and makes error handling easier with try/catch blocks.

//how many things you should know befor starting react 
//Basics of js - variables -> var , let and const , hoisting of variable , function -> it is the heaart of js , inside function -> Arrow function , Higher order functions , arrays , objects , object destructuring , rest operator , spread operator , if else , ternary operator , ussing && and || , optional chaining , map , filter and reduce function and sort function , events Listener , event bubbling and event capturing , settimeout and settimeintervals , callbacks , callbacks hell , promises , promise APis , 
//how fetch function works 
//try and catch 
//Error handling

