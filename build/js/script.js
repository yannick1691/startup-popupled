$(document).ready(function () {
  const wIPopup = document.querySelector('#watispopupled');
  scrollfixnav();

  //smoothscroll
  $('.flex-nav a[href^="#"]').on('click', function (e) {
    // kijkt naar click op een nav element
    e.preventDefault(); // stop browser van het toevoegen van # aan url
    $(document).off("scroll"); // stop scroll door gebruiker
    $(this).addClass('active-link'); // voegt .active-link toe aan link

    //volgende code is voor het scrollen naar het element
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
      $(document).on("scroll", onScroll);
    });
  });

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

  // Onze klanten slide show
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
function debounce(func, wait = 20, immediate = true) {
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

// Functie om .active-link toe te voegen aan de link waar die nu is
function onScroll(e) {
  var scrollPos = $(document).scrollTop();
  $('.flex-nav a[href^="#"]').each(function () {
    console.log('hi');
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top - 100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('.flex-nav a').removeClass("active-link");
      currLink.addClass("active-link");
    } else {
      currLink.removeClass("active-link");
    }
  });
}

// Make nav fixed after the landing page
function scrollfixnav() {
  if (window.scrollY >= window.innerHeight - 100 && window.innerWidth <= 991) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '100px';
    mobileMenu.style.position = 'fixed';
  } else if (window.scrollY <= window.innerHeight && window.innerWidth <= 991) {
    flexNav.style.position = 'relative';
    flexNav.style.top = '0px';
    mobileMenu.style.position = 'relative';
  } else if (window.scrollY >= window.innerHeight - 100 && window.innerWidth >= 992) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '0px';
    flexNav.style.height = '100px';
    mobileMenu.style.position = 'fixed';
  } else if (window.scrollY <= window.innerHeight && window.innerWidth >= 992) {
    flexNav.style.position = 'relative';
    flexNav.style.top = '0px';
    flexNav.style.height = '100px';
    mobileMenu.style.position = 'relative';
  }
}

// Hamburger menu funtie
function hamburgerMenu(e) {
  e.preventDefault();
  if (window.innerWidth <= 991) {
    flexNavJQ.height(flexNavJQ.height() == 0 ? `100vh` : `${ hiddenMob }px`);
  } else {
    return;
  }
}

function hamburgerMenu2() {
  if (window.innerWidth <= 991) {
    flexNavJQ.height(flexNavJQ.height() == 0 ? `100vh` : `${ hiddenMob }px`);
  } else {
    return;
  }
}

// zorgt voor een goede switch tussen mobiel en desktop
function resizeFix() {
  if (window.scrollY >= window.innerHeight - 100 && window.innerWidth >= 992) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '0px';
    flexNav.style.height = '100px';
    mobileMenu.style.position = 'fixed';
  } else if (window.scrollY <= window.innerHeight && window.innerWidth >= 992) {
    flexNav.style.position = 'relative';
    flexNav.style.top = '0px';
    flexNav.style.height = '100px';
    mobileMenu.style.position = 'relative';
  } else if (window.scrollY >= window.innerHeight - 100 && window.innerWidth <= 991) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '100px';
    flexNav.style.height = '0px';
    mobileMenu.style.position = 'fixed';
  } else if (window.scrollY <= window.innerHeight && window.innerWidth <= 991) {
    flexNav.style.position = 'relative';
    flexNav.style.top = '0px';
    flexNav.style.height = '0px';
    mobileMenu.style.position = 'relative';
  }
}

// zorgt dat menu inklapt op mobiel als er wordt geklikt
flexNavItems.forEach(function (link) {
  link.addEventListener('click', hamburgerMenu2);
});

function ontdekOns() {
  const watIsPopup = $('#watispopupled');
  $('html, body').stop().animate({
    'scrollTop': watIsPopup.offset().top - 100
  }, 500, 'swing', function () {
    $(document).on("scroll", onScroll);
  });
}

document.addEventListener('scroll', debounce(onScroll, 10));
document.addEventListener('scroll', debounce(scrollfixnav, 10));
mobileMenu.addEventListener('click', hamburgerMenu);
$(window).resize(resizeFix);
ontdekOnsBut.addEventListener('click', ontdekOns);
//# sourceMappingURL=script.js.map
