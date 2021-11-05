console.log("AP Classroom Modify Script: Page loaded, waiting for element.");
modifyCarousel = setInterval(() => {
    // Assignment carousel element is the first element with class "carousel-parent-container".
    if (document.getElementsByClassName("carousel-parent-container")[0] != undefined){
        document.getElementsByClassName("carousel-parent-container")[0].style.overflowX = "scroll";
        console.log("AP Classroom Modify Script: Injection complete.");
        clearInterval(modifyCarousel);
    } 
}, 500);

/*
This script modifies the AP classroom assignment carousel by adding a scroll bar for easy access to all the assignments.

To use it, install an HTTP request modifier like Requestly (https://requestly.io/) and point the script to run at page load.

Make sure to click "Raw" when getting the link to the script or else it will not work.
*/
 
