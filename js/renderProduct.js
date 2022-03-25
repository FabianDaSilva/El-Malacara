const contenedorProductos = $("#contenedorProductos")[0];
const URLproductos = "../js/data/productos.json";
//console.log(contenedorProductos);
//Llamo el Json
let productos = "";
$.getJSON(URLproductos, function (arrayObjetos) {
   productos = arrayObjetos;
   renderizarProductos(arrayObjetos, contenedorProductos);
   //console.log(productos);
});
//Renderizo los productos
function renderizarProductos(productos, clear) {
   clear.innerHTML = "";
   for (let producto of productos) {
      clear.innerHTML += `
      <div class="card col-md-6 col-lg-4 col-xl-3 p-2 m-3" style="width: 18rem">
      <div class="position-relative overflow-hidden">
      <img 
         src="${producto.imagen}"
         alt="productos04"
         border="0" class="w-100"/>
         </div>
      <div class="card-body text-center">
         <h5 class="card-title">${producto.nombre}</h5>
         <p class="card-text">
            ${producto.precio}
         </p>
      </div>
   </div>
      `;
   }
}
renderizarProductos();

