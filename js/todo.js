// get the li parent
var listItems = document.querySelector('.list-items');
//the task number
var taskNumber = document.querySelector('.task-number');

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

		// display the number of tasks
		if (listItems.children.length + 1 > 1) {
			let taskNumbers = listItems.children.length + 1; // get the length of ul lis
			let numberToStr = taskNumbers.toString(); // convert the length to string
			let strColor = numberToStr.fontcolor('#F14F87'); // change the color of the string
			taskNumber.innerHTML = `You have ${strColor} tasks left`; //insert to innerhtml of the task number class
		}
		else {
			let taskNumbers = listItems.children.length + 1; // get the length of ul lis
			let numberToStr = taskNumbers.toString(); // convert the length to string
			let strColor = numberToStr.fontcolor('#F14F87'); // change the color of the string
			taskNumber.innerHTML = `You have ${strColor} task `; //insert to innerhtml of the task number class
		}

		// append the li child to the ul parent
		listItems.appendChild(newLi);
	}

	// static method to removed item
	static removeFromUl(liNumber) {
		var con = confirm(`Remove ${listItems.children[liNumber].textContent}`);
		// display the number of tasks
		// if confirm is equals to true excecute this code
		if (con == true) {
			if (listItems.children.length > 2) {
				listItems.removeChild(listItems.children[liNumber]);
				let taskNumbers = (listItems.children.length + 1) - 1; // get the length of ul lis
				let numberToStr = taskNumbers.toString(); // convert the length to string
				let strColor = numberToStr.fontcolor('#F14F87'); // change the color of the string
				taskNumber.innerHTML = `You have ${strColor} tasks left`;
			}
			else {
				listItems.removeChild(listItems.children[liNumber]);
				let taskNumbers = (listItems.children.length + 1) - 1; // get the length of ul lis
				let numberToStr = taskNumbers.toString(); // convert the length to string
				let strColor = numberToStr.fontcolor('#F14F87'); // change the color of the string
				taskNumber.innerHTML = `You have ${strColor} task`;
			}
		}
		// if confirm is equal to false execute this code
		else {
			false;
		}
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



