class autos {
  constructor(marca, peso, potencia, color, modelo) {
    this.marca = marca;
    this.peso = peso;
    this.potencia = potencia;
    this.color = color;
    this.modelo = modelo;
  }

  mostrasAutos() {
    document.write(
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
    document.write(
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

function ordenarCarros() {
  carros.sort((a, b) => (a.modelo > b.modelo ? 1 : -1)); // if ternario  (condicion) ? resultado 1 : otro resultado :
  /* carros.sort(function (a, b) {
    if (a.modelo > b.modelo) {
      return 1;
    }
    if (a.modelo < b.modelo) {
      return -1;
    }
    return 0;
  });
  return carros; */
}

let carros = []; //mayor modelo

let crearCoche = false;
do {
  let respuesta = prompt("Quieres crear un coche");
  if (respuesta == "si") {
    crearCoche = true;
    let marca = prompt(" Marca de tu auto");
    let color = prompt(" Color de tu auto");
    let modelo = prompt(" Modelo de tu auto");
    let potencia = prompt(" Potencia de tu auto en HP");
    let peso = prompt(" Peso de tu auto KL");

    carros.push(new autos(marca, peso, potencia, color, modelo));
  } else {
    ordenarCarros();
    crearCoche = false;
  }
} while (crearCoche);

function mostrar() {
  for (let index = 0; index < carros.length; index++) {
    carros[index].mostrasAutos();

    carros[index].pesopoten();
  }
}

mostrar();
