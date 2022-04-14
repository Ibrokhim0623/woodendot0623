$(".carousel").owlCarousel({
    margin: 9,
    loop: true,
    autoplay: false,
    responsive: {
        0:{
            items: 1,
            nav: false,
            dots: 7,
        },
        768:{
            items: 2,
            nav: false,
            dots: 7,
        },
        1000:{
            items: 3,
            nav: false,
            dots: 7,
        }
    }
});

$(".comment").owlCarousel({
    dots: true,
    loop: true,
    autoplay: false,
    items: 1
});

const navigation = document.querySelector(".navigation");
window.addEventListener("scroll", () => {
    navigation.classList.toggle("nav", scrollY > 0);
});

const drop = document.querySelector(".top");
window.addEventListener("scroll", () => {
    drop.classList.toggle("drop", scrollY > 120);
});

const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");
menu.addEventListener("click", () => {
    nav.classList.toggle("show");
});

const close = document.querySelector("#close");
close.addEventListener("click", () => {
    nav.classList.remove("show");
});

function removeShow(){
    nav.classList.remove("show");
}
const li = document.querySelectorAll("li");
li.forEach(n => n.addEventListener("click", removeShow));

setTimeout(() => {
    const loading = document.querySelector(".loading");
    loading.style.display = "none"
}, 3000);

