//Filtros de categorias
$("#filtroTodos").click((e) => {
   e.preventDefault();
   renderizarProductos(productos, contenedorProductos);
});

$("#filtroCuero").click((e) => {
   e.preventDefault();
   const filterCuero = productos.filter((e) => e.categoria == "Cuero");
   renderizarProductos(filterCuero, contenedorProductos);
});

$("#filtroMadera").click((e) => {
   e.preventDefault();
   const filterCuero = productos.filter((e) => e.categoria == "Madera");
   renderizarProductos(filterCuero, contenedorProductos);
});
