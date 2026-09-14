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
/* ==============================
   Mission Scroll Animation
============================== */

const missionAnimations =
    document.querySelectorAll(".mission-animation");

const missionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }

        });

    },
    {
        threshold: 0.2
    }
);


missionAnimations.forEach((element) => {
    missionObserver.observe(element);
});
