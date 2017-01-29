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
  if (window.scrollY >= window.innerHeight - 100 && window.innerWidth < 768) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '100px';
    mobileMenu.style.position = 'fixed';
  } else if (window.scrollY <= window.innerHeight && window.innerWidth < 768) {
    flexNav.style.position = 'relative';
    flexNav.style.top = '0px';
    mobileMenu.style.position = 'relative';
  } else if (window.scrollY >= window.innerHeight - 100 && window.innerWidth >= 768) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '0px';
    flexNav.style.height = '100px';
    mobileMenu.style.position = 'fixed';
  } else if (window.scrollY <= window.innerHeight && window.innerWidth >= 768) {
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
    flexNavJQ.height(flexNavJQ.height() == 0 ? `100vh` : `${ hiddenMob }px`);
  } else {
    return;
  }
}

function hamburgerMenu2() {
  if (window.innerWidth < 768) {
    flexNavJQ.height(flexNavJQ.height() == 0 ? `100vh` : `${ hiddenMob }px`);
  } else {
    return;
  }
}

// zorgt voor een goede switch tussen mobiel en desktop
function resizeFix() {
  if (window.scrollY >= window.innerHeight - 100 && window.innerWidth >= 768) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '0px';
    flexNav.style.height = '100px';
    mobileMenu.style.position = 'fixed';
  } else if (window.scrollY <= window.innerHeight && window.innerWidth >= 768) {
    flexNav.style.position = 'relative';
    flexNav.style.top = '0px';
    flexNav.style.height = '100px';
    mobileMenu.style.position = 'relative';
  } else if (window.scrollY >= window.innerHeight - 100 && window.innerWidth < 768) {
    flexNav.style.position = 'fixed';
    flexNav.style.top = '100px';
    flexNav.style.height = '0px';
    mobileMenu.style.position = 'fixed';
  } else if (window.scrollY <= window.innerHeight && window.innerWidth < 768) {
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

// Ontdek ons button scroll
function ontdekOns() {
  const watIsPopup = $('#watispopupled');
  $('html, body').stop().animate({
    'scrollTop': watIsPopup.offset().top - 100
  }, 500, 'swing', function () {
    $(document).on("scroll", onScroll);
  });
}

// schaduw op popupled logo die muismove volgt
const landingPage = document.querySelector('.landing-page');
const popupledLogo = landingPage.querySelector('.logo-landing');
const distance = 30;

function popupledLogoShadow(e) {
  const { offsetWidth: breedte, offsetHeight: hoogte } = landingPage;
  let { offsetX: x, offsetY: y } = e;

  // zorgt dat als je over button of img gaat de offset niet 0 is
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xDistance = Math.round(x / breedte * distance - distance / 2);
  const yDistance = Math.round(y / hoogte * distance - distance / 2);

  popupledLogo.style.filter = `
  drop-shadow(${ xDistance }px ${ yDistance }px 4px rgba(0, 0, 0, 0.75))`;
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
});

// Function to generate a pdf 
const offerteForm = document.querySelector('.offerte');

