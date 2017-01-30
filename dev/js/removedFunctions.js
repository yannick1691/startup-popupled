// // schaduw op popupled logo die muismove volgt
// const landingPage = document.querySelector('.landing-page');
// const popupledLogo = landingPage.querySelector('.logo-landing');
// const distance = 30;

// function popupledLogoShadow(e) {
//   const { offsetWidth: breedte, offsetHeight: hoogte } = landingPage;
//   let { offsetX: x, offsetY: y } = e;
  
//   // zorgt dat als je over button of img gaat de offset niet 0 is
//   if(this !== e.target) {
//       x = x + e.target.offsetLeft;
//       y = y + e.target.offsetTop;
//     }

//   const xDistance = Math.round((x / breedte * distance) - (distance / 2));
//   const yDistance = Math.round((y / hoogte * distance) - (distance / 2));
  
//   popupledLogo.style.filter = `
//   drop-shadow(${xDistance}px ${yDistance}px 4px rgba(0, 0, 0, 0.75))`;
// }


// // Slide animations
// var controller = new ScrollMagic.Controller({globalSceneOptions: {}});

// // Tween animations

// var tl1 = new TimelineMax();
// tl1
//   .to('#waarom-ons__span_snel', 0.8, { 'font-size': '1.2em', color: '#333' })
//   .to('#waarom-ons__span_populair', 0.8, { 'font-size': '1.2em', color: '#333' })
//   .to('#waarom-ons__span_goedkoop', 0.8, { 'font-size': '1.2em', color: '#333' });

// // build scenes
// // Lamp icon animatie
//   new ScrollMagic.Scene({ triggerElement: "#watispopupled", offset: 80})
//     .setTween('.slide-in', 1, {
//       scale: 1.01,
//       opacity: 1,
//     })
//     // .addIndicators({name: 'lamp animation'}) 
//     .addTo(controller);
// // Led scherm animatie
//   new ScrollMagic.Scene({triggerElement: "#watispopupled", offset: 80})
//     .setTween('.slide-in2', 1, {
//       scale: 1.01,
//       opacity: 1
//     }) // add class toggle
//     // .addIndicators({name: 'led screen animation'})
//     .addTo(controller);
// // Wat is PopupLed h1 animation
//   new ScrollMagic.Scene({ triggerElement: "#watispopupled", offset: 50 })
//     .setTween('#watispopupled__h1_green', 0.4, {
//       'font-size': '2.8em',
//       color: '#00AF00'
//     })
//     // .addIndicators({ name: 'Wat Is Popupled H1 animate in' })
//     .addTo(controller)
// // over-ons h1 animation
//   new ScrollMagic.Scene({ triggerElement: "#over-ons", offset: 50 })
//     .setTween('#over-ons__h1_blue', 0.5, {
//       'font-size': '2.8em',
//       color: '#36AEBA'
//     })
//     // .addIndicators({ name: 'Wat Is Popupled H1 animate in' })
//     .addTo(controller)
// // voordelen h1 animatie
//   new ScrollMagic.Scene({ triggerElement: "#watUkrijgt", offset: 80 })
//     .setTween('#wat-u-krijgt__h1_blue', 0.5, {
//       'font-size': '2.8em',
//       color: '#36AEBA'
//     })
//     // .addIndicators({ name: 'voordelen H1 animatie' })
//     .addTo(controller);
// // Waarom Ons icon animatie
//   new ScrollMagic.Scene({ triggerElement: "#waarom-ons", offset: 120})
//     .setTween('.waaromOnsIcon', 1, {
//       rotation: 10
//     })
//     // .addIndicators({ name: 'Waarom Ons icon Animatie' })
//     .addTo(controller);
// // Waarom ons h1 animation 
//   new ScrollMagic.Scene({ triggerElement: "#waarom-ons", offset: 50 })
//     .setTween('#waarom-ons__h1_red', 0.7, {
//       'font-size': '2.8em',
//       color: '#E5272D'
//     })
//     // .addIndicators({ name: 'Waarom Ons H1 Animatie' })
//     .addTo(controller);
// // Waarom ons snel - populair - goedkoop animatie
//   new ScrollMagic.Scene({ triggerElement: "#waarom-ons", offset: 150 })
//     .setTween(tl1)
//     // .addIndicators({ name: 'Waarom ons snel - populair - goedkoop animatie' })
//     .addTo(controller);
// // Contact h1 animation
//   new ScrollMagic.Scene({ triggerElement: "#contact", offset: 50 })
//     .setTween('#contact__h1_green', 0.7, {
//       'font-size': '2.8em',
//       color: '#00AF00'
//     })
//     // .addIndicators({ name: 'Contact h1 animatie' })
//     .addTo(controller);


//    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
//   <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>-->
//   <!--<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>-->
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>