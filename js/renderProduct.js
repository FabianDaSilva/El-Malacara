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
      <div class="card col-md-6 col-lg-4 col-xl-3 p-2 m-2" id="card">
      <div class="special-img position-relative overflow-hidden">
          <img src="${producto.imagen}" class="w-100"></a>
      </div>
      <div class="text-center">      
          <p class="text-capitalize mt-3 mb-1">${producto.nombre}</p>
          <span class="fw-bold d-block">${producto.precio}</span>
         
      </div>
  </div>
      `;
   }
}
renderizarProductos();
