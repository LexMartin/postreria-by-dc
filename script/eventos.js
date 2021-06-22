fetch("../data/eventos.json")
  .then(function (response) {
    return response.json()
  })
  .then(function (datos) {
    appenddata(datos)
  })
  .catch(function (err) {
    console.log(err)
  })

function appenddata(datos) {
  const contenedor = document.getElementById("eventos")

  for (let i = 0; i < datos.length; i++) {
    const evento = document.createElement("div")
    evento.className = "col-xs-12 col-sm-6 col-md-4 col-lg-3 portfolio-item"
    evento.innerHTML = `
              <div class="portfolio-one">
                <div class="portfolio-head flex">
                  <div class="portfolio-img">
                    <img alt="" src="${datos[i].imgUrl}" />
                  </div>
                </div>
                <!-- End portfolio-head -->
                <div class="portfolio-content">
                  <h5 class="title">${datos[i].text}</h5>
                </div>
                <!-- End portfolio-content -->
              </div>
              <!-- End portfolio-item -->
              `
    contenedor.appendChild(evento)
  }
}
