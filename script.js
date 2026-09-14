const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
});
/* ==============================
   Opening Animation
============================== */

const opening = document.querySelector(".opening");

if (opening) {

    setTimeout(() => {
        opening.classList.add("opening-hidden");
    }, 4900);

}
