const URLJSON = "../data/data.json";

$("#botonVerAutos").click(() => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("#autosList").append(`<article class="article--card">
                                  <div class="article--card--divtex">
                                    <h1> Auto: ${dato.id}</h1>
                                    <h3> Marca: ${dato.marca}</h3>
                                    <h3>Modelo: ${dato.modelo}</h3>
                                    <h3>Color: ${dato.color}</h3>
                                    <h3> Peso: ${dato.peso} Kl</h3>
                                    <h3>potencia: ${dato.potencia} Hp</h3>
                                    <br
                                    <a class="btn btn-primary" href="" role="button"></a>
                                    <a class="btn btn-primary" href="${dato.url}" role="button">Conoce Más</a>
                                  </div>
                                  <div class="article--card--divImg">
                                      <img src="${dato.logo}" alt="${dato.marca}">
                                  </div>
                            </article>`);
      }
    }
  });
});
