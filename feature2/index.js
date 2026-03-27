let inputValue = document.getElementById('inputValue');
let AddTask = document.getElementById('AddTask');
let TaskList = document.getElementById('TaskList');
let tasks = [];

AddTask.addEventListener('click', function(){
    let task = inputValue.value;
    tasks.push(task);
    inputValue.value = '';
    renderTasks();
})

renderTasks = () =>{
    TaskList.innerHTML = '';
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.innerHTML = task + ' <button onclick="deleteTask('+index+')">Delete</button>';
        TaskList.appendChild(li);
    });
}

deleteTask = (index) => {
tasks.splice(index, 1);
renderTasks();
}



