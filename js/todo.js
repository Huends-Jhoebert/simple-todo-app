
var listItems = document.querySelector('.list-items');

class Task {

	constructor(_task) {
		this.task = _task;
	}

	add() {
		let newLi = document.createElement('li');
		let textNode = document.createTextNode(this.task);
		newLi.appendChild(textNode);
		newLi.className = 'li';
		listItems.appendChild(newLi);
	}
}

// submit scipt
var userInput = document.querySelector('#user-input');
var submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', addUserToClassObject);
var userNumber = 0;
function addUserToClassObject() {
	event.preventDefault();
	let user1 = new Task(userInput.value);
	user1.add();

}