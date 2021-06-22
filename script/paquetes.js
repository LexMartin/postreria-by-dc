fetch("../data/paquetes.json")
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
  const contenedor = document.getElementById("paquetes")

  for (let i = 0; i < datos.length; i++) {
    const paquete = document.createElement("div")
    paquete.className = "col-xs-12 col-sm-6 col-md-4 col-lg-3 portfolio-item"
    paquete.innerHTML = `
              <div class="portfolio-one">
                <div class="portfolio-head flex">
                  <div class="portfolio-img">
                    <img alt="" src="${datos[i].imgUrl}" />
                  </div>
                </div>
                <!-- End portfolio-head -->
                <div class="portfolio-content">
                  <h5 id="title-${i}" class="title">${datos[i].titulo}</h5>
                  <p>${datos[i].descripcion}<p>
                   
                  <div class="form-group form-inline flex">
                  <div class="form-group">
                            <label>Personas</label>
                            </div>
                      
                        
                  <select class="form-control" id="personas-${i}">
                    <option value="0" selected>10</option>
                    <option value="1">20</option>
                    <option value="2">30</option>
                    <option value="3">+30</option>
                  </select>
                 </div>
                  <div>

                  <button type="submit" id="btn-${i}" class="btn btn-primary shop-item-button">Cotizar</button>
                  </div>
                </div>
                <!-- End portfolio-content -->
              </div>
              <!-- End portfolio-item -->
          `
    contenedor.appendChild(paquete)
  }
}

const btnCotizar = document.querySelector("#paquetes")
btnCotizar.addEventListener("click", cotiza)

function cotiza(e) {
  if (e.target.className == "btn btn-primary shop-item-button") {
    let id = e.target.id.slice(4)
    let cantidad = document.getElementById(`personas-${id}`).options[
      document.getElementById(`personas-${id}`).selectedIndex
    ].text
    let paquete = document.getElementById(`title-${id}`).innerText

    //Inhabilita los botones despues de solicitar una cotizacion
    botones = document.getElementsByClassName(
      "btn btn-primary shop-item-button"
    )

    for (i = 0; i < botones.length; i++) botones[i].disabled = true

    window.open(
      `https://wa.me/5219982106318?text=Solicito cotización del%0D%0A${paquete}%0D%0A para ${cantidad} personas%0D%0A`,
      "_blank"
    )
  }
}
