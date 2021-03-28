// Get elements

const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

function showTime() {
	let today = new Date();
	let hour = today.getHours();
	let min = today.getMinutes();
	let sec = today.getSeconds();

	time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;

	setTimeout(showTime, 1000);
}


function addZero(n) {
	return ((n < 10) ? '0' : '') + n;
}


showTime();