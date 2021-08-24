function guardarLocalStorage() {
  localStorage.setItem("autos", JSON.stringify(carros));
}
function verLocalStorage() {
  if (localStorage.getItem("autos")) {
    auto = JSON.parse(localStorage.getItem("autos"));
  } else {
    console.warn("No hay datos en local storage");
  }
}
