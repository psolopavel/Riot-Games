const swiper = new Swiper('.main__swipper', {
   loop: true,
   spaceBetween: 50,
   parallax: true,
   centeredSlides: true,
   touchAngle: 30,
   touchRatio: 2,
   grabCursor: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   breakpoints: {
      1400: {
         slidesPerView: 2,
      },
      2000: {
         slidesPerView: 3,
         centeredSlides: false,
      },
      2900: {
         slidesPerView: 4,
         centeredSlides: false,
      }
   },
   speed: 1200,
   navigation: {
      nextEl: '.swipper-pagination',
   },
   on: {
      //   init: function (swiper){
      //     const AllSlider = document.querySelector('.fraction-controll__all')
      //     AllSlider.innerHTML = swiper.slides.length - 2 < 10 ? `0${swiper.slides.length - 2}` : swiper.slides.length - 2;
      //   },
      //   slideChange: function (swiper){
      //     const CurentSlider = document.querySelector('.fraction-controll__current')
      //     CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
      //   },
   },
});