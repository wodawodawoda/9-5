// CREATE BUTTONS
function createButtons(quantity, place) {
	var place = document.getElementsByClassName(place);
	for (i = 0; i < quantity; i++) {
		var button = document.createElement('button');
		button.className = 'button';
		button.innerHTML = 'button-' + i;
		place[0].appendChild(button)
	}
}

// DISPLAY BUTTONS INNER TEXT
var allButtons = document.getElementsByClassName('button');
function btnInner() {
	for (i = 0; i < allButtons.length; i++) {
		var a = allButtons[i];
		console.log(a.innerText);
	}
}