// const cart = ["shoes", "pants","kurta"];

// const promise = createOrder(cart);
// console.log(promise);

// promise.then(function(orderId){
//     console.log(orderId);
//     return orderId;
// }).then(function(orderId){
//    return proceedToPayment(orderId);
// }).then(function(paymentInfo){
//     console.log(paymentInfo);
// }).catch(function(err){
//     console.log(err.messdage);
// }).then(function(orderId){
//     console.log("No matter whats happens, I will definitely be called.");
// })

// function createOrder(cart){
//     const pr = new Promise(function(resolve, reject){
//         //createOrder
//         //validateCart
//         //orderId
// if(!validateCart(cart)){
//     const err = new Error("cart is not valid");
//     reject(err);
// }
// const orderId = "12345";
// if(orderId){
//     setTimeout(function(){
//         resolve(orderId);
//     },2000);
// }
//     });
//     return pr;
// }

// function proceedToPayment(orderId){
//     return new Promise(function(resolve, reject){
//         resolve("Payment successful");
//     });
// }

// function validateCart(cart){
//     return true;
// }

//lets practice - 
//why promise exists - problem before promise - callback hell, inversion of control, error handling, etc.
// setTimeout(() => {
//     console.log("step 1");
//     setTimeout(() => {
//     console.log("step 2 ");
//     setTimeout(()=>{
//         console.log("step 3");
//     },1000)
//     },1000)
    
// },1000);

//this become callback hell, which is hard to read and maintain. with promise we can write this code in a more elegant way, by chaining .then() methods.
//creating a promise - 
// let promise = new promise((resolve , reject) => {
//     //async work - DB calls, network calls, cryptography, etc.
// })

//when you create a promise object it is in pending state, which means that the result of the asynchronous operation is not yet available. it can be either fulfilled or rejected. when the asynchronous operation is completed successfully, the promise is fulfilled and the resolve function is called with the result. if there is an error during the asynchronous operation, the promise is rejected and the reject function is called with the error. we can handle the result of the promise by chaining .then() methods to it, which will be called when the promise is fulfilled, and .catch() method to handle any errors that may occur during the asynchronous operation.
//Real example - 
// let myPromise = new Promise((resolve , reject) => {
//     let success = false;
//     if(success){
//         resolve("Data received");
//     }else{
//         reject("Error occurs");
//     }
// });

//consuming a promise - .then() and .catch() methods are used to consume a promise. .then() method is called when the promise is fulfilled, and it takes a callback function as an argument, which will be called with the result of the promise. .catch() method is called when the promise is rejected, and it also takes a callback function as an argument, which will be called with the error that caused the rejection. we can chain multiple .then() methods to handle the result of the promise in a more elegant way than callbacks, and we can also use .catch() method to handle any errors that may occur during the asynchronous operation.

// myPromise.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

//promise chaining - passing result from .then() to another 
// new Promise((resolve) => {
//     resolve(2);
// })
// .then(num => {
//     console.log(num); // 2
//     return num * 2;
// })
// .then(num => {
//     console.log(num);
//     return num * 2;
// })
// .then(num => {
//     console.log(num);
// })
//
//.then() : received previous result , returns new value , passes it to next .then()
//.then() - always returns a new Promise

//Basic of error handling 
// new Promise((resolve) => {
//     resolve(10);
// }).then(num => {
//     return num * 2;
// })
// .then(num => {
//     throw new Error("Something broke!");
// })
// .then(num => {
//     console.log(num);//skipped due to error
// })
// .catch(error => {
//     console.log(error.message);
// })

//connect with fetch API - 

// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

//fetch() -> promise
//.then(response)
//.then(data)
//.catch(error)

