let searchInput = document.getElementById("searchInput");
let loadBtn = document.getElementById("loadBtn");
let userList = document.getElementById("userList");
let Status = document.getElementById("status");

let users = []; //store data

loadBtn.addEventListener("click", async ()=>{
    try{
        Status.innerText = "Loading...";
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        users = data; //store users
        Status.innerText = "";
        renderUsers(users);
    }
    catch(error){
        Status.innerText = "Error fetching data";
    }
})
//render users on the UI
function renderUsers(users){
    userList.innerText = "";
    if(users.length === 0){
        Status.innerText = "No user found";
        return;
    }
users.forEach(user => {
    let li = document.createElement("li");
    li.innerText = user.name;
    userList.appendChild(li);
})
}
//search functionality
searchInput.addEventListener("input",()=> {
    let value = searchInput.value.toLowerCase();
    let filteredUsers = users.filter(user => user.name.toLowerCase().includes(value));
    renderUsers(filteredUsers);
});