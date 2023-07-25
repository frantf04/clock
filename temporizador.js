const inpHora = document.getElementById("hora");
const inpMin = document.getElementById("min");
const inpSeg = document.getElementById("seg");
const temp_hora = document.querySelector(".temp-hora");
const temp_min = document.querySelector(".temp-min");
const temp_seg = document.querySelector(".temp-seg");
const modal = document.querySelector(".modal-obtener__tiempo");
const cover = document.querySelector(".cover");
const btn_tempStop = document.getElementById("btn-temStop");
const btnStart = document.getElementById("btnStart");
const btn_plusTemp = document.getElementById("btn-plusTemp");
const audio = document.createElement("audio");
audio.src = "ringtone.mp3";

{
  let h = 0,
    m = 0,
    s = 0,
    H = 0,
    M = 0,
    S = 0,
    timerInterval,
    tempRunning = false;

  const decrementar = () => {
    console.log(S);
    temp_hora.innerText = h >= 10 ? h : "0" + h;
    temp_min.innerText = m >= 10 ? m : "0" + m;
    temp_seg.innerText = s >= 10 ? s : "0" + s;

    if (s > 0) s--;
    if (m > 0 && s == 0) m--, (s = 59);
    if (h > 0 && m == 0) h--, (m = 59);
    modal.classList.remove("active");
    cover.classList.remove("active");

    inpHora.value = h;
    inpMin.value = m;
    inpSeg.value = s;
    // if (h == 0 && m == 0 && s == 0) {
    //   audio.play()
    // }
  };

  const agregarTemp = () => {
    modal.classList.add("active");
    cover.classList.add("active");
    clearInterval(timerInterval);
    tempRunning = false;
  };
  function startStop(target) {
    h = inpHora.value;
    m = inpMin.value;
    s = inpSeg.value;
    H = inpHora.value;
    M = inpMin.value;
    S = inpSeg.value;

    let mayorACero = // condicion para validar que todos los input tengan un valor positivo y que al menos uno sea mayor a cero (0)
      (inpHora.value > 0 || inpMin.value > 0 || inpSeg.value > 0) &&
      inpHora.value > -1 &&
      inpMin.value > -1 &&
      inpSeg.value > -1;

    if (mayorACero) {
      if (tempRunning) {
        tempRunning = false;
        if (target.classList.contains("fas"))
          target.classList.value = "fas fa-play";
        clearInterval(timerInterval);
      } else {
        tempRunning = true;
        if (target.classList.contains("fas"))
          target.classList.value = "fas fa-pause";
        timerInterval = setInterval(decrementar, 1000);
      }
    }
  }

  btn_tempStop.addEventListener("click", ({ target }) => {
    startStop(target);
  });
  btnStart.addEventListener("click", ({ target }) => startStop(target));
  btn_plusTemp.addEventListener("click", agregarTemp);
}
