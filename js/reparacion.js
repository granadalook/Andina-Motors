function modalvehiculo() {
  document.getElementById("botonVehiculo");
  $("#botonVehiculo").trigger("click");
}

class autos {
  constructor(marca, peso, potencia, color, modelo, placa) {
    this.marca = marca;
    this.peso = peso;
    this.potencia = potencia;
    this.color = color;
    this.modelo = modelo;
    this.placa = placa;
  }

  pesopoten(number) {
    let relacion = this.peso / this.potencia;

    $("#tRelacion").append(`<tr>
    <th scope="row">${number}</th>
    <td>${this.placa}</td>
    <td>${this.modelo}</td>
    <td>${relacion}</td>
  </tr>`);
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
  let marca = document.getElementById("marca").value.toUpperCase();
  let color = document.getElementById("color").value.toUpperCase();
  let modelo = document.getElementById("modelo").value.toUpperCase();
  let potencia = document.getElementById("potencia").value.toUpperCase();
  let peso = document.getElementById("peso").value.toUpperCase();
  let placa = document.getElementById("placa").value.toUpperCase();
  if (marca===""||color===""|| modelo==="" || potencia===""||peso===""||placa==="") {
    
    modalvehiculo()
  } else {
    
  

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
      carros[index].pesopoten(index);
    }
  } else {
    let numberAuto = "Nuevo auto";
    ultimoCoche.pesopoten(numberAuto);
  }

  guardarLocalStorage();
}
}
function ordenarCarros() {
  carros.sort((a, b) => (a.modelo > b.modelo ? 1 : -1));
}
inicializarAutos();
