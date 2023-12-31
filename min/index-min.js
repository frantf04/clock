const btnReloj = document.getElementById("btnReloj"),
  btnTemp = document.getElementById("btnTemp"),
  reloj = document.querySelector(".reloj-container"),
  temp = document.querySelector(".temp-container"),
  crono = document.querySelector(".crono-container"),
  obtenerHoraActual = () => {
    const e = new Date(),
      t = e.getHours(),
      o = e.getMinutes(),
      n = e.getSeconds();
    reloj.children[0].innerHTML = `${t >= 10 ? t : "0" + t}: ${
      o >= 10 ? o : "0" + o
    }: ${n >= 10 ? n : "0" + n}`;
    const r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    reloj.children[1].innerHTML = `${e
      .toDateString()
      .split(`${r[e.getDay()]}`)
      .join(`${r[e.getDay()]},`)}`;
  };
setInterval(() => {
  obtenerHoraActual();
}, 1e3);
const mostrarPage = (e, t, o) => {
  e.classList.add("active"),
    setTimeout(() => {
      e.style.opacity = "1";
    }, 1),
    (t.style.opacity = "0"),
    (o.style.opacity = "0"),
    t.classList.remove("active"),
    o.classList.remove("active");
};
btnCrono.addEventListener("click", () => mostrarPage(crono, temp, reloj)),
  btnReloj.addEventListener("click", () => mostrarPage(reloj, temp, crono)),
  btnTemp.addEventListener("click", () => mostrarPage(temp, reloj, crono));
