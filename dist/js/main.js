import { showHide } from "./listAnimation.js";
import { openNav, closeNav } from "./sidenav.js";
import { addTask, removedItem } from "./input.js";

window.showHide = showHide; // activate the showhide function using onclick event
window.openNav = openNav; // activate the opennav function using onclick event
window.closeNav = closeNav; // activate the closenav function using onclick event
window.addTask = addTask; // activate the addtask function using onclick event
window.removedItem = removedItem; //activate when delete icon is click
