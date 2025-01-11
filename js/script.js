const pomodoroTime = document.querySelector('.pomodoro__time');
const pomodoroState = document.querySelector('.pomodoro__state');
const modes = document.querySelectorAll('.mode');
const getStartedMessage = document.querySelector('.get-started');
const sound = document.querySelector('audio');
const helpTooltip = document.querySelector('.help__tooltip');
const helpTooltipContent = document.querySelector('.help__tooltip-content');
let countdown;

modes.forEach(mode => mode.addEventListener('click', switchModes));

function switchModes(e) {
	const secondsForMode = parseInt(e.target.dataset.time, 10);
	modes.forEach(mode => mode.classList.remove('active'));
	e.target.classList.add('active');
	getStartedMessage.style.display = 'none';
	timer(secondsForMode);
}

function timer(seconds) {
	clearInterval(countdown);
	const start = Date.now();
	const finish = start + seconds * 1000;
	displayTimeLeft(seconds);

	countdown = setInterval(() => {
		const secondsLeft = Math.round((finish - Date.now()) / 1000);
		if (secondsLeft <= 0) {
			clearInterval(countdown);
			document.title = 'Time Up!';
			sound.currentTime = 5;
			sound.play();
		}
		displayTimeLeft(secondsLeft);
	}, 1000);
}

function displayTimeLeft(seconds) {
	const minutes = Math.floor(seconds / 60);
	const secondsRemaining = seconds % 60;
	const displayTime = `${minutes}:${secondsRemaining < 10 ? '0' : ''}${secondsRemaining}`;
	document.title = displayTime;
	pomodoroTime.textContent = displayTime;
}

document.addEventListener('click', e => {
	if (!e.target.closest('.tooltip-container')) {
		helpTooltipContent.classList.remove('visible')
		return
	}

	helpTooltipContent.classList.toggle('visible');
})

// Resources code:

// Storing all different courses according to semesters.
let sem_one = ['Mathematics-I', 'Programming principles & Algorithm', 'Computer Fundamental and Office Automation', 'Principle of Management', 'Business Communication', 'Enviornmental Studies'];
let sem_two = ['Mathematics-II', 'C-Programming', 'Organization Behavior', 'Digital Electronics and Computer Organisation', 'Financial Accounting and Management'];
let sem_three = ['Object Oriented Programming Using C++', 'Data Structure Using C & C++', 'Computer Architecture & Assembly Language', 'Business Economics', 'Elements of Statistics'];
let sem_four = ['Computer Graphics & Multimedia Application', 'Operating System', 'Software Engineering', 'Optimization Techniques', 'Mathematics-III'];
let sem_five = ['Introduction to DBMS', 'Java Programming and Dynamic Webpage Design', 'Computer Network', 'Numerical Methods'];
let sem_six = ['Computer Network Security', 'Information System: Analysis Design & Implementation', 'E-Commerce', 'Knowledge Management'];

let resources = "https://drive.google.com/drive/folders/1JEk8ht4ugmHK7AuDqHtOwycEJBSu05Wd?usp=drive_link"
// Getting all the semesters with their id's
let sem1 = document.getElementById('semester-1');
let sem2 = document.getElementById('semester-2');
let sem3 = document.getElementById('semester-3');
let sem4 = document.getElementById('semester-4');
let sem5 = document.getElementById('semester-5');
let sem6 = document.getElementById('semester-6');

// These for loops will create subject divs according to semesters.

for (let i = 0; i < sem_one.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_one[i]}</h1> 
	<a href="https://drive.google.com/drive/folders/1V974t2viKTpvBR6spmAEpbBpcOu-4HgT?usp=drive_link" target= "_blank">PYQs</a>
	<a href=#>NOTES</a>`
	sem1.appendChild(subject);
}

for (let i = 0; i < sem_two.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_two[i]}</h1>
			<a href="https://drive.google.com/drive/folders/1Wq6AKExF4pp4ez5QmyaqcDyIvKHFf7ll?usp=drive_link" target= "_blank">PYQs</a>
	<a href=#>NOTES</a>`
	sem2.appendChild(subject);
}

for (let i = 0; i < sem_three.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_three[i]}</h1>
			<a href="https://drive.google.com/drive/folders/1onNPkOxH7qoEa6U1z8Uv5qaK9KLkgDUJ?usp=drive_link" target= "_blank">PYQs</a>
	<a href=#>NOTES</a>`
	sem3.appendChild(subject);
}

for (let i = 0; i < sem_four.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_four[i]}</h1>
			<a href="https://drive.google.com/drive/folders/1BPhk-FxaaTwRLjPZX-XsPYdx9e7QXLcG?usp=drive_link" target= "_blank">PYQs</a>
	<a href=#>NOTES</a>`
	sem4.appendChild(subject);
}

for (let i = 0; i < sem_five.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject";
	subject.innerHTML = `<h1>${sem_five[i]}</h1>
			<a href="https://drive.google.com/drive/folders/1LOihxAZVm-IMC9V4nSDMsnWnzA2F27aG?usp=drive_link" target= "_blank">PYQs</a>
	<a href=#>NOTES</a>`
	sem5.appendChild(subject);
}