function offerte(e) {
  // voorkom reload on submit
  e.preventDefault();

  // Variables die ik nodig heb in invoice

  // invoice bedrijf gegegevens
  let naamTarget = document.querySelector('#offnaam').value;
  let emailTarget = document.querySelector('#emailoff').value;
  let telTarget = document.querySelector('#teloff').value;
  let companyTarget = document.querySelector('#companyoff').value;

  // invoice datum gegegevens
  const month = new Array();
  month[0] = "januari";
  month[1] = "februari";
  month[2] = "maart";
  month[3] = "april";
  month[4] = "mei";
  month[5] = "juni";
  month[6] = "juli";
  month[7] = "augustus";
  month[8] = "september";
  month[9] = "oktober";
  month[10] = "november";
  month[11] = "december";
  let currentDate = new Date();
  let currentMonth = month[currentDate.getMonth()];
  let currentDay = currentDate.getDate();
  let currentYear = currentDate.getFullYear();
  let currentOffDate = currentDay + ' ' + currentMonth + ' ' + currentYear;

  // invoice prijs berekenen
  let waardeTarget = document.querySelector('#locatieoff').value;
  let startDatumTarget = document.querySelector('#start-date').value;
  let startDatumTarget2 = startDatumTarget.split(',');
  let startDatumTarget3 = parseFloat(startDatumTarget2[1]);
  let endDatumTarget = document.querySelector('#end-date').value;
  let endDatumTarget2 = endDatumTarget.split(',');
  let endDatumTarget3 = parseFloat(endDatumTarget2[1]);

  console.log(startDatumTarget2);
  let startDatumTargetW = parseFloat(startDatumTarget2[0].replace("Week ", ""));
  let endDatumTargetW = parseFloat(endDatumTarget2[0].replace("Week ", ""));

  console.log(startDatumTarget3, startDatumTargetW);
  console.log(endDatumTarget3, endDatumTargetW);

  let hiredYearsWeeks = (endDatumTarget3 - startDatumTarget3) * 52;

  let weeksHired = endDatumTargetW - startDatumTargetW + hiredYearsWeeks;
  if (weeksHired <= 0) {
    window.alert('Je moet minimaal 1 week een scherm huren');
    return false;
  }

  // random 'offerte number' generator
  let offerteNummer = Math.round(Math.random() * 2323039214);
  console.log(offerteNummer);

  // calculate price
  let totalWeeksPrice1 = weeksHired * waardeTarget;
  let totalWeeksPrice = +(Math.round(totalWeeksPrice1 + "e+2") + "e-2");

  // Taxes
  let totalTax1 = totalWeeksPrice / 100 * 21;
  let totalTax = +(Math.round(totalTax1 + "e+2") + "e-2");

  // Total price inclusief Taxes
  let totalPriceTax1 = totalWeeksPrice + totalTax;
  let totalPriceTax = +(Math.round(totalPriceTax1 + "e+2") + "e-2");

  // location name
  console.log(waardeTarget);
  let locationName = 0;
  if (waardeTarget == 99.99) {
    locationName = 'Korte Lijnbaan';
  } else if (waardeTarget == 109.99) {
    locationName = 'Stadhuisplein';
  } else if (waardeTarget == 89.99) {
    locationName = 'het Weena';
  }

  let locationNameOff = locationName;

  // functie om de pdf te maken
  var doc = new jsPDF('a4');

  doc.setFontSize(46);
  doc.setTextColor(229, 39, 45);
  doc.text('popupled', 15, 30);

  doc.setFontSize(15);
  doc.setTextColor(54, 174, 189);
  doc.text('offerte', 15, 60);
  doc.setTextColor(229, 39, 45);
  doc.setLineWidth(0.1);
  doc.setDrawColor(210);
  doc.line(10, 62, 200, 62); // horizontal line
  doc.line(10, 85, 200, 85); // horizontal line
  doc.line(10, 95, 200, 95); // horizontal line
  doc.line(10, 110, 200, 109); // horizontal line
  doc.line(10, 134, 200, 134); // horizontal line

  doc.setFontSize(12);
  doc.setTextColor(200);
  doc.text('tel: 06-10520429\remail: info@popupled.nl\radress: Meikeverstraat 9 A02 rotterdam 3061VH\rKVK-nummer: 61836680', 110, 20);
  doc.setTextColor(120);
  doc.setFontType('italic');
  doc.text(`${ currentOffDate }`, 155, 60);

  doc.setTextColor(120);
  doc.setFontType('normal');
  doc.text(`naam: \remail: \rtel: \rbedrijf: `, 18, 67);
  doc.text(`${ naamTarget }\r${ emailTarget }\r${ telTarget }\r${ companyTarget }`, 52, 67);

  doc.setFontType('bold');
  doc.setTextColor(54, 174, 189);
  doc.text(`locatie`, 15, 92);
  doc.text(`aantal weken`, 70, 92);
  doc.text(`week prijs`, 130, 92);
  doc.text(`totaal`, 180, 92);

  doc.setFontType('normal');
  doc.setTextColor(20);
  doc.text(`${ locationName }`, 16, 103);
  doc.text(`${ weeksHired }`, 71, 103);
  doc.text(`€ ${ waardeTarget }`, 131, 103);
  doc.text(`€ ${ totalWeeksPrice }`, 181, 103);

  doc.setFillColor(0);
  doc.text(`subtotaal\rbtw %\rbtw\r\r\rtotale prijs`, 131, 115);
  doc.text(`€\r\r€\r\r\r€`, 181, 115);
  doc.text(`${ totalWeeksPrice }\r21\r${ totalTax }\r\r\r${ totalPriceTax }`, 185, 115);

  doc.setFontType('bold');
  doc.setTextColor(54, 174, 189);
  doc.text(`offerte ID: #${ offerteNummer }`, 15, 140);

  doc.setTextColor(40);
  doc.text(`*** disclaimer ***`, 85, 190);
  doc.setFontType('normal');
  doc.setTextColor(30);
  doc.text(`Deze offerte is in geen enkele manier bindend en kan door popupled bv.\rDeze offerte is gegenereerd op ${ currentOffDate }\rVoor het bespreken van prijzen of meer informatie contact info@popupled.nl of bel ons 06-10520429\rPrijzen kunnen veranderen op elk moment en de hier genoemde prijzen zien niet bindend.`, 15, 200);

  doc.setProperties({
    title: 'offerte popupled',
    subject: 'Offerte voor Popupled',
    author: 'popupled',
    keywords: 'offerte, popupled, huren, ledscherm'
  });

  doc.output('dataurlnewwindow');
}

