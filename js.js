var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grabCursor: true,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992:{
      slidesPerView: 5,
    }
  },
});

