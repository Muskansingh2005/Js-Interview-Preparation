//destructuring - it is a convenient way of extracting values from arrays or objects and assigning them to variables. It allows us to unpack values from arrays or properties from objects into distinct variables, making our code more concise and readable. Destructuring can be used with both arrays and objects, and it can also be used in function parameters to extract values directly from the arguments passed to the function. This feature is particularly useful when working with complex data structures, as it helps us avoid repetitive code and makes it easier to access the values we need.
// const course = {
//   coursename: "javascript",
//   price: "999",
//   courseinstructor: "Muskan",
// };
// //course.courceinstructor;

// const { courseinstructor : instructor} = course;
// //console.log(courseinstructor);

// console.log(instructor);
// {
//     "name": "Muskan",
//     "coursename": "React",
//     "price": "1999"
// }
// "https://api.github.com/users/Muskansingh2005";

//swap the value of two variables 
// let a = 10;
// let b = 20;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

//elements in am array
const colors = ["red", "green", "blue", "yellow", "orange", "black"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//extract values from objects - 
function displayPerson({firstName, lastName , age , job="unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}
const person1 = {
    firstName : "Spongebob",
    lastName: "squarePants",
    age: 20,
    job: "Fry Cook"
}

const person2 = {
    firstName: "Muskan",
    lastName : "Singh",
    age: "34",
}

displayPerson(person2);
// const{firstName, lastName, age, job} = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);