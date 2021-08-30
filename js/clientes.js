let datos = [];
class personas {
  constructor(nombre, cedula, telefono, email, placa) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.telefono = telefono;
    this.email = email;
    this.placa = placa;
  }
}

function verPersona() {
  ordenarCedula();
  let contenido = "";
  for (let index = 0; index < datos.length; index++) {
    contenido +=
      "<tr><td>" +
      datos[index].nombre +
      "</td><td>" +
      datos[index].cedula +
      "</td><td>" +
      datos[index].telefono +
      "</td><td>" +
      datos[index].email +
      "</td><td>" +
      datos[index].placa +
      "</td></tr>";
    datos[index];
  }
  document.getElementById("tUsuario").innerHTML = contenido;
}
function ordenarCedula() {
  datos.sort((a, b) => (a.cedula > b.cedula ? 1 : -1));
}

let mostrar = document.getElementById("verLista");
mostrar.onclick = () => {
  let nombre = document.getElementById("nombre").value.toUpperCase();
  let cedula = document.getElementById("cedula").value.toUpperCase();
  let telefono = document.getElementById("telefono").value.toUpperCase();
  let email = document.getElementById("email").value.toUpperCase();
  let placa = document.getElementById("placa").value.toUpperCase();
  if (nombre==="" || cedula===""|| telefono===""|| email===""||placa==="") {
    modalError() 
  } else {
  let people = new personas(nombre, cedula, telefono, email, placa);
  datos.push(people);

  document.getElementById("nombre").value = "";
  document.getElementById("cedula").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("email").value = "";
  document.getElementById("placa").value = "";
  verPersona();
}
};
