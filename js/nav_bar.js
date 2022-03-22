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
   /* Obtener la posicion del scroll */
  //console.log(scrollPos);

   // class del menu
   if (window.innerWidth > 960 && scrollPos < 1800) {
      detalles.classList.add("highlight");
      productos.classList.remove("highlight");
      return;
   } else if (window.innerWidth > 960 && scrollPos < 2000) {
      productos.classList.add("highlight");
      detalles.classList.remove("highlight");
      contacto.classList.remove("highlight");
      return;
   } else if (window.innerWidth > 960 && scrollPos < 4000) {
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
