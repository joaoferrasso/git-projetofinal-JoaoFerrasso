// =========================
// MENU MOBILE
// =========================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Fecha o menu ao clicar em um link

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// =========================
// EFEITO DE DIGITAÇÃO
// =========================

const cursor = document.querySelector(".cursor");

let visible = true;

setInterval(() => {

    visible = !visible;

    cursor.style.opacity = visible ? "1" : "0";

}, 500);


// =========================
// ANIMAÇÃO AO APARECER
// =========================

const cards = document.querySelectorAll(
    ".goal-card, .info-card, .code-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(card);

});
