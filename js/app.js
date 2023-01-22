
/**
 * Define Global Variables
 * 
*/
const getSections = document.getElementsByTagName("main")[0].querySelectorAll("section");
const getNavItems = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

//Iterate on each section and add it to the nav
const Navbar = function BuildNAv (){
    for (const i in getSections) {
        if (Object.hasOwnProperty.call(getSections, i)) {
            const SectionId = getSections[i].id;
            const getNavData = getSections[i].getAttribute("data-nav");

            getNavItems.innerHTML += `<li><a data-SectionId="#${SectionId}">${getNavData}</a></li>`
            
        }
    }
}
// Add class 'active' to section when near top of viewport

function activeClass() {
    
    //For the nav buttons
    let index = 0
    //Iterate on sections and navbar buttons
    getSections.forEach( targetSection => {
        
          const sectionTop = targetSection.getBoundingClientRect();
          
          if (sectionTop.top >= 0 && sectionTop.top < 300) {
              targetSection.setAttribute('class','active');
              getNavItems.getElementsByTagName("a")[index].setAttribute('class', 'btnActive');
          } else {
              targetSection.removeAttribute('class');
              getNavItems.getElementsByTagName("a")[index].removeAttribute('class', 'btnActive');
              
          }
          index++
      });
}

// Scroll to anchor ID using scrollTO event
function smoothScroll(e){
    getSectionId = e.target.getAttribute('data-SectionId');
    if(getSectionId){
        getSectionOffset = document.querySelector(getSectionId).offsetTop;
        //Window scroll
        window.scrollTo({
            top: getSectionOffset,
            behavior: 'smooth',
        });
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
window.onload = Navbar;

// Scroll to section on link click
getNavItems.addEventListener('click', smoothScroll);

// Set sections as active
window.addEventListener('scroll', activeClass);