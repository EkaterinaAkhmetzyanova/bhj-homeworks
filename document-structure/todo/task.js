"use strict";
const taskAdd = document.getElementById("tasks__add");
const taskList = document.getElementById("tasks__list");
const taskInput = document.getElementById("task__input");

taskList.addEventListener("click", function(e) {
    e.preventDefault();
    if (e.target.className.includes("task__remove")) {
        e.target.parentElement.remove();
    }
})

function addTask(event) {
    event.preventDefault();
    if (taskInput.value != "") {
        taskList.innerHTML += `
            <div class = "task">
               <div class = "task__title">
               ${taskInput.value} 
               </div> 
               <a href = "#" class = "task__remove">&times;</a> 
               </div>
        `;
    }
    taskInput.value = "";
}

taskAdd.addEventListener("click", addTask);