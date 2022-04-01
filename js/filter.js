import { productos, renderizarProductos } from "../js/renderProduct.js"

//Filtros de categorias
$("#filtroTodos").click((e) => {
   e.preventDefault();
   renderizarProductos(productos, contenedorProductos);
});

$("#filtroCuero").click((e) => {
   e.preventDefault();
   const filterCuero = productos.filter((e) => e.categoria.includes("Cuero"));
   renderizarProductos(filterCuero, contenedorProductos);
});

$("#filtroMadera").click((e) => {
   e.preventDefault();
   const filterMadera = productos.filter((e) => e.categoria.includes("Madera"));
   renderizarProductos(filterMadera, contenedorProductos);
});

$("#filtroMetal").click((e) => {
   e.preventDefault();
   const filterMetal = productos.filter((e) => e.categoria.includes("Metal"));
   renderizarProductos(filterMetal, contenedorProductos);
});
