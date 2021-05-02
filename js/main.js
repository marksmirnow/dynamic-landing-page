// Get elements

const currentTime = document.getElementById('time');
const greeting = document.getElementById('greeting');
const userName = document.getElementById('name');
const userFocus = document.getElementById('focus');

// Show time on page

function showTime() {
	let today = new Date();
	let hour = today.getHours();
	let min = today.getMinutes();
	let sec = today.getSeconds();

	currentTime.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;

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

// Get from LocalStorage

function getFromLocalStorage(value) {
	const localStorageItem = value.getAttribute('id');
	value.textContent = (localStorage.getItem(localStorageItem) === null) ? `[enter ${localStorageItem}]` : localStorage.getItem(localStorageItem);
}

// Set name to LocalStorage

function setName({ type, code, target }) {
	if (type === 'blur' || code === 'Enter') {
		localStorage.setItem('name', target.textContent);
		userName.blur();
	}
}

// Set focus to LocalStorage

function setFocus({ type, code, target }) {
	if (type === 'blur' || code === 'Enter') {
		localStorage.setItem('focus', target.textContent);
		userFocus.blur();
	}
}

// Add listeners to name and focus

userName.addEventListener('keydown', setName);
userName.addEventListener('blur', setName);
userFocus.addEventListener('keydown', setFocus);
userFocus.addEventListener('blur', setFocus);

// Run

showTime();
setBgGreet();
getFromLocalStorage(userName);
getFromLocalStorage(userFocus);