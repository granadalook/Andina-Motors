class entrega {
  constructor(marca, peso, potencia, color, modelo, placa) {
    this.marca = marca;
    this.peso = peso;
    this.potencia = potencia;
    this.color = color;
    this.modelo = modelo;
    this.placa = placa;
  }
  consultarAutos(cita) {
  
    $("#card").append(
      "<div class="+"'card border-dark mb-3'"+" style= "+"'max-width: 18rem;'"+">"+
        "<div  class="+"'card-header text-center'"+">"+this.placa+"</div>"+
        "<div class="+"card-body"+">"+
          "<h5  class="+"'card-title'"+">"+"Marca :"+this.marca+"</h5>"+
          "<h5  class="+"'card-title'"+">" +"Color :"+this.color+" </h5>"+
          "<h5  class="+"'card-title'"+">"+"Modelo :"+this.modelo+" </h5>"+
        "</div>"+
        "<div class="+"'card-footer bg-transparent border-dark mb-3'"+">Revision programada para el :<br>"+cita+"</div>"+
        "</div>"+
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

function consultaReparacion() {
  inicializarAutos();
for (let index = 0; index < entregas.length; index++) {
let hoy = new Date();
let fecha = (hoy.getDate()+index) + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
entregas[index].consultarAutos(fecha);
}} 