// Get elements

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Show time on page

function showTime() {
	let today = new Date();
	let hour = today.getHours();
	let min = today.getMinutes();
	let sec = today.getSeconds();

	time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;

	setTimeout(showTime, 1000);                                   // рекурсия?
}

// Add zero to mins and seconds

function addZero(n) {
	return ((n < 10) ? '0' : '') + n;
}

// Change the background depending on the time

function setBgGreet() {
	let today = new Date();
	let hour = today.getHours();

	console.log(hour);

	if (hour >= 4 && hour < 12) {
		// Morning
		greeting.textContent = 'Good Morning';
		document.body.style.backgroundImage = 'url(img/morning.jpg)';
	} else if (hour >= 12 && hour < 18) {
		// Afternoon
		greeting.textContent = 'Good Afternoon';
		document.body.style.backgroundImage = 'url(img/afternoon.jpg)';
	} else if (hour >= 18 && hour < 23) {
		// Evening
		greeting.textContent = 'Good Evening';
		document.body.style.backgroundImage = 'url(img/evening.jpg)';
		document.body.style.color = '#fff';
	} else {
		// Night
		greeting.textContent = 'Goodnight';
		document.body.style.backgroundImage = 'url(../img/night.jpg)';
		document.body.style.color = '#fff';
	}

}

// Get name from LocalStorage

function getName() {
	name.textContent = (localStorage.getItem('name') === null) ? '[enter name]' : localStorage.getItem('name');
}

// Set name to LocalStorage

function setName(event) {
	if (event.type === 'keydown') {
		if (event.code === 'Enter') {
			localStorage.setItem('name', event.target.textContent);
			name.blur();
		}
	} else {
		localStorage.setItem('name', event.target.textContent);
	}
}

// Get focus from LocalStorage

function getFocus() {
	focus.textContent = (localStorage.getItem('focus') === null) ? '[enter focus]' : localStorage.getItem('focus');
}

// Set focus to LocalStorage

function setFocus(event) {
	if (event.type === 'keydown') {
		if (event.code === 'Enter') {
			localStorage.setItem('focus', event.target.textContent);
			focus.blur();
		}
	} else {
		localStorage.setItem('focus', event.target.textContent);
	}
}

// Add listeners to name and focus

name.addEventListener('keydown', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keydown', setFocus);
focus.addEventListener('blur', setFocus);

// Run

showTime();
setBgGreet();
getName();
getFocus();