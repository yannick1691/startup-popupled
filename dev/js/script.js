$(document).ready(function () {
  const wIPopup = document.querySelector('#watispopupled');
  scrollfixnav();

  //smoothscroll
    $('.flex-nav a[href^="#"]').on('click', function (e) { // kijkt naar click op een nav element
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
});



// functie om client lagg te verkomen
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
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
function onScroll(e){
    var scrollPos = $(document).scrollTop();
    $('.flex-nav a[href^="#"]').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top-100 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.flex-nav a').removeClass("active-link");
            currLink.addClass("active-link");
        }
        else{
            currLink.removeClass("active-link");
        }
    });
}

// Make nav fixed after the landing page
function scrollfixnav() {
  if (window.scrollY >= window.innerHeight - 100 && window.innerWidth < 768) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '100px';
    mobileMenu.style.position = 'fixed';
  } else if(window.scrollY <= window.innerHeight && window.innerWidth < 768) {
    flexNav.style.position = 'relative';
    flexNav.style.top = '0px';
    mobileMenu.style.position = 'relative';
  } else if (window.scrollY >= window.innerHeight - 100 && window.innerWidth >= 768) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '0px';
    flexNav.style.height = '100px';
    mobileMenu.style.position = 'fixed';
  } else if(window.scrollY <= window.innerHeight && window.innerWidth >= 768) {
    flexNav.style.position = 'relative';
    flexNav.style.top = '0px';
    flexNav.style.height = '100px';
    mobileMenu.style.position = 'relative';
  }
}

// Hamburger menu funtie
function hamburgerMenu(e) {
  e.preventDefault();
  if (window.innerWidth < 768) {
    flexNavJQ.height(flexNavJQ.height() == 0 ? `100vh` : `${hiddenMob}px`);
  } else {
    return;
  }
}

function hamburgerMenu2() {
  if (window.innerWidth < 768) {
    flexNavJQ.height(flexNavJQ.height() == 0 ? `100vh` : `${hiddenMob}px`);
  } else {
    return;
  }
}


// zorgt voor een goede switch tussen mobiel en desktop
function resizeFix() {
  if (window.scrollY >= window.innerHeight - 100 && window.innerWidth >= 768) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '0px'
    flexNav.style.height = '100px'
    mobileMenu.style.position = 'fixed';
  } else if(window.scrollY <= window.innerHeight && window.innerWidth >= 768) {
    flexNav.style.position = 'relative';
    flexNav.style.top = '0px';
    flexNav.style.height = '100px'
    mobileMenu.style.position = 'relative';
  }else if (window.scrollY >= window.innerHeight - 100 && window.innerWidth < 768) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '100px';
    flexNav.style.height = '0px';
    mobileMenu.style.position = 'fixed';
  } else if(window.scrollY <= window.innerHeight && window.innerWidth < 768) {
    flexNav.style.position = 'relative';
    flexNav.style.top = '0px';
    flexNav.style.height = '0px';
    mobileMenu.style.position = 'relative';
  }
}


// zorgt dat menu inklapt op mobiel als er wordt geklikt
flexNavItems.forEach(function (link) {
  link.addEventListener('click', hamburgerMenu2);
})


// Ontdek ons button scroll
function ontdekOns() {
  const watIsPopup = $('#watispopupled');
  $('html, body').stop().animate({
    'scrollTop': watIsPopup.offset().top-100
  }, 500, 'swing', function () {
    $(document).on("scroll", onScroll);
  });
}

// schaduw op popupled logo die muismove volgt
const landingPage = document.querySelector('.landing-page');
const popupledLogo = landingPage.querySelector('.logo-landing');
const distance = 25;

function popupledLogoShadow(e) {
  const { offsetWidth: breedte, offsetHeight: hoogte } = landingPage;
  let { offsetX: x, offsetY: y } = e;
  
  // zorgt dat als je over button of img gaat de offset niet 0 is
  if(this !== e.target) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

  const xDistance = Math.round((x / breedte * distance) - (distance / 2));
  const yDistance = Math.round((y / hoogte * distance) - (distance / 2));
  
  popupledLogo.style.filter = `
  drop-shadow(${xDistance}px ${yDistance}px 4px rgba(0, 0, 0, 0.75))`;
}


// Functie voor pop up locaties 
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
let popupid1 = $('#popup1');
let popupid2 = $('#popup2');
let popupid3 = $('#popup3');
const popupId1js = document.querySelector('#popup1');
const popupId2js = document.querySelector('#popup2');
const popupId3js = document.querySelector('#popup3');
const closeid1 = document.querySelector('#close1');
const closeid2 = document.querySelector('#close2');
const closeid3 = document.querySelector('#close3');

function popUpCustom(name, namejs, dura) {
  name.animate({ opacity: '1', left: '0px' }, dura);
  namejs.style.transform = 'scale(1)';
  
}

function popUpCustomOut(name, namejs, dura) {
  namejs.style.transform = 'scale(0)';
  name.animate({ opacity: '0', left: '-1px' }, dura);
}

// Event listener voor de popups
image1.addEventListener('click', function () {
  popUpCustom(popupid1, popupId1js, 100);
});
image2.addEventListener('click', function () {
  popUpCustom(popupid2, popupId2js, 100);
});
image3.addEventListener('click', function () {
  popUpCustom(popupid3, popupId3js, 100);
});

close1.addEventListener('click', function () {
  popUpCustomOut(popupid1, popupId1js, 100);
});

close2.addEventListener('click', function () {
  popUpCustomOut(popupid2, popupId2js, 100);
});

close3.addEventListener('click', function () {
  popUpCustomOut(popupid3, popupId3js, 100);
})

// Icon 3d rotation hover mouserelative
const waaromOnsDiv = document.querySelector('#waarom-ons');
const waaromOnsIcon = waaromOnsDiv.querySelector('.waaromOnsIcon');
const rotDistance = 70;

function waaromOnsRotation(e) {
  const { offsetWidth: breedteW, offsetHeight: hoogteW } = waaromOnsDiv;
  let { offsetX: xW, offsetY: yW } = e;
  
  // zorgt dat als je over button of img gaat de offset niet 0 is
  if(this !== e.target) {
      xW = xW + e.target.offsetLeft;
      yW = yW + e.target.offsetTop;
    }

  const xWDistance = Math.round((xW / breedteW * rotDistance) - (rotDistance / 2));
  waaromOnsIcon.style.transform = `rotateY(${xWDistance}deg)`;
}


//Event listeners
document.addEventListener('scroll', debounce(onScroll, 10));
document.addEventListener('scroll', debounce(scrollfixnav, 10));
mobileMenu.addEventListener('click', hamburgerMenu);
$(window).resize(resizeFix);
ontdekOnsBut.addEventListener('click', ontdekOns);
landingPage.addEventListener('mousemove', popupledLogoShadow);
waaromOnsDiv.addEventListener('mousemove', debounce(waaromOnsRotation, 3));