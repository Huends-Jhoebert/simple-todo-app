const taskInput = document.querySelector(".input-container");
const addTaskBtn = document.querySelector(".new-task-btn");
const sidenav = document.querySelector(".sidenav-container");
const todoHead = document.querySelector(".todo-head");
const hambugerMenu = document.querySelector(".todo-head i");
const todoAppLogo = document.querySelector(".todo-head h3");

addTaskBtn.addEventListener("click", () => {
   taskInput.style.display = "flex";
   // hambugerMenu.style.color = "#af7eeb";
   todoAppLogo.style.display = "none";
   addTaskBtn.style.display = "none";
   sidenav.style.display = "none";
   todoHead.style.padding = "0";
});

function addTask() {
   // hambugerMenu.style.color = "#fff";
   todoAppLogo.style.display = "block";
   taskInput.style.display = "none";
   addTaskBtn.style.display = "block";
   todoHead.style.padding = "0.6rem";
   sidenav.style.display = "block";
}