//async and await  - why async , await exist - 
//problem in promise - 
// fetch(url){
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
// }
//work but hard to read and too many .then()
//solution - async and await - it allows us to write asynchronous code in a more synchronous way, making it easier to read and maintain. with async and await, we can write asynchronous code that looks like synchronous code, which makes it easier to understand the flow of the code and handle errors. async function returns a promise, and we can use await keyword to wait for the promise to resolve before moving on to the next line of code. this allows us to avoid callback hell and make our code more readable and maintainable.
//async - async makes a function always return a Promise 
// async function test(){
// return 5;
// }
// //behind the scene 
// test();
// Promise.resolve(5);
//what is await - await pause execution until a Promise resolves 
// async function test(){
//     let result = await Promise.resolve(10);
//     console.log(result);
// }
//flow - Promise starts , await Pause function , when resolved -> continues
// async function example(){
//     console.log("start");
//     let data = await Promise.resolve("Hello");
//     console.log(data);
//     console.log("End");
// }
// example();
async function getUsers(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

    console.log(data);
    }catch(error){
        console.log(error);
    }
}
async function test(){
    console.log("A");
  await  Promise.resolve();

    console.log("B");
}
// test();
// console.log("C");
//promise all() - it allows us to run multiple promises in parallel and wait for all of them to resolve before proceeding. it takes an array of promises as an argument and returns a new promise that resolves with an array of the results of the input promises, in the same order as the input promises. if any of the input promises reject, the returned promise will reject with the reason of the first rejected promise. this is useful when we have multiple asynchronous operations that can be run in parallel and we want to wait for all of them to complete before moving on to the next step in our code.
// Promise.all([
//     Promise.resolve("A"),
//     Promise.resolve("B"),
//     Promise.resolve("C")
// ])
// .then(res => console.log(res))
// .catch(err => console.log(err));


//output - ["A","B","C"]


// Promise.all([Promise.resolve("A"), Promise.reject("Error"), Promise.resolve("C")])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

  //output - Error 
  //Promise.allSettled() - it allows us to run multiple promises in parallel and wait for all of them to settle (either fulfilled or rejected) before proceeding. it takes an array of promises as an argument and returns a new promise that resolves with an array of objects, each object representing the outcome of each input promise. each object has a status property that indicates whether the promise was fulfilled or rejected, and a value or reason property that contains the result or error of the promise, respectively. this is useful when we want to know the outcome of all promises, regardless of whether they were fulfilled or rejected, and we want to handle each outcome separately.
// Promise.allSettled([
//     Promise.resolve("A"),
//     Promise.reject("E")
// ])
// .then(res => console.log(res))
// .catch(err=> console.log(err));

//output - [{status: "fulfilled", value: "A"}, {status: "rejected", reason: "E"}]

//promise.race() - it allows us to run multiple promises in parallel and returns a new promise that resolves or rejects as soon as one of the input promises resolves or rejects. it takes an array of promises as an argument and returns a new promise that resolves or rejects with the value or reason of the first resolved or rejected promise, respectively. this is useful when we want to get the result of the fastest promise among multiple promises, and we don't care about the outcome of the other promises.
//return first completed promise
// Promise.race([
//     new Promise((resolve) => setTimeout(() => resolve("A"), 6000)),
//     new Promise((resolve) => setTimeout(() => resolve("B"), 5000)),
//     new Promise((reject) => setTimeout(() => reject("Error"), 3000))
// ])
// .then(res => console.log(res))
// .catch(err => console.log(err));

//Promise.any() - its return the first fulfilled(successful) promise and ignores rejected promises. it takes an array of promises as an argument and returns a new promise that resolves with the value of the first fulfilled promise, or rejects with an AggregateError if all input promises are rejected. this is useful when we want to get the result of the first successful promise among multiple promises, and we don't care about the outcome of the other promises.
// Promise.any([
//   Promise.reject("Error 1"),
//   Promise.resolve("Success"),
//   Promise.resolve("Another Success"),
// ])
// .then(result => console.log(result))
// .catch(err => console.log(err));
//output - success
Promise.any([
  Promise.reject("Error 1"),
  Promise.reject("Error 2") ,
  Promise.reject("Another Error"),
])
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

//output - [errors]: [ 'Error 1', 'Error 2', 'Another Error' ]
//more practice - 
const P1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve("P1 Success"), 1000);
})

const P2 = new Promise((resolve , reject) => {
   // setTimeout(()=> resolve("P2 Success"), 2000);
    setTimeout(() => reject("P2 Failed"), 2000);
})

const P3 = new Promise((resolve , reject) => {
    setTimeout(() => resolve("P3 Success"), 3000);
})

// Promise.all([P1 , P2 , P3]).then(res => console.log(res))
// .catch(err => console.log(err));

// Promise.allSettled([P1 , P2 , P3]).then(res => console.log(res))
// .catch(err => console.log(err));

Promise.race([P1 , P2, P3]).then(res => console.log(res))
.catch(err => console.log(err));
//wether it is success or failure, it will return the first settled promise. in this case P1 will be returned as it is the first completed promise, even though P2 is rejected. if P2 was resolved before P1, then P2 would have been returned instead.
