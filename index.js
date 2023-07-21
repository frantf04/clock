/* -------------------------------------------------------------------------- */
/*                              elementos del DOM                             */
/* -------------------------------------------------------------------------- */
const inpHora = document.getElementById("hora");
const inpMin = document.getElementById("min");
const inpSeg = document.getElementById("seg");
const btnStart = document.getElementById("btnStart");
const btnReloj = document.getElementById("btnReloj");
const btnTemp = document.getElementById("btnTemp");
const btnCrono = document.getElementById("btnCrono");

const temp_hora = document.querySelector(".temp-hora");
const temp_min = document.querySelector(".temp-min");
const temp_seg = document.querySelector(".temp-seg");
const modal = document.querySelector(".modal-obterner__tiempo");
const cover = document.querySelector(".cover");
const temp = document.querySelector(".temp-container");
const reloj = document.querySelector(".reloj-container");
const crono = document.querySelector(".crono-container");
const cronoStart = document.querySelector(".crono-start");

const horaActual = () => {
  const fecha = new Date();
  const h = fecha.getHours();
  const m = fecha.getMinutes();
  const s = fecha.getSeconds();

  reloj.children[0].innerHTML = `${h >= 10 ? h : "0" + h}: ${
    m >= 10 ? m : "0" + m
  }: ${s >= 10 ? s : "0" + s}`;
  const dias = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  reloj.children[1].innerHTML = `${fecha
    .toDateString()
    .split("Fri")
    .join(`${dias[fecha.getDay()]},`)}`;
  // reloj.children[1].innerHTML = `${fecha.toUTCString()}`;
};

setInterval(() => {
  horaActual();
}, 1000);

inpSeg.addEventListener("change", () => {
  if (
    (inpHora.value > 0 || inpMin.value > 0 || inpSeg.value > 0) &&
    inpHora.value > -1 &&
    inpMin.value > -1 &&
    inpSeg.value > -1
  ) {
    btnStart.classList.add("active");
  } else {
    btnStart.classList.remove("active");
  }
});
inpMin.addEventListener("change", () => {
  if (
    (inpHora.value > 0 || inpMin.value > 0 || inpSeg.value > 0) &&
    inpHora.value > -1 &&
    inpMin.value > -1 &&
    inpSeg.value > -1
  ) {
    btnStart.classList.add("active");
  } else {
    btnStart.classList.remove("active");
  }
});
inpHora.addEventListener("change", () => {
  if (
    (inpHora.value > 0 || inpMin.value > 0 || inpSeg.value > 0) &&
    inpHora.value > -1 &&
    inpMin.value &&
    -1 &&
    inpSeg.value > -1
  ) {
    btnStart.classList.add("active");
  } else {
    btnStart.classList.remove("active");
  }
});

const obtenerDatos = () => {
  const audio = document.createElement("audio");
  audio.src = "ringtone.mp3";

  let h = inpHora.value;
  let m = inpMin.value;
  let s = inpSeg.value;

  if (s != "" && m != "" && h != "") {
    setInterval(() => {
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
      } else {
        audio.play();
      }
    }, 1000);

    modal.style.display = "none";
    cover.style.display = "none";
  } else {
    alert("Debe introducir un valor!");
  }
};

function mostrar(e1, e2, e3) {
  e1.classList.add("active");
  setTimeout(() => {
    e1.style.opacity = "1";
  }, 1);
  e2.style.opacity = "0";
  e3.style.opacity = "0";
  e2.classList.remove("active");
  e3.classList.remove("active");
}

btnStart.addEventListener("click", obtenerDatos);
btnCrono.addEventListener("click", () => mostrar(crono, temp, reloj));
btnReloj.addEventListener("click", () => mostrar(reloj, temp, crono));
btnTemp.addEventListener("click", () => mostrar(temp, reloj, crono));
cronoStart.addEventListener("click", ({ target }) => {
  let timeRunning = false;
  let h = 0;
  let m = 0;
  let s = 0;
  let ms = 0;
  let msf = 0;
  if (target.children.length == 0) {
    target.classList.toggle("fa-play");
    target.classList.toggle("fa-pause");
  }

  setInterval(() => {
    ms++;
    msf++;
    if (msf == 99) {
      msf = 0;
    }
    if (ms == 500) {
      m++;
      ms = 0;
    }
    if (m == 59) {
      h++;
    }
    crono.children[0].innerHTML =
      m == 0 ? msf : h == 0 ? `${m}:${msf}` : `${h}:${m}:${msf}`;
  }, 0.1);
});
