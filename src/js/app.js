import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();

//
var swiper = new Swiper(".block-reviews-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 5,
            centeredSlides: true,
        },
        992: {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 20,
        },
    },
});

//
new Accordion('.accordion-container');