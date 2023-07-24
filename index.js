/* -------------------------------------------------------------------------- */
/*                              elementos del DOM                             */
/* -------------------------------------------------------------------------- */

// const btnStart = document.getElementById("btnStart");
const btnReloj = document.getElementById("btnReloj");
const btnTemp = document.getElementById("btnTemp");
const reloj = document.querySelector(".reloj-container");
const temp = document.querySelector(".temp-container");
const crono = document.querySelector(".crono-container");


const obtenerHoraActual = () => {
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
};

setInterval(() => {
  obtenerHoraActual();
}, 1000);


const mostrarPage = (e1, e2, e3) => {
  e1.classList.add("active");
  setTimeout(() => {
    e1.style.opacity = "1";
  }, 1);
  e2.style.opacity = "0";
  e3.style.opacity = "0";
  e2.classList.remove("active");
  e3.classList.remove("active");
}



btnCrono.addEventListener("click", () => mostrarPage(crono, temp, reloj));
btnReloj.addEventListener("click", () => mostrarPage(reloj, temp, crono));
btnTemp.addEventListener("click", () => mostrarPage(temp, reloj, crono));



