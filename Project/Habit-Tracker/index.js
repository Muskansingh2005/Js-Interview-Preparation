let habits = JSON.parse(localStorage.getItem("habits")) || [];

function saveToLocalStorage(){
    localStorage.setItem("habits", JSON.stringify(habits));

}

function renderHabits(){

}