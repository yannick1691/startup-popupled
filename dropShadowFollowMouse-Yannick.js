// schaduw op popupled logo die muismove volgt
const landingPage = document.querySelector('.landing-page'); // The div you want the mouse to watch
const popupledLogo = landingPage.querySelector('.logo-landing'); // The image u want to add the shadow to
const distance = 25; // the max distance u want it to be able to go (in pixels)

function popupledLogoShadow(e) { // u know what a function is If u dont ima 😂 srry
  // Const & let are the new var in es6 (const cannot be edited by anything in js this is what u want to use most of the time let is a editable variable u want to use this if you need to reasign value's to a variable)
  const { offsetWidth: width, offsetHeight: height } = landingPage; // const { value: variable name, } spaces are important!
  let { offsetX: x, offsetY: y } = e; // checks the offset of your mouse from the top
  
  // zorgt dat als je over button of img gaat de offset niet 0 is
  if(this !== e.target) { // checkt of je niet over een element gaat en als je dat wel doet voert ie deze code uit
      x = x + e.target.offsetLeft; // zorgt dat als je over een element gaat dat de x niet 0 is
      y = y + e.target.offsetTop; // zorgt dat als je over een element gaat dat de y niet 0 is
      console.log(e.target); // shows u what the target is the mouse hovers over (not needed just to lazy to remove) 😂
    }

  const xDistance = Math.round((x / width * distance) - (distance / 2)); // muis positie : beeldscherm breedte * max distance - max distance gedeelt door 2 zodat het aan beide kanten is 
  const yDistance = Math.round((y / height * distance) - (distance / 2)); //same as above 
  

// the image.style.filter = backticks `` links onderin naast shift defineerd een es6 string ${variable} laat je met es6 een variable daar in voeren daarom staat ie ook in `` anders werkt dat niet sorry for going from english to dutch to english lel je kan ook bijv ${xDistance * -1} of ${xDistance * 9} ect doen in dat (es6 is da shit :P) um however i use a auto compiler because even do most browsers support is got to support everything so use bapel https://babeljs.io/ to convert es6 to old js  enjoy
  popupledLogo.style.filter = `drop-shadow(${xDistance}px ${yDistance}px 5px rgba(0, 0, 0, 0.8))`;

// Enjoy ian... credits pls do xD do console.error('credits to yannick for code :P')