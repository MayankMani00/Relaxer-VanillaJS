const circle = $('.circle');
const container = $('.container');
const text = $('#text');

const totalTime = 7500;
const breateTime = totalTime / 5 * 2;
const holdTime = totalTime / 5;

function breathAnimation() {
	container[0].classList.remove('shrink');
	text[0].innerText = 'Breathe In';
	container[0].classList.add('grow');
	setTimeout(() => {
		text[0].innerText = 'Hold';
		setTimeout(() => {
			container[0].classList.remove('grow');
			container[0].classList.add('shrink');
			text[0].innerText = 'Breathe Out';
		}, holdTime);
	}, breateTime);
}

breathAnimation();
setInterval(() => {
	breathAnimation();
}, totalTime);
