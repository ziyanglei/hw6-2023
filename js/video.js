var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is set to " + video.autoplay)
	console.log ("loop is set to " + video.loop)

});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	// document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
});


// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down");
	video.playbackRate *= 0.9
	console.log("Playback rate is " + video.playbackRate)
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up");
	video.playbackRate /= 0.9
	console.log("Playback rate is " + video.playbackRate)
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	video.currentTime += 10
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("Current location is " + video.currentTime)
});

// Mute
document.querySelector("#mute").addEventListener("click", function(){
	video.muted = !video.muted;
	document.querySelector('#mute').innerHTML = video.muted ? 'Unmute' : 'Mute';
	console.log('Is it Muted: ', video.muted)
})

// Volume Slider
document.querySelector("#slider").addEventListener("change", function(){
	console.log("In slider")
    console.log(this)
    console.log('current volume is', this.value + "%")
	video.volume = document.querySelector("#slider").value / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%";
});

// Styled
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add('oldSchool')
})

// Original
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove('oldSchool')
})

