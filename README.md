# Landing Page Project


# Overview
 Manipulating the DOM exercise and programmatically builds navigation, scrolls to anchors from navigation, and highlights section in viewport upon scrolling.

# Language I Use
1- HTML
2- CSS
3- Vanilla JavaScript


# SPECIFICATIONS
1- Build Navigation dynamically with an unordered list.
2- Build Section Active to viewed while scrolling through the page.
3- Add Scroll to Anchor When clicking an item.
4- Get The Active Link When the section is active


 # Instructions 
 1- Build New section in HTML to become 4 sections content 
 2-Build the navigation menu with an unordered list
   • Select all sections and store in variable
   • Returns an Element object by id for the navbar
   • Use Document Fragment for Better performance
   • Use forEach for looping over all sections
     • Create a list item for each section
     • Create a hyperlink for each section
     • Get data-nav and store it in variable
     • Get Text from data-nav
   • Make each link with the same name of its section 
     • Create text to a hyperlink
     • Create a list item to a hyperlink
     • Create fragment for best performance
 3- Add event EventListener to click links and scroll into View
     • Create fragment to unordered list
 4-Use GetBoundingClientRect to get Viewport to all sections
  • Add scroll to viewport by Scroll event listener
  •  Use for of loops on the sections list
     • Add if statement to active and remove active section
       •  Add active section and change background if true
       •  Remove active section and remove background if false
 5- Add active Link when textContent equal to the active section 
  • Select all a hyperlink and store in a variable
  • Get attribute value from active section to link
    • Get data-nav and store it in variable
    • Add if condition which link has the textContent equal to the active section
    • Add Active link when section active
    • Remove Active link when the section is not active



