const inpHora = document.getElementById("hora");
const inpMin = document.getElementById("min");
const inpSeg = document.getElementById("seg");
const temp_hora = document.querySelector(".temp-hora");
const temp_min = document.querySelector(".temp-min");
const temp_seg = document.querySelector(".temp-seg");
const modal = document.querySelector(".modal-obtener__tiempo");
const cover = document.querySelector(".cover");
const btn_tempStop = document.getElementById("btn-temStop");
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
    h = inpHora.value;
    m = inpMin.value;
    s = inpSeg.value;
    H = inpHora.value;
    M = inpMin.value;
  S = inpSeg.value;
  
  const mostrarValores = () => {
    temp_hora.innerText = h >= 10 ? h : "0" + h;
    temp_min.innerText = m >= 10 ? m : "0" + m;
    temp_seg.innerText = s >= 10 ? s : "0" + s;
    if (h > 0 || m > 0 || s > 0) {
      if (s > 0) {
        s--;
      }
      if (s == 0 && m > 0) {
        m--;
        s = 59;
      }
      if (m == 0 && h > 0) {
        h--;
        m = 59;
      }
    }
  }
  const decrementar = () => {
 
    let mayorACero = // condicion para validar que todos los input tengan un valor positivo y que al menos uno sea mayor a cero (0)
      (inpHora.value > 0 || inpMin.value > 0 || inpSeg.value > 0) &&
      inpHora.value > -1 &&
      inpMin.value > -1 &&
      inpSeg.value > -1;

    
   
    
  };

  const iniciarDetener = () => {
    if (tempRunning) {
      tempRunning = false
        clearInterval(timerInterval)
    } else {
      tempRunning = true
      timerInterval = setInterval(decrementar, 1000)

    }
  };

  // btn_tempStop.addEventListener("click", detener);
  btnStart.addEventListener("click", iniciarDetener);
}

// btn_plusTemp.addEventListener('click', agregarTemp)
