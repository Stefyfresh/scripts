modifyCarousel = setInterval(() => {
    if (document.getElementsByClassName("carousel-parent-container")[0] != undefined){
        document.getElementsByClassName("carousel-parent-container")[0].style.overflowX = "scroll";
    
        clearInterval(modifyCarousel);
    } 
}, 500);

/*
This script modifies the AP classroom assignment carousel by adding a scroll bar for easy access to all the assignments.

To use it, install an HTTP request modifier like Requestly (https://requestly.io/) and point the script to run at page load.
*/
 