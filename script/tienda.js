fetch("../data/tienda.json")
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
  const contenedor = document.getElementById("tienda")

  for (let i = 0; i < datos.length; i++) {
    const producto = document.createElement("div")
    producto.className = "col-xs-12 col-sm-6 col-md-4 col-lg-3 portfolio-item"
    producto.innerHTML = `
              <div class="portfolio-one">
                <div class="portfolio-head flex">
                  <div class="portfolio-img">
                    <img alt="" src="${datos[i].imgUrl}" />
                  </div>
                </div>
                <!-- End portfolio-head -->
                <div class="portfolio-content">
                  <h5 id="title-${i}" class="title">${datos[i].titulo}</h5>
                  <p>${datos[i].descripcion}</p>
                  <p><strong>Precio:</strong> $<strong id="precio-${i}">${datos[i].precio}</strong> MXN<p>
                   
                  <div class="form-group form-inline flex">
                  <div class="form-group">
                            <label>cantidad</label>
                            </div>
                      
                        
                 
                  <input class="form-control cantidad-input" id="cantidad-${i}" type="number" value="1">
                 </div>
                  <div>

                  <button type="submit" id="btn-${i}" class="btn btn-primary shop-item-button">Comprar</button>
                  </div>
                </div>
                <!-- End portfolio-content -->
              </div>
              <!-- End portfolio-item -->
          `
    contenedor.appendChild(producto)
  }

  tienda
    .getElementsByClassName("cantidad-input")[0]
    .addEventListener("change", quantityChanged)
}

const btnCotizar = document.querySelector("#tienda")
btnCotizar.addEventListener("click", compra)

function compra(e) {
  if (e.target.className == "btn btn-primary shop-item-button") {
    let id = e.target.id.slice(4)
    let cantidad = document.getElementById(`cantidad-${id}`).options[
      document.getElementById(`cantidad-${id}`).selectedIndex
    ].text
    let producto = document.getElementById(`title-${id}`).innerText
    let precio = document.getElementById(`precio-${id}`).innerText

    let total = parseFloat(precio) * parseInt(cantidad)
    console.log(total)
    //Inhabilita los botones despues de solicitar una cotizacion
    botones = document.getElementsByClassName(
      "btn btn-primary shop-item-button"
    )

    for (i = 0; i < botones.length; i++) botones[i].disabled = true

    window.open(
      `https://wa.me/5219982106318?text=Compra de%0D%0A${producto} - ${cantidad}*${precio}=${total}  %0D%0A`,
      "_blank"
    )
  }
}
function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
}
