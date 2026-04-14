//javascript is syncronous single threaded language - it can do one thing at a time 
//synchronous - line by line execution 
// console.log("A");
// console.log("B");
// console.log("C");
// Asynchronous JavaScript Example
// console.log("A");
// setTimeout(() => {
//     console.log("B");
// },2000);
// console.log("C");
//js sends async task to web api 
//then continues execution 
//later gets result

//callback(Basic) 
// function fetchData(callback){
//     setTimeout(() => {
//         callback("Data received");
//     },2000);
// }

// fetchData((data) => {
//     console.log(data);
// });
const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart,function(){
api.proceedToPayment(function(){
    api.showOrderSummary(function(){
        api.updateWallet(function(){
    })
});
})
})

//callback hell - when we have multiple nested callbacks which makes the code hard to read and maintain
//inversion of control- when we pass a callback function to another function and that function calls our callback function, we are giving control of our code to that function, which can lead to unexpected behavior and bugs.
//importance of callbacks - 1. Callbacks are used to handle asynchronous operations in JavaScript, such as fetching data from an API or reading a file. 2. They allow us to execute code after a certain task is completed, without blocking the main thread of execution. 3. Callbacks are also used in event handling, where we can specify a function to be called when a certain event occurs, such as a button click or a form submission.
 //1. issue with callbacks 
 //a. Callback Hell
 //b. Inversion of control