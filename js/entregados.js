class entrega {
  constructor(marca, peso, potencia, color, modelo, placa) {
    this.marca = marca;
    this.peso = peso;
    this.potencia = potencia;
    this.color = color;
    this.modelo = modelo;
    this.placa = placa;
  }
// por mirar que hacemos  la idea es ponerlos en cards  de boostrap
  mostrasAutos() {
    $("#caso").append(
      " <div>" +
        this.marca +
        this.color +
        this.modelo +
        this.potencia +
        this.peso +
        this.placa +
        "</div>"
    );
  }
}

let auto = [];
let entregas = [];
function inicializarAutos() {
  verLocalStorage();
  for (let i = 0; i < auto.length; i++) {
    entregas.push(
      new entrega(
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

inicializarAutos();
for (let index = 0; index < entregas.length; index++) {
  entregas[index].mostrasAutos();
}

console.warn(entregas);
