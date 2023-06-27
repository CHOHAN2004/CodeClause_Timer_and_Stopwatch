let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});

stopBtn.addEventListener('click', function () {
	timer = false;
});

resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	count = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
	if (timer) {
		count++;

		if (count == 100) {
			second++;
			count = 0;
		}

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			hour++;
			minute = 0;
			second = 0;
		}

		let hrString = hour;
		let minString = minute;
		let secString = second;
		let countString = count;

		if (hour < 10) {
			hrString = "0" + hrString;
		}

		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}

		if (count < 10) {
			countString = "0" + countString;
		}

		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		document.getElementById('count').innerHTML = countString;
		setTimeout(stopWatch, 10);
	}
}

let startBtnt = document.getElementById('startt');
let stopBtnt = document.getElementById('stopt');
let resetBtnt = document.getElementById('resett');

let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');

let remainingTime;
let timerId;

startBtnt.addEventListener('click', function () {
    startTimer();
});

stopBtnt.addEventListener('click', function () {
    stopTimer();
});

resetBtnt.addEventListener('click', function () {
    resetTimer();
});

function startTimer() {
    if (!timerId) {
        let hours = parseInt(hoursInput.value) || 0;
        let minutes = parseInt(minutesInput.value) || 0;
        let seconds = parseInt(secondsInput.value) || 0;

        remainingTime = hours * 3600 + minutes * 60 + seconds;

        if (remainingTime > 0) {
            timerId = setInterval(updateTimer, 1000);
        } else {
            alert("Please enter a valid duration.");
        }
    }
}

function stopTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';
}

function updateTimer() {
    remainingTime--;

    if (remainingTime <= 0) {
        stopTimer();
        alert("Time is over!");
    }

    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;

    hoursInput.value = hours.toString().padStart(2, '0');
    minutesInput.value = minutes.toString().padStart(2, '0');
    secondsInput.value = seconds.toString().padStart(2, '0');
}