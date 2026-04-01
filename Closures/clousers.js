//clousers -
//closure is a function having access to the parent scope, even after the parent function has closed.
// function init(){
//     let name = "Muskan";
//     function displayName(){
//         console.log(name);
//     }
//    return displayName;
// }
// let myfuc = init();
// myfuc(); // Muskan

// function outer(){
//     let username = "firefox";
//     console.log(secret);// ReferenceError: secret is not defined
//     function inner(){
//         let secret = "my2005";
//         console.log(username);
//     }
//     function inner2(){
//         console.log(username);
//         console.log(secret);// ReferenceError: secret is not defined
//     }
//     inner();
//     inner2();
// }
// outer();
// console.log("Too outer :" + username); // ReferenceError: username is not defined
//real world example of clouser - 
// document.getElementById("Green").onclick = function () {
//   document.body.style.backgroundColor = `green`;
// };
// document.getElementById("Blue").onclick = function () {
//   document.body.style.backgroundColor = `blue`;
// };
// function clickHandler(color){
//    // document.body.style.backgroundColor = `${color}` - its not working because its directly execute the function and not waiting for the click event to happen, so we need to return a function which will be executed on click event
//    return function(){
//     document.body.style.backgroundColor = `${color}`;
//    }
// }
// document.getElementById("Green").onclick = clickHandler("green");
// document.getElementById("Blue").onclick = clickHandler("blue");

//next example of closure - 
// function createCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());

//lexical scope means that a function can access variables from its parent scope based on where its defined in the code, not where it is called. in the above example the inner function has access to the count variable because it is defined inside the createCounter function, even if we call the counter function outside of the createCounter function, it still has access to the count variable because of lexical scope.