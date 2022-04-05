const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// display Mobile Menu
const mobileMenu = () => {
   menu.classList.toggle("is-active");
   menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

const highlightMenu = () => {
   const elem = document.querySelector(".highlight .nav");
   const detalles = document.querySelector("#detalles-home");
   const productos = document.querySelector("#producto-home");
   const contacto = document.querySelector("#contacto-home");
   let scrollPos = window.scrollY;
   let pageHeight = document.documentElement.scrollHeight // CALCULAMOS EL ALTO DE LA PAGINA COMPLETA PARA CALCULAR EL SCROLL
   /* Obtener la posicion del scroll */

   // class del menu
   if (window.innerWidth > 960 && scrollPos < (pageHeight * 0.2)) { // CALCULAMOS EL PORCENTAJE DE LA PAGINA (20%) EN QUE SE ENCUENTRA EL SCROLL PARA QUE SE ADAPTE A DISTINTOS MONITORES
      detalles.classList.add("highlight");
      productos.classList.remove("highlight");
      return;
   } else if (window.innerWidth > 960 && scrollPos < (pageHeight * 0.7)) { // SCROLL MENOR A 70% Y MAYOR A 20%
      productos.classList.add("highlight");
      detalles.classList.remove("highlight");
      contacto.classList.remove("highlight");
      return;
   } else if (window.innerWidth > 960 && scrollPos < (pageHeight * 1)) { //SCROLL MENOR A 100% Y MAYOR A 70%
      contacto.classList.add("highlight");
      productos.classList.remove("highlight");
      return;
   }

   if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
      elem.classList.remove("highlight");
   }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

const hideMobileMenu = () => {
   const menuBars = document.querySelector(".is-active");
   if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle("is-active");
      menuLinks.classList.remove("active");
   } 
};

menuLinks.addEventListener("click", hideMobileMenu);
