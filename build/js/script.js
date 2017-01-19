$(document).ready(function () {
  const wIPopup = document.querySelector('#watispopupled');
  scrollfixnav();
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
      slideShadows: false
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
      slideShadows: false
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

// functie om client lagg te verkomen
function debounce(func, wait = 10, immediate = true) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

function onScroll(e) {
  var scrollPos = $(document).scrollTop();
  $('.flex-nav a[href^="#"]').each(function () {
    console.log('hi');
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top - 100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.flex-nav a').removeClass("active");
      currLink.addClass("active-link");
    } else {
      currLink.removeClass("active-link");
    }
  });
}

// Make nav fixed after the landing page
function scrollfixnav() {
  if (window.scrollY >= window.innerHeight - 100) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '100px';
    mobileMenu.style.position = 'fixed';
  } else if (window.scrollY <= window.innerHeight) {
    flexNav.style.position = 'relative';
    flexNav.style.top = '0px';
    mobileMenu.style.position = 'relative';
  }
}

function hamburgerMenu(e) {
  e.preventDefault();

  flexNavJQ.height(flexNavJQ.height() == 0 ? `${ heightNav }px` : `${ hiddenMob }px`);
}

document.addEventListener('scroll', debounce(onScroll));
document.addEventListener('scroll', debounce(scrollfixnav));
mobileMenu.addEventListener('click', hamburgerMenu);
//# sourceMappingURL=script.js.map
