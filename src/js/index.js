const menuToggler = document.querySelector(".menutoogler");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".--mobile-wrapper");
const menuLinks = document.querySelectorAll(".--web-menu a");
let activeLink = null;
const toggleMenu = () => {
  hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("active");
};

document.getElementById("year").innerHTML = new Date().getFullYear();

menuToggler.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    if (activeLink) {
      activeLink.classList.remove("active");
    }

    link.classList.add("active");
    activeLink = link;
  });
});
