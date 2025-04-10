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
let sem_one = [{ name: 'Mathematics-I', notes: "px.html", yt: "https://youtube.com/playlist?list=PLrGv400rgYyS3cuDrikXAivhyHfWLXo5g&si=GCahNBjED7479ba7" }, { name: 'Programming principles & Algorithm', notes: "https://drive.google.com/file/d/1LhuCu4HASB6AYScYoDsXVjGcoLLpNvH5/view", yt: "https://youtube.com/playlist?list=PLZYougG8P3PMjlnw6vC-LUj8mAcL3TcMZ&si=facoXOG22z1swYiP" }, { name: 'Computer Fundamental and Office Automation', notes: "https://drive.google.com/file/d/1fZw86zfoz_KGzcRTGktMyIJEVTOqYyZ7/view", yt: "https://youtube.com/playlist?list=PL-aCB6EV0VsfOgLJzTRQSYwUi8Yfc70Dk&si=t3YI8z2mf2RIzFVD" }, { name: 'Principle of Management', notes: "https://drive.google.com/file/d/1qPLK3Vnc_i67Lz-LpSycQ7q2Jg4I0m_l/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLzs7q4LSx_lTd42jaMK45vE2fWwhxcJzp&si=XLVN9mfRtE7Ioa9f" }, { name: 'Business Communication', notes: "https://drive.google.com/file/d/1paDgIwzdIZs7lR7ogbe8edlItO9dWlPz/view?usp=sharing", yt: "https://youtube.com/playlist?list=PL9dEomJZklDpx4odNXIi6ZoCcogIOmz7b&si=SKE1C4DVSn-ZuyBN" }, { name: 'Enviornmental Studies', notes: "px.html", yt: "https://youtube.com/playlist?list=PL3qvHcrYGy1u2egw2tipHWODV6elVC2Gg&si=A_h0CTdEM3wghYF1" }];
let sem_two = [{ name: 'Mathematics-II', notes: "", yt: "https://youtube.com/playlist?list=PLrGv400rgYyQBXtgQTmkhPEUQ6FGtcRV5&si=fAm4y7C55L1VpWaC" }, { name: 'C-Programming', notes: "https://drive.google.com/file/d/1QglqcC0I3kmX1G7tfffQ5bUfLOkHQMat/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLmTIaX2rHGQZYQRHKXk9-ql7rTkUYNUim&si=I1qW80FYhqc30tHX" }, { name: 'Organization Behavior', notes: "https://drive.google.com/file/d/1Gw1tnEUQZZ6g_yv0A6p67ksGDXfRGr5o/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLzs7q4LSx_lQ4mG2fbIzYhNZIO33A6uMD&si=AHSgecWNYb_ApCt_" }, { name: 'Digital Electronics and Computer Organisation', notes: "https://drive.google.com/file/d/1upx7Psg-c38c1N97U6_Afri86j9CGOzy/view?usp=sharing", yt: "https://youtube.com/playlist?list=PL41Z-nyV-Dsj3RJIhBLaMu77CzxKN5E_w&si=rdBoo80g4sZKZcmM" }, { name: 'Financial Accounting and Management', notes: "https://drive.google.com/file/d/1p4R_fwXFoHaCAkZml25Fp31P4HsWu9zF/view?usp=sharing", yt: "https://youtube.com/playlist?list=PL9dEomJZklDpwE03pZaTU8GjOMleigvev&si=hD9kCUI_cRK-meIW" }];
let sem_three = [{ name: 'Object Oriented Programming Using C++', notes: "https://drive.google.com/file/d/1GEStFpEFCcfxgXEJ86suMJDfe9mLpjK0/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLfbnKa--_sDXbHT_zvmtX7Snq2M-TSACn&si=m2jazjMDl6N3dEk2" }, { name: 'Data Structure Using C & C++', notes: "https://drive.google.com/file/d/1IxlyoMhrJt4KvYY156muNERFMPtBy0qs/view?usp=sharing", yt: "https://youtube.com/playlist?list=PL92RPe36fLKiIDI15iPOE5bGLvO27pb3p&si=UchqvR7uoSLG074R" }, { name: 'Computer Architecture & Assembly Language', notes: "https://drive.google.com/file/d/1i1ltrji6jXB-UBHAzxYf26sE6qnX2frI/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLKXo4ZmPiJF7G17vnBXdFQNOdksTSao0t&si=9_ZRLQWycKpQPZZc" }, { name: 'Business Economics', notes: "https://drive.google.com/file/d/1uHll-UTlLuqmwQYPK3dVuhljzX36vnbt/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLCG1y9jIQdXfikJWcV8YaPXA1WRd93PhF&si=bm1gl53mt2hcd02u" }, { name: 'Elements of Statistics', notes: "https://drive.google.com/file/d/1GKeU_H_jzHUaArOtxoxZk5vy9PuQRHLI/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLrGv400rgYyTJPCpeWLPGx2ulcTP9TO4K&si=cRUCLZiBv9ooXYYz" }];
let sem_four = [{ name: 'Computer Graphics & Multimedia Application', notes: "https://drive.google.com/file/d/1pMDF2J2yLn-T1DFcvs6WEn4V446g9-23/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLJIH7wkUEF5YeX_kggNX7bMLNhLlSivAm&si=OIZDsHKb2VDZkgUG" }, { name: 'Operating System', notes: "https://drive.google.com/file/d/14DnBc4MhOrGxRiSs7H1Gi2oDqM7StxLj/view?usp=sharing", yt: "https://youtube.com/playlist?list=PL23dd-8zssJDbCZI4Rle3vuQokIAdiDdB&si=QUmCF9HUAeCj8fMw" }, { name: 'Software Engineering', notes: "https://drive.google.com/file/d/1evrFCvGFrZbU4MsAYpa7WAZOlR5EaxMJ/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLqleLpAMfxGB1g0xlYj2H6lyY2Q2ku7p9&si=k9Ce9elHcTwT7lip" }, { name: 'Optimization Techniques', notes: "https://drive.google.com/file/d/13CVgew_4vIrENhrq8gVTyy9LPFHfoBgv/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLrGv400rgYyTR-QU-NUcZ7mjP0ZfWJvxa&si=3PibIEcdKaz3aKYI" }, { name: 'Mathematics-III', notes: "", yt: "https://youtube.com/playlist?list=PLrGv400rgYyTrX4-kKg6QJvS6OR6dLq1I&si=0svpdwmpfUMBHLNy" }];
let sem_five = [{ name: 'Introduction to DBMS', notes: "https://drive.google.com/file/d/114-RjqSRe8VJyCkyJjmS19drpOHFKu1p/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLdo5W4Nhv31b33kF46f9aFjoJPOkdlsRc&si=kmmWP-Uoj6UMousK" }, { name: 'Java Programming and Dynamic Webpage Design', notes: "https://drive.google.com/file/d/1opNnSZHffsVwexI4fiotanHEQiUkgoHp/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLfbnKa--_sDUUjn-FyWgwd1by2rORqHvx&si=eds1LckjHyoOzzIH" }, { name: 'Computer Network', notes: "https://www.allbca.com/2020/04/bca-bachelor-of-computer-applications-course-details.html", yt: "https://youtube.com/playlist?list=PLqleLpAMfxGCUpDRFUnLKeDrgBsPOwTQK&si=LKPFXeD5qXUmZn1Z" }, { name: 'Numerical Methods', notes: "https://drive.google.com/file/d/1LvfZyfumpfQXW8pCayhgE_MU-Hw649H1/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLrGv400rgYyTz8DxPpBDd2S8MwFejvkai&si=xD0h5Q-lGCDAKGy9" }];
let sem_six = [{ name: 'Computer Network Security', notes: "https://drive.google.com/file/d/16EPzb92sen-F3UFzdvGH-topd5g-E15J/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLzs7q4LSx_lQ4qp1G00QZUjEcVopQ62JD&si=zUhOaVBi9R7l5UE4" }, { name: 'Information System: Analysis Design & Implementation', notes: "https://drive.google.com/file/d/1OfsqB7ggtzKPaXf-yq4gtaEE-5aHiIka/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLeUy5pFI21O9uk0ziO0PRg6rk_lpxlvNM&si=5xE0YpxRMoDZa4VO" }, { name: 'E-Commerce', notes: "https://drive.google.com/file/d/1ZCHtFvfGtwFcie4HHAr4X1re0CzB0VV4/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLzs7q4LSx_lQIoaL1e0GrXtex_HCtDjbi&si=NJ9jI_v6cV0vHp-L" }, { name: 'Knowledge Management', notes: "https://drive.google.com/file/d/1Edp6sv2_7Avb1Qv2gu3_JFhcsLMUK7qJ/view?usp=sharing", yt: "https://youtube.com/playlist?list=PLyX-fA8t777hozR88uu6FYkAuZSCE-t05&si=c20CwGYsqYG_lcA_" }];

