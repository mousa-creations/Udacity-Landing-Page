// Global Variables
// Select all sections and store in variable
const alSec = document.querySelectorAll("section");
// Returns an Element object by id for the navbar
const nar = document.getElementById("navbar__list");
// Use Document Fragment for Better performance
const fnt = document.createDocumentFragment();

// Use forEach for looping over all sections
alSec.forEach((megaSns) => {
  let lst = document.createElement("li"); // Create a list item for each section
  let lnk = document.createElement("a"); // Create a hyperlink for each section
  const dav = megaSns.getAttribute("data-nav"); // Get data-nav and store it in variable
  const gxt = document.createTextNode(dav); // Get Text from data-nav

  // Make each link with the same name of its section
  lnk.appendChild(gxt); // Create text to a hyperlink
  lst.appendChild(lnk); // Create a list item to a hyperlink
  fnt.appendChild(lst); // Create fragment for best performance

  // Add event EventListener to click links and scroll into View
  lnk.addEventListener("click", () => {
    megaSns.scrollIntoView({ behavior: "smooth" });
  });
});
// Create fragment to unordered list
nar.appendChild(fnt);

// Use GetBoundingClientRect to get Viewport to all sections
const userView = (vew) => {
  let nicePort = vew.getBoundingClientRect();
  return nicePort.top >= 0 && nicePort.top <= 200;
};

// Add scroll to viewport by Scroll event listener
const svp = window.addEventListener("scroll", () => {
  // Use for of loops on the sections list
  for (section of alSec) {
    // Add if statement to active and remove active section
    if (userView(section)) {
      // Add active section and change background if true
      section.classList.add("your-active-class");
      // Remove active section and remove background if false
    } else {
      section.classList.remove("your-active-class");
    }
  }

  // Add active Link when textContent equal to the active section
  const ank = document.querySelectorAll("a"); // Select all a hyperlink and store in a variable
  ank.forEach((alnk) => {
    const gate = alnk.getAttribute("data-nav"); // Get data-nav and store it in variable
    // Add if condition which link has the textContent equal to the active section
    if (alnk.textContent == gate) {
      // Add Active link when section active
      alnk.classList.add("your-active-class");
      // Remove Active link when the section is not active
    } else {
      alnk.classList.remove("your-active-class");
    }
  });
});

// Back to top button
const tBtn = document.getElementById("btnBack"); //get button and store in variable

window.onscroll = () => {  // add onscroll funcation
  scrTop();
};

// add if condition when scroll downn to 30px from top
const scrTop = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    tBtn.style.display = "block";
  } else {
    tBtn.style.display = "none";
  }
};

// When click on the button, scroll to top
const backTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
