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

	helpTooltipContent.classList.toggle('visible')
})

// Resources code:

// Storing all different courses according to semesters.
let sem_one = ['Mathematics-I', 'Programming principles & Algorithm', 'Computer Fundamental and Office Automation', 'Principle of Management', 'Business Communication', 'Enviornmental Studies'];
let sem_two = ['Mathematics-II', 'C-Programming', 'Organization Behavior', 'Digital Electronics and Computer Organisation', 'Financial Accounting and Management'];
let sem_three = ['Object Oriented Programming Using C++', 'Data Structure Using C & C++', 'Computer Architecture & Assembly Language', 'Business Economics', 'Elements of Statistics'];
let sem_four = ['Computer Graphics & Multimedia Application', 'Operating System', 'Software Engineering', 'Optimization Techniques', 'Mathematics-III'];
let sem_five = ['Introduction to DBMS', 'Java Programming and Dynamic Webpage Design', 'Computer Network', 'Numerical Methods'];
let sem_six = ['Computer Network Security', 'Information System: Analysis Design & Implementation', 'E-Commerce', 'Knowledge Management'];

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
	<a href=# class="sub10${i+1}">PYQs</a>
	<a href=#>NOTES</a>`
	sem1.appendChild(subject);
}

for (let i = 0; i < sem_two.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_two[i]}</h1>
			<a href=# class="sub20${i+1}">PYQs</a>
	<a href=#>NOTES</a>`
	sem2.appendChild(subject);
}

for (let i = 0; i < sem_three.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_three[i]}</h1>
			<a href=# class="sub30${i+1}">PYQs</a>
	<a href=#>NOTES</a>`
	sem3.appendChild(subject);
}

for (let i = 0; i < sem_four.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_four[i]}</h1>
			<a href=# class="sub40${i+1}">PYQs</a>
	<a href=#>NOTES</a>`
	sem4.appendChild(subject);
}

for (let i = 0; i < sem_five.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject";
	subject.innerHTML = `<h1>${sem_five[i]}</h1>
			<a href=# class="sub50${i+1}">PYQs</a>
	<a href=#>NOTES</a>`
	sem5.appendChild(subject);
}

for (let i = 0; i < sem_six.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_six[i]}</h1>
			<a href=# class="sub60${i+1}">PYQs</a>
	<a href=#>NOTES</a>`
	sem6.appendChild(subject);
}

// // Music player:playing and handling music
// let musicPlayer = document.querySelector(".music-player");

// // Track info
// let currentTrack = document.createElement('audio');
// let trackArtist = document.querySelector(".artistName");
// let trackTitle = document.querySelector(".trackName");
// let trackArt = document.querySelector(".music-img")

// // controls
// let playToggle = document.querySelector(".playtoggle");
// let nextTrack = document.querySelector(".nexttrack");
// let prevTrack = document.querySelector(".prevtrack");

// let trackIndex = 0;
// let nowPlaying = false;
// let timerUpdate;

// // Tracklist: Info regarding all tracks
// let trackList = [
// 	{
// 		name: "Chauffeur",
// 		artist: "Diljit Dosanjh",
// 		image: https://th.bing.com/th/id/OIP.wDSiynYZJ8WTiWtjlBVsmgHaDt?w=282&h=174&c=7&r=0&o=5&pid=1.7,
// 		path: "sounds\Chauffeur_Official_Music_Video_D_(getmp3.pro).mp3"
// 	},

// ]

// let trackLoad(trackIndex){

// 	clearInterval(timerUpdate);
// 	resetValues();


// 	let currentTrack.src = trackList[trackIndex].path;
// 	currentTrack.load();

// 	// Track details being updated
// 	trackArt.style.background = "url(" + trackList[trackIndex].image + ")";
// 	trackTitle.style.textContent = trackList[trackIndex].name;
// 	trackArtist.style.textContent = trackList[trackIndex].artist;

// 	random_bgcolor();
// }

// random_bgcolor(){
// 	let red = Math.floor(Math.random * 256) + 64;
// 	let blue = Math.floor(Math.random * 256) + 64;
// 	let green = Math.floor(Math.random * 256) + 64;

// 	musicPlayer.style.background = "rgb(" + red + ", " + blue + ", " + green + ", " + ")";
// }



