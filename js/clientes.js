let datos = [];
class personas {
  constructor(nombre, cedula, telefono, email) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.telefono = telefono;
    this.email = email;
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
  let nombre = document.getElementById("nombre").value;
  let cedula = document.getElementById("cedula").value;
  let telefono = document.getElementById("telefono").value;
  let email = document.getElementById("email").value;

  let people = new personas(nombre, cedula, telefono, email);
  datos.push(people);

  document.getElementById("nombre").value = "";
  document.getElementById("cedula").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("email").value = "";

  verPersona();
};
