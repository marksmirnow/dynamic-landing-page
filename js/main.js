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

	if (hour < 12) {
		// Morning
		greeting.textContent = 'Good Morning';
		document.body.style.backgroundImage = 'url(img/morning.jpg)';
	} else if (hour < 18) {
		// Afternoon
		greeting.textContent = 'Good Afternoon';
		document.body.style.backgroundImage = 'url(img/afternoon.jpg)';
	} else {
		// Evening
		greeting.textContent = 'Good Evening';
		document.body.style.backgroundImage = 'url(img/evening.jpg)';
		document.body.style.color = '#fff';
	}

}

// Get name from LocalStorage

function getName() {
	if (localStorage.getItem('name') === null) {
		name.textContent = '[enter name]';
	} else {
		name.textContent = localStorage.getItem('name');
	}
}

// Run

showTime();
setBgGreet();
getName();