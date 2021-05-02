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
		document.body.className = 'morning';
	} else if (hour >= 12 && hour < 18) {
		// Afternoon
		greeting.textContent = 'Good Afternoon';
		document.body.className = 'afternoon';
	} else if (hour >= 18 && hour < 23) {
		// Evening
		greeting.textContent = 'Good Evening';
		document.body.className = 'evening';
	} else {
		// Night
		greeting.textContent = 'Goodnight';
		document.body.className = 'night';
	}

}

// Get from LocalStorage

function getFromLocalStorage(value) {
	const localStorageItem = value.getAttribute('id');
	value.textContent = (localStorage.getItem(localStorageItem) === null) ? `[enter ${localStorageItem}]` : localStorage.getItem(localStorageItem);
}

// Set to LocalStorage

function setToLocalStorage({ type, code, target }) {
	const localStorageItem = this.getAttribute('id');
	if (type === 'blur' || code === 'Enter') {
		localStorage.setItem(`${localStorageItem}`, target.textContent);
		this.blur();
	}
}

// Add listeners to name and focus

userName.addEventListener('keydown', setToLocalStorage);
userName.addEventListener('blur', setToLocalStorage);
userFocus.addEventListener('keydown', setToLocalStorage);
userFocus.addEventListener('blur', setToLocalStorage);

// Run

showTime();
setBgGreet();
getFromLocalStorage(userName);
getFromLocalStorage(userFocus);