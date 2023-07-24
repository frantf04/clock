const btnCrono = document.getElementById("btnCrono");
const cronoStart = document.querySelector(".crono-start");
const cronoReset = document.querySelector(".crono-reset");
{
let timerInterval;
let timeRunning = false;
let h = 0;
let m = 0;
let s = 0;
let ms = 0;
let mst = 0;

function startTimer() {
  ms++;
  mst++;
  if (mst === 100) mst = 0;
  if (ms === 250) {
    ms = 0;
    s++;
  }

  if (s === 60) {
    s = 0;
    m++;
  }

  if (m === 60) {
    m = 0;
    h++;
  }

  const displayh = h < 10 ? `0${h}` : h;
  const displaym = m < 10 ? `0${m}` : m;
  const displays = s < 10 ? `0${s}` : s;
  const displayms = ms < 10 ? `00${ms}` : ms < 100 ? `0${ms}` : ms;
  const displaymst = mst < 10 ? `0${mst}` : mst 

  crono.children[0].innerHTML =
    s === 0
      ? `${displaymst}`
      : m === 0
      ? `${displays}: ${displaymst}`
      : h === 0
      ? `${displaym}:${displays}: ${displaymst}`
      : `${displayh}:${displaym}:${displays}: ${displaymst}`;
}

function startStop({ target }) {
  if (timeRunning) {
    timeRunning = false;
    if (target.classList.contains("fas")) {
      target.classList.value = "fas fa-play";
    }
    clearInterval(timerInterval);
  } else {
    timerInterval = setInterval(startTimer, 1);
    timeRunning = true;
    if (target.classList.contains("fas")) {
      target.classList.value = "fas fa-pause";
    }
  }
}

function reset() {
  timeRunning = false;
  clearInterval(timerInterval);
  mst = 0;
  ms = 0;
  s = 0;
  h = 0;
  m = 0;
  cronoStart.children[0].classList.value = "fas fa-play";
  crono.children[0].innerHTML = "00";
}

cronoStart.addEventListener("click", startStop);
cronoReset.addEventListener("click", reset);}
