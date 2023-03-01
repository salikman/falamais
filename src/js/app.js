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

$(document).on('click','.js-star-rating .star span' ,function () {
    var $this = $(this);

    var $topParent = $this.closest('.js-star-rating');
    var $parent = $this.closest('.star');
    var $input = $($topParent.data('for'));


    var $starElements = $parent.find('span');
    $starElements.removeClass('checked');
    var index = $($starElements).index($this)+1;
    $starElements.slice(0,index).addClass('checked');

    $input.val(index);
});