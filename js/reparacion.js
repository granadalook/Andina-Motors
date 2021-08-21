class autos {
  constructor(marca, peso, potencia, color, modelo, placa) {
    this.marca = marca;
    this.peso = peso;
    this.potencia = potencia;
    this.color = color;
    this.modelo = modelo;
    this.placa = placa;
  }

  mostrasAutos() {
    ordenarCarros();
    $("#tUsuario").append(
      "<tr><td>" +
        this.marca +
        "</td><td>" +
        this.color +
        "</td><td>" +
        this.modelo +
        "</td><td>" +
        this.potencia +
        "</td><td>" +
        this.peso +
        "</td></tr>"
    );
  }

  pesopoten() {
    let relacion = this.peso / this.potencia;

    $("#tRelacion").append(
      "<tr><td>" +
        this.placa +
        "</td><td>" +
        this.modelo +
        "</td><td>" +
        relacion +
        "</td></tr>"
    );
  }
}

let auto = [];
let carros = [];
function inicializarAutos() {
  verLocalStorage();
  for (let i = 0; i < auto.length; i++) {
    carros.push(
      new autos(
        auto[i].marca,
        auto[i].peso,
        auto[i].potencia,
        auto[i].color,
        auto[i].modelo,
        auto[i].placa
      )
    );
  }
}

let primeraVez = true;
function mostrar() {
  console.log(auto);
  let marca = document.getElementById("marca").value;
  let color = document.getElementById("color").value;
  let modelo = document.getElementById("modelo").value;
  let potencia = document.getElementById("potencia").value;
  let peso = document.getElementById("peso").value;
  let placa = document.getElementById("placa").value;

  document.getElementById("marca").value = "";
  document.getElementById("color").value = "";
  document.getElementById("modelo").value = "";
  document.getElementById("potencia").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("placa").value = "";

  let ultimoCoche = new autos(marca, peso, potencia, color, modelo, placa);
  carros.push(ultimoCoche);

  if (primeraVez) {
    primeraVez = false;
    for (let index = 0; index < carros.length; index++) {
      carros[index].mostrasAutos();
      carros[index].pesopoten();
    }
  } else {
    ultimoCoche.mostrasAutos();
    ultimoCoche.pesopoten();
  }

  guardarLocalStorage();
}
function ordenarCarros() {
  carros.sort((a, b) => (a.modelo > b.modelo ? 1 : -1));
}
inicializarAutos();
