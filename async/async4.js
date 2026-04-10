/*
what is async ?
what is await?
how async await works behind the scences?
Examples of using async/await
Error handling
Interview
Async await vs Promise.then/.catch
*/

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve("Promise Resolved Value!!");
    }, 20000);
});

const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved Value");
    }, 40000);
});;
const val2 = await pr2;
console.log("Namaste Javascript");
console.log(val2);
}
handlePromise();
//await - await can only be used inside an async function.
// function getData(){
//     pr.then((res) => console.log(res));
// }
// getData();
