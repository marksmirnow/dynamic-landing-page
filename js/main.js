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

	time.innerHTML = `${hour}:${min}:${sec}`;

	setTimeout(showTime, 1000);
}

showTime();