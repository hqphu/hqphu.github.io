const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// the following code allows me to play and pause a video on click of a button

const playPauseButton = document.querySelector("#play-pause-btn");
console.log(playPauseButton);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

playPauseButton.addEventListener("click", toggleVideoPlayback);
function toggleVideoPlayback() {
  if (myVideo.paused || myVideo.ended) {
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
    myVideo.play();
  } else {
    playPauseImg.src = "https://icons8.com/icon/pSwquXkxwLD8/pause";
    myVideo.pause();
  }
}

const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleSound);

function toggleSound() {
  if (myVideo.muted) {
    myVideo.muted = false;
  } else {
    myVideo.muted = true;
  }
}

myVideo.addEventListener("timeupdate", updateProgressBar);
const progressBarFill = document.querySelector("#progress-bar-fill");
console.log(progressBarFill);

function updateProgressBar() {
  const progress = (myVideo.currentTime / myVideo.duration) * 100;
  progressBarFill.style.width = progress + "%";
  console.log(progress);
}
