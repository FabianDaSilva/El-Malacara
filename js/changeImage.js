import { hasMedidas, liItems } from "./data/medidasList.js"


function changeImage(contenedorProductos, clickedImage, producto) {
   const clickedImageSrc = clickedImage.src
   const mainImg = document.getElementById("mainImg").src /*.src="../newimg/abc.jpg";*/
   const otherImg1 = document.getElementById("Img1").src
   const otherImg2 = document.getElementById("Img2").src
   const otherImg3 = document.getElementById("Img3").src

   // Creamos un array con las TODAS imagenes
   const imgList = [mainImg, otherImg1, otherImg2, otherImg3]
   // Creamos un array filtrado que no contenga la imagen clickeada que se va a mostrar en grande para reacomodar las iamgenes
   // asi las ponemos despues en las miniaturas
   const filteredList = imgList.filter((img) => {
      return img !== clickedImageSrc
   })


   contenedorProductos.innerHTML = "";

   contenedorProductos.innerHTML += `
      <div class="detailView-container">
         <div class="detailView-container__images">
            <div class="images__main-img">
               <img class="img-${producto.nombre}-${producto.id}" id="mainImg" src="${clickedImageSrc}" alt="" />
            </div>
            <div class="${producto.nombre}-${producto.id} otras-img">
            
               <a href='#'><img class="otra-img num1" id="Img1" src="${filteredList[0]}" alt="" /></a>
               <a href='#'><img class="otra-img num2" id="Img2" src="${filteredList[1]}" alt="" /></a>
               <a href='#'><img class="otra-img num3" id="Img3" src="${filteredList[2]}" alt="" /></a>
            </div>
         </div>
         <div class="detailView-container__details">
            <div class="detailView-text">
               <h3 class="detailView-text__pretitle">${producto.tipo}</h3>
               <h1 class="detailView-text__title">${producto.nombre}</h1>
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

export { changeImage }



