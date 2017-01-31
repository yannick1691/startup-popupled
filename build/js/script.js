$(document).ready(function () {
  const contactKnoperino = document.querySelector('.contact-knop');
  contactKnoperino.style.textDecoration = 'underline';
  const wIPopup = document.querySelector('#watispopupled');
  //smoothscroll
  $('.flex-nav a[href^="#"]').on('click', function (e) {
    // kijkt naar click op een nav element
    e.preventDefault(); // stop browser van het toevoegen van # aan url
    $(document).off("scroll"); // stop scroll door gebruiker

    //volgende code is voor het scrollen naar het element
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top + 10
    }, 500, 'swing');
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

// Start menu Functions
// Hamburger menu funtie
function hamburgerMenu(e) {
  e.preventDefault();
  if (window.innerWidth < 768) {
    flexNavJQ.slideToggle(600);
    $('#hamburger__img').slideToggle(600);
    $('#flex-nav-icon__span1').toggleClass('flex-nav-icon__span1--open');
    $('#flex-nav-icon__span2').toggleClass('flex-nav-icon__span2--open');
    $('#flex-nav-icon__span3').toggleClass('flex-nav-icon__span3--open');
    $('#flex-nav-icon__span4').toggleClass('flex-nav-icon__span4--open');
  } else {
    return;
  }
}

function hamburgerMenu2() {
  if (window.innerWidth < 768) {
    flexNavJQ.slideToggle(600);
    $('#hamburger__img').slideToggle(600);
    $('#flex-nav-icon__span1').toggleClass('flex-nav-icon__span1--open');
    $('#flex-nav-icon__span2').toggleClass('flex-nav-icon__span2--open');
    $('#flex-nav-icon__span3').toggleClass('flex-nav-icon__span3--open');
    $('#flex-nav-icon__span4').toggleClass('flex-nav-icon__span4--open');
  } else {
    return;
  }
}

// zorgt dat menu inklapt op mobiel als er wordt geklikt
flexNavItems.forEach(function (link) {
  link.addEventListener('click', function () {
    if (window.innerWidth < 768) {
      flexNavJQ.slideToggle(600);
      $('#hamburger__img').slideToggle(600);
      $('#flex-nav-icon__span1').toggleClass('flex-nav-icon__span1--open');
      $('#flex-nav-icon__span2').toggleClass('flex-nav-icon__span2--open');
      $('#flex-nav-icon__span3').toggleClass('flex-nav-icon__span3--open');
      $('#flex-nav-icon__span4').toggleClass('flex-nav-icon__span4--open');
    }
  });
});

function resizeFix() {
  if (window.innerWidth < 768) {
    flexNavUl.style.display = 'none';
    $('#flex-nav-icon__span1').removeClass('flex-nav-icon__span1--open');
    $('#flex-nav-icon__span2').removeClass('flex-nav-icon__span2--open');
    $('#flex-nav-icon__span3').removeClass('flex-nav-icon__span3--open');
    $('#flex-nav-icon__span4').removeClass('flex-nav-icon__span4--open');
  } else if (window.innerWidth >= 768) {
    flexNavUl.style.display = 'flex';
    $('#hamburger__img').css({ display: '' });
  }
}

// Ontdek ons button scroll
function ontdekOns() {
  const watIsPopup = $('#watispopupled');
  $('html, body').stop().animate({
    'scrollTop': watIsPopup.offset().top - 100
  }, 500, 'swing');
}

// Functie voor pop up locaties 
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
const contactFormButton = document.querySelector('.contact-knop');
const offerteFormButton = document.querySelector('.offerte-knop');
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

// Formulier contact submit Event
const contactFormSubmit = document.querySelector('#form-contact');
const contactSucces = $('#form-contact__verzonden_succes');
const bevestigingsBericht = document.querySelector('.form-contact-succes__p_bericht');
const bevestigingUwBericht = document.querySelector('#form-contact-succes__p_uwbericht');
let contactNaam = document.querySelector('#naam').value;
let contactBericht = document.querySelector('#message').value;
const contactBevestigingClose = document.querySelector('#form-contact-succes__button_close');

function contactVerzonden(e) {
  e.preventDefault();

  contactNaam = document.querySelector('#naam').value;
  contactBericht = document.querySelector('#message').value;
  console.log(contactNaam);

  // Succes Bericht Animatie
  contactSucces.slideToggle(600);

  bevestigingsBericht.innerHTML = `uw bericht is ontvangen wij zullen zo spoedig met uw contact op nemen ${ contactNaam }`;
  bevestigingUwBericht.innerHTML = `uw bericht<br>${ contactBericht }`;
}

function contactVerzondenClose(e) {
  e.preventDefault();

  contactSucces.slideToggle(600);
}

// Local storage saving input 
const contactInputs = document.querySelectorAll('#form-contact input');
const contactNaamInput = document.querySelector('#naam');
const contactEmailInput = document.querySelector('#email');
const contactPhoneInput = document.querySelector('#telephone');
const contactBerichtInput = document.querySelector('#message');
const contactFormResetButton = document.querySelector('#form-contact__button_reset');

// local storage
contactNaamInput.value = localStorage.getItem('i1');
contactEmailInput.value = localStorage.getItem('i2');
contactPhoneInput.value = localStorage.getItem('i3');
contactBerichtInput.value = localStorage.getItem('i4');

// define elements and variables
const onzeBorden1 = document.querySelector('#onze-borden--1');
const onzeBorden2 = document.querySelector('#onze-borden--2');
const onzeBorden3 = document.querySelector('#onze-borden--3');
const onzeBorden1Hover = document.querySelector('#onze-borden__1--hover');
const onzeBorden2Hover = document.querySelector('#onze-borden__2--hover');
const onzeBorden3Hover = document.querySelector('#onze-borden__3--hover');

// Function animate hover
function location1Hover() {

  // define animations
  var onzeBorden1HoverAnimation = TweenMax.to(onzeBorden1Hover, 0.7, {
    top: '0px',
    background: 'rgba(0, 0, 0, 0.9)'
  });
}

function location1MouseLeave() {
  // define animations
  var onzeBorden1HoverAnimation = TweenMax.to(onzeBorden1Hover, 0.4, {
    top: '250px',
    background: 'rgba(89.8%, 15.3%, 17.6%, 0.9)'
  });
}

function location2Hover() {

  // define animations
  var onzeBorden2HoverAnimation = TweenMax.to(onzeBorden2Hover, 0.7, {
    top: '0px',
    background: 'rgba(0, 0, 0, 0.9)'
  });
}

function location2MouseLeave() {
  // define animations
  var onzeBorden2HoverAnimation = TweenMax.to(onzeBorden2Hover, 0.4, {
    top: '250px',
    background: 'rgba(89.8%, 15.3%, 17.6%, 0.9)'
  });
}

function location3Hover() {

  // define animations
  var onzeBorden3HoverAnimation = TweenMax.to(onzeBorden3Hover, 0.7, {
    top: '0px',
    background: 'rgba(0, 0, 0, 0.9)'
  });
}

function location3MouseLeave() {
  // define animations
  var onzeBorden3HoverAnimation = TweenMax.to(onzeBorden3Hover, 0.4, {
    top: '250px',
    background: 'rgba(89.8%, 15.3%, 17.6%, 0.9)'
  });
}

// function border animations
// function borderAnimationContactIn() {
//   var borderAnimationIn1 = new TimelineMax()
//     .to('.contact-knop__rect', 0.4, {
//       'stroke-dashoffset': 0,
//       'stroke-dasharray': '500 1000',
//       'stroke-width': '2px',
//       delay: 0
//     })
//     .to('.contact-knop__rect', 0.9, {
//       'stroke-dasharray': '1000 1000',
//       delay: 0.5
//     })
// }

// function borderAnimationContactOut() {
//   var tl1 = new TimelineMax();
//   tl1
//     .to('.contact-knop__rect', 0.2, {
//       'stroke-dasharray': '500 1000',
//       'stroke-dashoffset': -1000
//     })
// }

//Event listeners
mobileMenu.addEventListener('click', hamburgerMenu);
ontdekOnsBut.addEventListener('click', ontdekOns);
$(window).resize(resizeFix);
// landingPage.addEventListener('mousemove', debounce(popupledLogoShadow, 3));

contactFormSubmit.addEventListener('submit', contactVerzonden);
contactBevestigingClose.addEventListener('click', contactVerzondenClose);
offerteForm.addEventListener('submit', offerte);

contactFormButton.addEventListener('click', contactFadeIn);
// contactFormButton.addEventListener('mouseenter', borderAnimationContactIn);
// contactFormButton.addEventListener('mouseleave', borderAnimationContactOut);
offerteFormButton.addEventListener('click', offerteFadeIn);

// Event listener voor de popups
onzeBorden1.addEventListener('click', function () {
  popUpCustom(popupid1, popupId1js, 100);
});
onzeBorden2.addEventListener('click', function () {
  popUpCustom(popupid2, popupId2js, 100);
});
onzeBorden3.addEventListener('click', function () {
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

contactNaamInput.addEventListener('change', function () {
  localStorage.setItem('i1', contactNaamInput.value);
});

contactEmailInput.addEventListener('change', function () {
  localStorage.setItem('i2', contactEmailInput.value);
});

contactPhoneInput.addEventListener('change', function () {
  localStorage.setItem('i3', contactPhoneInput.value);
});

contactBerichtInput.addEventListener('change', function () {
  localStorage.setItem('i4', contactBerichtInput.value);
});

contactFormResetButton.addEventListener('click', function (e) {
  e.preventDefault();
  localStorage.clear();
  window.location.reload();
});

onzeBorden1.addEventListener('mouseover', location1Hover);
onzeBorden1.addEventListener('mouseleave', location1MouseLeave);
onzeBorden2.addEventListener('mouseover', location2Hover);
onzeBorden2.addEventListener('mouseleave', location2MouseLeave);
onzeBorden3.addEventListener('mouseover', location3Hover);
onzeBorden3.addEventListener('mouseleave', location3MouseLeave);
//# sourceMappingURL=script.js.map
