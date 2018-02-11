// CREATE BUTTONS
function createButtons(quantity, place) {
	place = document.getElementsByClassName(place);
	for (let i = 0; i < quantity; i++) {
		const button = document.createElement('button');
		button.className = 'button';
		button.innerHTML = 'button-' + i;
		place[0].appendChild(button);
	}
}

// DISPLAY BUTTONS INNER TEXT
const allButtons = document.getElementsByClassName('button');
function btnInner() {
	for (let i = 0; i < allButtons.length; i++) {
		let a = allButtons[i];
		console.log(a.innerText);
	}
}

createButtons(10,'container');
btnInner();
