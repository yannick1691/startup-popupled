$(document).ready(function () {
  const wIPopup = document.querySelector('#watispopupled');
  //initialize swiper when document ready  
  var mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    initialSlide: 1,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '2',
    spaceBetween: 10,
    loop: true,
    loopAdditionalSlides: 1,
    speed: 400,
    coverflow: {
      rotate: 60,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
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
          spaceBetween: 20
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
  });
  var onzeKlanten = new Swiper('.onzeKlanten-container', {
    effect: 'coverflow',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: '3',
    spaceBetween: 0,
    autoplay: 2500,
    autoplayDisableOnInteraction: false,
    loop: true,
    loopAdditionalSlides: 1,
    speed: 500,
    coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : false,
    },
    breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 60
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 60
        },
        // when window width is <= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 60
        }
      }
  });
  onzeKlanten.disableTouchControl();
});
