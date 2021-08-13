

const URLJSON = "../data/data.json"



$("#btn1").click(() => { 
  $.getJSON(URLJSON, function (respuesta, estado) {
      if(estado === "success"){
        let misDatos = respuesta;
        for (const dato of misDatos) {
            $("section").append(`<article class="article--card">
                                    <h1>${dato.id}</h1>
                                    <h3>${dato.marca}</h3>
                                    <h3>${dato.peso}</h3>
                                    <h3>${dato.potencia}</h3>
                                    <h3>${dato.color}</h3>
                                    <h3>${dato.modelo}</h3>
                                    <button>SABER MAS </button>
                                    <br><hr>
                                    </article>`)
        }  
 }
 });
});