let resources = "https://drive.google.com/drive/folders/1JEk8ht4ugmHK7AuDqHtOwycEJBSu05Wd?usp=drive_link";
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
	subject.innerHTML = `<h1>${sem_one[i].name}</h1> 
	<a href="https://drive.google.com/drive/folders/1V974t2viKTpvBR6spmAEpbBpcOu-4HgT?usp=drive_link" target= "_blank">PYQs</a>
	<a href=${sem_one[i].notes}>NOTES</a>
	<a href=${sem_one[i].yt} target="_blank"><i class="ri-youtube-fill" style="color:red; font-size:2rem"></i></a>`
	sem1.appendChild(subject);
}

for (let i = 0; i < sem_two.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_two[i].name}</h1>
			<a href="https://drive.google.com/drive/folders/1Wq6AKExF4pp4ez5QmyaqcDyIvKHFf7ll?usp=drive_link" target= "_blank">PYQs</a>
	<a href=${sem_two[i].notes}>NOTES</a>
	<a href=${sem_two[i].yt} target="_blank"><i class="ri-youtube-fill" style="color:red; font-size:2rem"></i></a>`
	sem2.appendChild(subject);
}

for (let i = 0; i < sem_three.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_three[i].name}</h1>
			<a href="https://drive.google.com/drive/folders/1onNPkOxH7qoEa6U1z8Uv5qaK9KLkgDUJ?usp=drive_link" target= "_blank">PYQs</a>
	<a href=${sem_three[i].notes}>NOTES</a>
	<a href=${sem_three[i].yt} target="_blank"><i class="ri-youtube-fill" style="color:red; font-size:2rem"></i></a>`
	sem3.appendChild(subject);
}

