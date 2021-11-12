// Swiper: Slider
var kaSwiper1 = new Swiper ('#ka-swiper1', {
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween : 30,
    // slidesPerGroup: 1,
    autoHeight: true,
    breakpoints :{
      768:{
        spaceBetweenSlides: 10
      }
    }
  });

