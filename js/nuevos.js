const URLJSON = "../data/data.json";

$("#btn1").click(() => {
  $.getJSON(URLJSON, function (respuesta, estado) {
    if (estado === "success") {
      let misDatos = respuesta;
      for (const dato of misDatos) {
        $("section").append(`<article class="article--card">
                                  <div class="article--card--divtex">
                                    <h1> Auto: ${dato.id}</h1>
                                    <h3> Marca: ${dato.marca}</h3>
                                    <h3>Modelo: ${dato.modelo}</h3>
                                    <h3>Color: ${dato.color}</h3>
                                    <h3> Peso: ${dato.peso} Kl</h3>
                                    <h3>potencia: ${dato.potencia} Hp</h3>
                                    <br>
                                    <button><a href="${dato.url}">SABER MAS DE LA MARCA</a> </button>
                                  </div>
                                  <div class="article--card--divImg">
                                      <img src="${dato.logo}" alt="${dato.marca}">
                                  </div>
                            </article>`);
      }
    }
  });
});
