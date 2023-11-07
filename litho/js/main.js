$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-1',
      prevEl: '.swiper-button-prev-1',
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
  },
  });

  var swiper = new Swiper(".mySwiper-4", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination-4",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-4',
      prevEl: '.swiper-button-prev-4',
    },
  });

 
});