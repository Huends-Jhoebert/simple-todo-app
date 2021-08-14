const taskInput = document.querySelector(".input-container");
const addTaskBtn = document.querySelector(".new-task-btn");
const sidenav = document.querySelector(".sidenav-container");
const todoHead = document.querySelector(".todo-head");
const hambugerMenu = document.querySelector(".todo-head i");
const todoAppLogo = document.querySelector(".todo-head h3");
const userInput = document.querySelector("#user-input");
var listItems = document.querySelector(".list-items"); //list items
var counter = 0; //counter

// ! when new task btn is click
addTaskBtn.addEventListener("click", () => {
   taskInput.style.display = "flex";
   // hambugerMenu.style.color = "#af7eeb";
   todoAppLogo.style.display = "none";
   addTaskBtn.style.display = "none";
   sidenav.style.display = "none";
   todoHead.style.padding = "0";
});

// ! when add task btn is click
export function addTask() {
   if (userInput.value == "") {
      todoAppLogo.style.display = "block";
      taskInput.style.display = "none";
      addTaskBtn.style.display = "block";
      todoHead.style.padding = "0.6rem";
      sidenav.style.display = "block";
   } else {
      counter += 1; // add counter by 1
      //create a li item
      let newLi = document.createElement("li");
      newLi.className = `li li-${counter}`;

      //create a div
      let newDiv = document.createElement("div");

      //add check button
      let newCheckBtn = document.createElement("input");
      // Assigning the attributes
      // to created checkbox
      newCheckBtn.type = "checkbox";
      newCheckBtn.id = `checkbox-${counter}`;
      newCheckBtn.setAttribute("onclick", "showHide(this.id)");

      newDiv.appendChild(newCheckBtn);

      let textNode = document.createTextNode(userInput.value); //get userinput value
      newDiv.appendChild(textNode); //add text came from userinput

      newLi.appendChild(newDiv);

      let newA = document.createElement("button");
      newA.className = "remove-btn";
      newA.id = `remove-btn-${counter}`;
      newA.setAttribute("onclick", "removedItem(this.id);");
      newLi.appendChild(newA);

      //create a delete icon
      let newIcon = document.createElement("i");
      newIcon.className = "fas fa-trash";
      newA.appendChild(newIcon);

      listItems.appendChild(newLi);

      todoAppLogo.style.display = "block";
      taskInput.style.display = "none";
      addTaskBtn.style.display = "block";
      todoHead.style.padding = "0.6rem";
      sidenav.style.display = "block";
   }
}

// ! execute when removed btn is clicked
export function removedItem(idName) {
   listItems.removeChild(document.querySelector(`#${idName}`).parentNode);
}