// Function om tussen contact en offerte te switchen
const contactFormButton = document.querySelector('button[data-button="contact"]');
const offerteFormButton = document.querySelector('button[data-button="offerte"]');
const offerteFormulier = $('.offerteForm');
const contactFormulier = $('.contactForm');

function contactFadeIn() {
  offerteFormulier.fadeOut(500);
  offerteFormButton.style.textDecoration = 'none';
  setTimeout(function () {
    contactFormulier.fadeIn(500);
    contactFormButton.style.textDecoration = 'underline';
  }, 450);
}

function offerteFadeIn() {
  contactFormulier.fadeOut(500);
  contactFormButton.style.textDecoration = 'none';
  setTimeout(function () {
    offerteFormulier.fadeIn(500);
    offerteFormButton.style.textDecoration = 'underline';
  }, 450);
}

// Slide animations
var controller = new ScrollMagic.Controller({ globalSceneOptions: { duration: 300 } });

// build scenes
new ScrollMagic.Scene({ triggerElement: "#watispopupled" }).setTween('.slide-in', 0.1, {
  scale: 1.01,
  opacity: 1
}).addIndicators({ name: 'lamp animation' }) // add indicators (requires plugin)
.addTo(controller);
new ScrollMagic.Scene({ triggerElement: "#watispopupled" }).setTween('.slide-in2', 0.1, {
  scale: 1.01,
  opacity: 1
}) // add class toggle
.addIndicators({ name: 'led screen animation' }) // add indicators (requires plugin)
.addTo(controller);

//Event listeners
document.addEventListener('scroll', debounce(onScroll, 20));
document.addEventListener('scroll', debounce(scrollfixnav, 20));
mobileMenu.addEventListener('click', hamburgerMenu);
$(window).resize(resizeFix);
ontdekOnsBut.addEventListener('click', ontdekOns);
landingPage.addEventListener('mousemove', debounce(popupledLogoShadow, 12));
offerteForm.addEventListener('submit', offerte);
contactFormButton.addEventListener('click', contactFadeIn);
offerteFormButton.addEventListener('click', offerteFadeIn);
//# sourceMappingURL=script.js.map
