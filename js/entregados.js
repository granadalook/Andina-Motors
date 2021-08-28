class entrega {
  constructor(marca, peso, potencia, color, modelo, placa,fechaCita) {
    this.marca = marca;
    this.peso = peso;
    this.potencia = potencia;
    this.color = color;
    this.modelo = modelo;
    this.placa = placa;
    this.fechaCita = fechaCita;
  }
  consultarAutos() {
   
  // sin comillas francesas
    $("#card").append(
      "<div class="+"'card border-dark mb-3'"+" style= "+"'max-width: 18rem;'"+">"+
        "<div  class="+"'card-header text-center'"+">"+this.placa+"</div>"+
        "<div class="+"card-body"+">"+
          "<h5  class="+"'card-title'"+">"+"Marca :"+this.marca+"</h5>"+
          "<h5  class="+"'card-title'"+">" +"Color :"+this.color+" </h5>"+
          "<h5  class="+"'card-title'"+">"+"Modelo :"+this.modelo+" </h5>"+
        "</div>"+
        "<div class="+"'card-footer bg-transparent border-dark mb-3'"+">Revision programada para el :<br>"+this.fechaCita+"</div>"+
        "</div>"+
      "</div>"
    );
  }
}

let auto = [];
let entregas = [];
function consultarAutos() {
  inicializarAutos();
  
}
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
        auto[i].placa,
        consultaReparacion(i)
      ).consultarAutos()
    );
  }
}

function  consultaReparacion(dias) {
  
  let hoy = new Date();
  hoy.setDate(hoy.getDate() + dias);
  let fecha = (hoy.getDate()) + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
  return fecha;
} 
