const airportAudio = document.querySelector("#airport");
console.log(airportAudio);

// airportAudio.play();
const playButton = document.querySelector("#playButton");
console.log(playButton);

playButton.addEventListener("click", playAirport);
function playAirport() {
  airportAudio.play();
}

const pauseButton = document.querySelector("#pauseButton");
console.log(pauseButton);
pauseButton.addEventListener("click", pauseAirport);
function pauseAirport() {
  airportAudio.pause();
}

const popAudio = document.querySelector("#pop");
console.log(popAudio);

const popButton = document.querySelector("#popButton");
console.log(popButton);

popButton.addEventListener("click", playPop);
function playPop() {
  popAudio.play();
}
