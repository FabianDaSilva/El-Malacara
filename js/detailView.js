import { changeImage } from "./changeImage.js";
import { liItems, hasMedidas } from "./data/medidasList.js";
import { productos } from "./renderProduct.js"

const SPAelements = document.getElementsByClassName("SPA")

const renderDetailView = (contenedorProductos, producto) => {

   for (let element of SPAelements) {
      element.style = "display: none"
   }
   contenedorProductos.innerHTML = "";

   contenedorProductos.innerHTML += `
      <div class="detailView-container">
         <div class="detailView-container__images">
            <div class="images__main-img">
               <img class="img-${producto.nombre}-${producto.id}" id="mainImg" src="${producto.imagen}" alt="" />
            </div>
            <div class="${producto.nombre}-${producto.id} otras-img">
               <a href='#'><img class="otra-img num1" id="Img1" src="${producto.otrasImgs[0]}" alt="" /></a>
               <a href='#'><img class="otra-img num2" id="Img2" src="${producto.otrasImgs[1]}" alt="" /></a>
               <a href='#'><img class="otra-img num3" id="Img3" src="${producto.otrasImgs[2]}" alt="" /></a>
            </div>
         </div>
         <div class="detailView-container__details">
            <div class="detailView-text">
               <h3 class="detailView-text__pretitle">${producto.tipo}</h3>
               <h1 class="detailView-text__title">${producto.nombre}</h1>
               <div class='detailView-size'>
               <p class="detailView-text__paragraph paragraph1">
               ${producto.madeOf}
               </p>
               
               ${hasMedidas(producto)}
               <ul>                 
                   ${liItems(producto)} 
               </ul>
               <p class="detailView-text__paragraph paragraph2">
               ${producto.descripcion}
               </p>
               </div>
               <div class="container__btn__detailView">
               <a href="https://api.whatsapp.com/send?phone=5491128376428&text=Hola%20El%20Malacara%20Handcrafted%F0%9F%90%B4!%20Quiero%20consultar%20por%20${producto.tipo}%20${producto.nombre}.  😄😄"  target="_blank"><button class="btn__detailView btn mt-3">CONSULTAR PRECIO</button></a>
               </div> 
            </div>
            
            <a href="https://api.whatsapp.com/send?phone=+5491128376428&text=Hola%20El%20Malacara%20Handcrafted%F0%9F%90%B4!%20Quiero%20consultar%20por%20${producto.tipo}%20${producto.nombre}.  😄😄"" target="_blank" class="btn-wsp SPA">
               <img src="./images/icons/icon-wp.png" alt="" class="img_wsp" />
            </a>

            
         </div>
      </div>
               `;
               const allImgs = document.querySelectorAll(".otra-img");
               
              


   for (let img of allImgs) {

      img.addEventListener("click", (e) => {
         let clickedImage = e.target

         changeImage(contenedorProductos, clickedImage, producto)
      })
   }




}

//data-id="prod-${producto.id}" id="card-${producto.id}"


export { renderDetailView, SPAelements }