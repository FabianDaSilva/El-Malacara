import { productos, renderizarProductos } from "../js/renderProduct.js"

//Filtros de categorias
$("#filtroTodos").click((e) => {
   e.preventDefault();
   renderizarProductos(productos, contenedorProductos);
});


$("#filtroMadera").click((e) => {
   e.preventDefault();
   const filterMadera = productos.filter((e) => e.categoria.includes("Madera"));
   renderizarProductos(filterMadera, contenedorProductos);
});

$("#filtroHierro").click((e) => {
   e.preventDefault();
   const filterHierro = productos.filter((e) => e.categoria.includes("Hierro"));
   renderizarProductos(filterHierro, contenedorProductos);
});