for (let i = 0; i < sem_six.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_six[i]}</h1>
			<a href="https://drive.google.com/drive/folders/1kQ270YCvlKEZvQszzgba4cje_2Z1swDK?usp=drive_link" target= "_blank">PYQs</a>
	<a href=#>NOTES</a>`
	sem6.appendChild(subject);
}

// Music player:playing and handling music
let musicPlayer = document.querySelector(".music-player");

// Track info
let currentTrack = document.createElement('audio');
musicPlayer.appendChild(currentTrack);
let trackArtist = document.querySelector(".artistName");
let trackTitle = document.querySelector(".trackName");
let trackArt = document.querySelector(".music-img")

// controls
let playToggle = document.querySelector(".playtoggle");
let nextTrack = document.querySelector(".nexttrack");
let prevTrack = document.querySelector(".prevtrack");
let currTime = document.querySelector(".current-time");
let totalDuration = document.querySelector(".total-duration");
let volumeSlider = document.querySelector(".volumeKnob");
let trackSlider = document.querySelector(".track-slider");

let trackIndex = 0;
let nowPlaying = false;
let timerUpdate;

// Tracklist: Info regarding all tracks
let trackList = [
	{
		name: "New person same old mistakes",
		artist: "Tame Impala",
		image: "img/currents.jpg",
		path: "sounds/new person same old mistakes.mp3"
	},
	{
		name: "Queen of Hearts",
		artist: "Starla Edney",
		image: "img/queen-of-hearts.jpg",
		path: "sounds/Queen of hearts.mp3"
	}, 
	{
		name: "Out of Time",
		artist: "The Weeknd",
		image:"img/out-of-time.jpg",
		path: "sounds/out of time.mp3"
	},
	{
		name:"Human Nature",
		artist:"Michael Jackson",
		image:"img/human-nature.png",
		path: "sounds/human-nature.mp3"
	}

]

function trackLoad(trackIndex) {

	clearInterval(timerUpdate);
	resetValues();

	currentTrack.src = trackList[trackIndex].path;
	currentTrack.load();

	// Track details being updated
	trackArt.style.background = "url(" + trackList[trackIndex].image + ")";
	trackArt.style.backgroundSize = "cover";
	trackTitle.textContent = trackList[trackIndex].name;
	trackArtist.textContent = trackList[trackIndex].artist;

	timerUpdate = setInterval(seekUpdate, 500);

	currentTrack.addEventListener("ended", nextTrack);
	random_bgcolor();
}

function random_bgcolor() {
	let red = Math.floor(Math.random() * 256) + 64;
	let blue = Math.floor(Math.random() * 256) + 64;
	let green = Math.floor(Math.random() * 256) + 64;
	let bgcolor = "rgb(" + red + ", " + green + ", " + blue + ")";
	musicPlayer.style.backgroundColor = bgcolor;
}

function endOrNot(){
	if(currentTrack.currentTime===currentTrack.duration){
		forwardTrack();
	}
}

function resetValues() {
	currTime.textContent = "00:00";
	totalDuration.textContent = "00:00";
}
function playPauseTrack() {
	if (!nowPlaying) {
		playTrack();
	} else pauseTrack();
}

function playTrack() {
	currentTrack.play();
	nowPlaying = true;
	playToggle.className = `ri-pause-circle-fill`;
}

function pauseTrack() {
	currentTrack.pause();
	playToggle.className = `ri-play-circle-fill`;
	nowPlaying = false;
}

function forwardTrack() {
	if (trackIndex < trackList.length - 1) {
		trackIndex += 1;
	}
	else { trackIndex = 0; }
	trackLoad(trackIndex);
	playTrack();
}

function previousTrack() {
	if (trackIndex > 0) {
		trackIndex -= 1;
	}
	else { trackIndex = trackList.length - 1; }

	trackLoad(trackIndex);
	playTrack();
}

function trackSlide() {
	let goTo = currentTrack.duration * (trackSlider.value / 100);
	currentTrack.currentTime = goTo;
}

function setVolume() {
	currentTrack.volume = volumeSlider.value / 100;
}

function seekUpdate() {
	let seekPosition = 0;
	if (!isNaN(currentTrack.duration)) {
		seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);
		trackSlider.value = seekPosition;
		endOrNot();
	}

	let currentMinutes = Math.floor(currentTrack.currentTime / 60);
	let currentSeconds = Math.floor(currentTrack.currentTime - currentMinutes * 60);
	let durationMinutes = Math.floor(currentTrack.duration / 60);
	let durationSeconds = Math.floor(currentTrack.duration - durationMinutes * 60);

	if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
	if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
	if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
	if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

	currTime.textContent = currentMinutes + ":" + currentSeconds;
	totalDuration.textContent = durationMinutes + ":" + durationSeconds;
}

trackLoad(trackIndex);

//Music player toggle

let player_visibility = 0;
let player_container = document.querySelector("music-toggle-container");


function playerToggle() {
	if (player_visibility > 0) {
		musicPlayer.classList.remove('visible');
		player_visibility = 0;
	} else {
		musicPlayer.classList.add('visible');
		player_visibility = 1;
	}
}