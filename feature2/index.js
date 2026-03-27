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

const renderTasks = () =>{
    TaskList.innerHTML = '';
    tasks.forEach((task, index) => {
        let li = document.createElement('li');
li.innerText = task;
let deleteButton = document.createElement('button');
deleteButton.innerText = 'Delete';
deleteButton.addEventListener('click', () => deleteTask(index));
li.appendChild(deleteButton);
TaskList.appendChild(li);
    });
}
const deleteTask = (index) => {
tasks.splice(index, 1);
renderTasks();
}

