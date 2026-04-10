// const cart = ["shoes","pants","kurta"];
// createOrder(cart , function(orderId){
//     proceedToPayment(orderId);
// });

 //const promise = createOrder(cart);

// promise.then(function (orderId){
//     proceedToPayment(orderId);
// });

// const GITHUB_API = "https://api.github.com/users/akshaymarch7";
// const user = fetch(GITHUB_API);

// console.log(user);

//promise - promise is an placeholder which will be filled later with the result of an asynchronous operation. it can be in one of three states - pending, fulfilled and rejected. it allows us to handle asynchronous operations in a more elegant way than callbacks, by chaining .then() and .catch() methods to handle the result of the promise. it also helps to avoid callback hell and inversion of control issues that arise with callbacks.
//or promise is an object which represents the eventual completion (or failure) of an asynchronous operation and its resulting value. it allows us to handle asynchronous operations in a more elegant way than callbacks, by chaining .then() and .catch() methods to handle the result of the promise. it also helps to avoid callback hell and inversion of control issues that arise with callbacks.

// const promise = createOrder(cart)
// .then((orderId) => proceedToPayment(orderId))
// .then((paymentInfo) => showOrderSummmary(paymentInfo))
// .then((paymentInfo)=> updateWalletBalance(paymentInfo));


// let promise = new Promise((resolve, reject) => {
//     let success = true;
//     if(success){
//         resolve("Data received");
//     }else{
//         reject("Error occurres");
//     }
// });
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000);
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Promise 2 consumed");
})







