$(document).ready(function () {
  const wIPopup = document.querySelector('#watispopupled');
  //initialize swiper when document ready  
  var mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '2',
    spaceBetween: 10,
    autoplay: 5000,
    speed: 400,
    coverflow: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    breakpoints: {
      // when window width is <= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is <= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is <= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  });
});
//# sourceMappingURL=script.js.map
