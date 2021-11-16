var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
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
  breakpoints: {
    1200:{
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 5,
    }
  },
});