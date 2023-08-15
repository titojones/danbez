const menuToggler = document.querySelector(".menutoogler");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".--mobile-wrapper");

const toggleMenu = () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("active");
};

menuToggler.addEventListener("click", toggleMenu);
