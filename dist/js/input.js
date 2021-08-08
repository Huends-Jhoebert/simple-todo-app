const taskInput = document.querySelector(".input-container");
const addTaskBtn = document.querySelector(".new-task-btn");
const hambugerMenu = document.querySelector(".todo-head span");
const todoAppLogo = document.querySelector(".todo-head h3");

addTaskBtn.addEventListener("click", () => {
   taskInput.style.display = "flex";
   hambugerMenu.style.display = "none";
   todoAppLogo.style.display = "none";
   addTaskBtn.style.display = "none";
});

function addTask() {
   hambugerMenu.style.display = "block";
   todoAppLogo.style.display = "block";
   taskInput.style.display = "none";
   addTaskBtn.style.display = "block";
}