for (let i = 0; i < sem_four.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_four[i].name}</h1>
			<a href="https://drive.google.com/drive/folders/1BPhk-FxaaTwRLjPZX-XsPYdx9e7QXLcG?usp=drive_link" target= "_blank">PYQs</a>
	<a href=${sem_four[i].notes}>NOTES</a>
	<a href=${sem_four[i].yt} target="_blank"><i class="ri-youtube-fill" style="color:red; font-size:2rem"></i></a>`
	sem4.appendChild(subject);
}

for (let i = 0; i < sem_five.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject";
	subject.innerHTML = `<h1>${sem_five[i].name}</h1>
			<a href="https://drive.google.com/drive/folders/1LOihxAZVm-IMC9V4nSDMsnWnzA2F27aG?usp=drive_link" target= "_blank">PYQs</a>
	<a href=${sem_five[i].notes}>NOTES</a>
	<a href=${sem_five[i].yt} target="_blank"><i class="ri-youtube-fill" style="color:red; font-size:2rem"></i></a>`
	sem5.appendChild(subject);
}

for (let i = 0; i < sem_six.length; i++) {
	let subject = document.createElement("subject");
	subject.className = "subject"
	subject.innerHTML = `<h1>${sem_six[i].name}</h1>
			<a href="https://drive.google.com/drive/folders/1kQ270YCvlKEZvQszzgba4cje_2Z1swDK?usp=drive_link" target= "_blank">PYQs</a>
	<a href=${sem_six[i].notes}>NOTES</a>
	<a href=${sem_six[i].yt} target="_blank"><i class="ri-youtube-fill" style="color:red; font-size:2rem"></i></a>`
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

let trackindex = 0;
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
		image: "img/out-of-time.jpg",
		path: "sounds/out of time.mp3"
	},
	{
		name: "Human Nature",
		artist: "Michael Jackson",
		image: "img/human-nature.png",
		path: "sounds/human-nature.mp3"
	}

]

function trackLoad(trackindex) {

	clearInterval(timerUpdate);
	resetValues();

	currentTrack.src = trackList[trackindex].path;
	currentTrack.load();

	// Track details being updated
	trackArt.style.background = "url(" + trackList[trackindex].image + ")";
	trackArt.style.backgroundSize = "cover";
	trackTitle.textContent = trackList[trackindex].name;
	trackArtist.textContent = trackList[trackindex].artist;

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

function endOrNot() {
	if (currentTrack.currentTime === currentTrack.duration) {
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
	if (trackindex < trackList.length - 1) {
		trackindex += 1;
	}
	else { trackindex = 0; }
	trackLoad(trackindex);
	playTrack();
}

function previousTrack() {
	if (trackindex > 0) {
		trackindex -= 1;
	}
	else { trackindex = trackList.length - 1; }

	trackLoad(trackindex);
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

trackLoad(trackindex);

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
//SUPABASE INTEGRATION
