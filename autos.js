class autos {
  constructor(marca, peso, potencia, color, modelo) {
    this.marca = marca;
    this.peso = peso;
    this.potencia = potencia;
    this.color = color;
    this.modelo = modelo;
  }

  mostrasAutos() {
    document
      .getElementById("escribir")
      .append(
        "Este auto es un " +
          this.marca +
          " de color " +
          this.color +
          " tiene un peso de " +
          this.peso +
          " kilos y cuenta con " +
          this.potencia +
          " caballos de fuerza fabricado en el año " +
          this.modelo +
          "<br>"
      );
  }

  pesopoten() {
    let relacion = this.peso / this.potencia;
    document
      .getElementById("escribir")
      .append(
        "  la relacion peso potencia del " +
          this.marca +
          " es de " +
          relacion +
          " kl/hp" +
          "<br><br>"
      );
    if (relacion > 0 && relacion < 1) {
      alert(
        "El " +
          this.marca +
          " cuenta con una relacion peso potencia menor a 1  exactamente  de " +
          relacion +
          " lo cual lo hace uno de los autos  mas rapidos del mundo"
      );
    } else if (relacion > 2.44 && relacion < 3) {
      alert(
        "El " +
          this.marca +
          " cuenta con una relacion mayor a 2 exactamente de " +
          relacion +
          "  lo que lo hace uno de los mas lentos del grupo"
      );
    }
  }
}
let auto = [];
let carros = []; //mayor modelo
function mostrar() {
  console.log(carros);
  let marca = document.getElementById("marca").value;
  let color = document.getElementById("color").value;
  let modelo = document.getElementById("modelo").value;
  let potencia = document.getElementById("potencia").value;
  let peso = document.getElementById("peso").value;

  verLocalStorage();
  for (let i = 0; i < auto.length; i++) {
    carros.push(
      new autos(
        auto[i].marca,
        auto[i].peso,
        auto[i].potencia,
        auto[i].color,
        auto[i].modelo
      )
    );
  }
  carros.push(new autos(marca, peso, potencia, color, modelo));
  for (let index = 0; index < carros.length; index++) {
    carros[index].mostrasAutos();
    carros[index].pesopoten();
  }
  ordenarCarros();
  guardarLocalStorage();
}
function ordenarCarros() {
  carros.sort((a, b) => (a.modelo > b.modelo ? 1 : -1)); // if ternario  (condicion) ? resultado 1 : otro resultado :
}
function guardarLocalStorage() {
  localStorage.setItem("autos", JSON.stringify(carros));
}
function verLocalStorage() {
  if (localStorage.getItem("autos")) {
    auto = JSON.parse(localStorage.getItem("autos"));
    console.log(auto);
  } else {
    alert("No hay datos en local storage");
  }
}
