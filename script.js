let focusButton = document.getElementById("focus");
let buttons = document.querySelectorAll(".button");
let shortBreakButton = document.getElementById("shortbreak");
let longBreakButton = document.getElementById("longbreak");
let startBtn = document.getElementById("buttonstart");
let reset = document.getElementById("buttonreset");
let pause = document.getElementById("buttonpause");
let time = document.getElementById("time");
let audio = document.getElementById("focus-audio");
let daytime = document.getElementById("daytime");
let sunset = document.getElementById("sunset");
let night = document.getElementById("night");
let videoInput = document.getElementById("video-input");
let set;
let active = "focus";
let count = 59;
let paused = true;
let minCount = 24;

// in the beginning of this script we are setting all variables as global and therefore the code is able to grab all variables across functions.
//for the pomodoro code, we use the switch to grab different counts and respond to the user input used on their selection of the button.
//each function below that is declared with the arrow function I'm keeping the function precise to stay within the user input selected.
//Above I've opted to delare using "let" as I know the user will switch from focus and their break, so let is used for all variables to keep the consistency, and let the code change the values of the varaible when they click.

time.textContent = `${minCount + 1}:00`;

const appendZero = (value) => {
  value = value < 10 ? `0${value}` : value;
  return value;
};

reset.addEventListener(
  "click",
  (resetTime = () => {
    pauseTimer();
    switch (active) {
      case "long":
        minCount = 14;
        break;
      case "short":
        minCount = 4;
        break;
      default:
        minCount = 24;
        break;
    }
    count = 59;
    time.textContent = `${minCount + 1}:00`;
    audio.pause();
  })
);

const removeFocus = () => {
  buttons.forEach((btn) => {
    btn.classList.remove("buttonfocus");
    audio.pause();
  });
};
//setting a global function so I can implement state changes but also change the music as the system detects the user changing between break/focus.

//in the design of this project, I have decided to enhance the context of study and meditation by changing how the media player behaves for the user.
//Instead of having an outright screen to video the video, study and mediation is enhanced by acting as a visual reinforcment for the timer.
//In this situation for the project, the user is allowed to change the media player by clicking the bottom buttons top switch between videos which would be called environments.
//audio feed back is then given and attched to the pomodoro timer to let the music behave as a "concentration mode".
//music is supplied to the timer so that when they hear the audio, the video behind is provided with a calming context, and so that they know they have initiated their timer to concentrate/study.

focusButton.addEventListener("click", () => {
  removeFocus();
  focusButton.classList.add("buttonfocus");
  pauseTimer();
  minCount = 24;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});
//implementing the functions of the focus button to result in a state change, and reset the timer for the the pomodoro.

shortBreakButton.addEventListener("click", () => {
  active = "short";
  removeFocus();
  shortBreakButton.classList.add("buttonfocus");
  pauseTimer();
  minCount = 4;
  count = 59;
  time.textContent = `${appendZero(minCount + 1)}:00`;
});
//implementing the functions for the shortbreak button which has already been declared as a global function.
//active variable is switched to "short" so the code is able to detect using the switch code above to reconfigure the timer.
//and of course the function changes the setup of the timer.

longBreakButton.addEventListener("click", () => {
  active = "long";
  removeFocus();
  longBreakButton.classList.add("buttonfocus");
  pauseTimer();
  minCount = 14;
  count = 59;
  time.textContent = `${minCount + 1}:00`;
});
//implementation of the code for long break selection. Here the functions we have set such as removefocus and pause timer come in handy as they are used across the user "clicks" to chance the pomodoro timer functions.

pause.addEventListener(
  "click",
  (pauseTimer = () => {
    paused = true;
    clearInterval(set);
    startBtn.classList.remove("hide");
    pause.classList.remove("show");
    reset.classList.remove("show");
    audio.pause();
  })
);
//in the case of the pause button im changing the class list to reveal the button option after it has been selected.
//pause variable is activated and redeclared, and the timer is set to the progression it has made using clearInterval().

startBtn.addEventListener("click", () => {
  reset.classList.add("show");
  pause.classList.add("show");
  startBtn.classList.add("hide");
  startBtn.classList.remove("show");
  if (paused) {
    paused = false;
    time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
    set = setInterval(() => {
      count--;
      time.textContent = `${appendZero(minCount)}:${appendZero(count)}`;
      if (count == 0) {
        if (minCount != 0) {
          minCount--;
          count = 60;
        } else {
          clearInterval(set);
        }
      }
    }, 1000);
  }
  audio.play();
});

// pomodoro code assisted by EK - Developer on Youtube, found at https://www.youtube.com/watch?v=sYFR4NJkrFc&t=191s&ab_channel=EK-developer.
//for start button I bring in coditionals to respond to the different case scenarios the user has inputted.
//first I detect if paused is active with "true" or "false" to reset the timer.

daytime.addEventListener("click", () => {
  videoInput.src =
    "vecteezy_ai-generated-beautiful-fantasy-island-with-a-house-in_37918793.mp4";
  daytime.classList.add("daytime");
  sunset.classList.remove("sunset");
  night.classList.remove("night");
});

sunset.addEventListener("click", () => {
  videoInput.src =
    "vecteezy_ai-generated-silhouettes-of-people-against-the-background-of_38599328.mp4";
  daytime.classList.remove("daytime");
  sunset.classList.add("sunset");
  night.classList.remove("night");
});

night.addEventListener("click", () => {
  videoInput.src =
    "No copyright Lofi animation Background loop ｜ visual loop.mp4";
  daytime.classList.remove("daytime");
  sunset.classList.remove("sunset");
  night.classList.add("night");
});
//setting the code for the state changes of the button and changing the video source so that the user is able to change their environment based on their selection.
//because there are only 3 buttons I've decided to repeat the code to change class lists as the options are already quite limited.
