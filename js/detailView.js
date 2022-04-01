import {productos} from "./renderProduct.js"

const SPAelements = document.getElementsByClassName("SPA")
const btn = ""

const renderDetailView = (contenedorProductos, producto) => {

   for(let element of SPAelements){
      element.style = "display: none"
   }
   contenedorProductos.innerHTML = "";

   contenedorProductos.innerHTML += `
      <div class="detailView-container">
         <div class="detailView-container__images">
            <div class="images__main-img">
               <img class="img-${producto.nombre}-${producto.id}" src="${producto.imagen}" alt="" />
            </div>
            <div class="${producto.nombre}-${producto.id} otras-img">
               <img class="otra-img num1" src="${producto.otrasImgs[0]}" alt="" />
               <img class="otra-img num2" src="${producto.otrasImgs[1]}" alt="" />
               <img class="otra-img num3" src="${producto.otrasImgs[2]}" alt="" />
            </div>
         </div>
         <div class="detailView-container__details">
            <div class="detailView-text">
               <h3 class="detailView-text__pretitle">${producto.tipo}</h3>
               <h1 class="detailView-text__title">${producto.nombre}</h1>
               <p class="detailView-text__paragraph paragraph1">
               ${producto.madeOf}
               </p>
               <h6 class="detailView-text__medidas">MEDIDAS</h6>
               <ul>
                  <li class='medidas-item-list'>${producto.medidas[0]}</li>
                  <li class='medidas-item-list'>${producto.medidas[1]}</li>
                  <li class='medidas-item-list'>${producto.medidas[2]}</li>
               </ul>
               <p class="detailView-text__paragraph paragraph2">
               ${producto.descripcion}
               </p>
               
               </div>
               
               <a href=# class="detailView-btnContainer"><p class="detailView-btn">CONSULTAR PRECIO</p></a>
               
         </div>
      </div>
   `;
   
}

//data-id="prod-${producto.id}" id="card-${producto.id}"


export { renderDetailView, SPAelements }