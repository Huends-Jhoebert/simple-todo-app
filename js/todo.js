// get the li parent
var listItems = document.querySelector('.list-items');
//number of added lis

// clas task
class Task {

	// constructor
	constructor(_task) {
		this.task = _task;
	}

	// adding method
	add() {
		// crete li
		let newLi = document.createElement('li');
		let textNode = document.createTextNode(this.task);
		newLi.appendChild(textNode);
		newLi.className = 'li';

		// create a link
		let newA = document.createElement('button');
		newA.className = 'remove-btn';
		newA.setAttribute('onclick', 'removedItem();');
		newLi.appendChild(newA);

		//create a delete icon
		let newIcon = document.createElement('i');
		newIcon.className = 'fas fa-trash';
		newA.appendChild(newIcon);

		// append the li child to the ul parent
		listItems.appendChild(newLi);
	}

	static removeFromUl(liNumber) {
		confirm(`Remove ${listItems.children[liNumber].textContent}`);
		listItems.removeChild(listItems.children[liNumber]);
	}
}


// submit scipt
var userInput = document.querySelector('#user-input');
var submitBtn = document.querySelector('#submit-btn');
submitBtn.addEventListener('click', addUserToClassObject);
function addUserToClassObject() {
	event.preventDefault();
	let user1 = new Task(userInput.value);
	user1.add();


}

// removed script
function removedItem() {
	for (var i = 0, len = listItems.children.length; i < len; i++) {

		(function (index) {
			listItems.children[i].onclick = function () {
				Task.removeFromUl(index);
			}
		})(i);

	}
}



