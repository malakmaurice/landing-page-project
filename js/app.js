/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sectionNumber = 5;
const addSectionButton = document.querySelector(".add__btn");
const navbarList = document.querySelector("#navbar__list");
let listItems = document.getElementsByClassName("item");
const activeMenuItem = document.getElementsByClassName("item menu__active");
const activeSection=document.querySelector(".your-active-class");
const topButton = document.querySelector(".top__btn");
let sections = document.querySelectorAll(".section");
/**
 * End Global Variables
 * 
 *
*/

/**
 * 
 * Begin Events
 *
*/

document.addEventListener("DOMContentLoaded", loadEventListeners);
onscroll = () => {
  var currentScroll = document.documentElement.scrollTop;
  sections.forEach(function (section) {
    if (currentScroll >= (section.offsetTop) - 150 && currentScroll <= section.offsetTop + section.offsetHeight / 2) {
      const currentSectionID = section.getAttribute("id");
      activeMenuItem[0].className = activeMenuItem[0].className.replace('menu__active', "");
      document.querySelector(`.${currentSectionID}`).classList.add("menu__active");
      //add active class to the viewed section
      activeSection.className=activeSection.className.replace("your-active-class","");
      section.className+=" your-active-class";

    }
  });
}

function loadEventListeners() {

  addSectionButton.addEventListener('click', addSection);
  for (var i = 0; i < navbarList.childElementCount; i++)
    listItems[i].addEventListener('click', addActiveMenu);
  topButton.addEventListener('click', topToHeader);

}
// Build menu  and section 
function addSection() {
  const newItem = document.createElement("li");
  newItem.innerHTML = `section ${sectionNumber}`;
  newItem.className = `item section${sectionNumber}`;
  navbarList.appendChild(newItem);
  const newSection = document.createElement("section");
  newSection.setAttribute("id", `section${sectionNumber}`);
  newSection.className = "section";
  let sectionContent =
    `<div class="landing__container">
  <h2>Section ${sectionNumber}</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.</p>

  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
  </div>`;
  newSection.innerHTML = sectionContent;
  sectionNumber++;
  document.querySelector("main").appendChild(newSection);
  listItems[navbarList.childElementCount - 1].addEventListener('click', addActiveMenu);
  sections = document.querySelectorAll(".section");
  console.log(sections);
  console.log(newSection)
}
// Set menu as active And Scroll to section on link click
function addActiveMenu(e) {
  const sec = document.getElementById(e.target.classList[1]);
  sec.scrollIntoView({ behavior: 'smooth' })
  activeMenuItem[0].className = activeMenuItem[0].className.replace('menu__active', "");
  e.target.className += ' menu__active';
}
// scroll to header on click top button 
function topToHeader() {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}
