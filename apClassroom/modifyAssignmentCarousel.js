modifyCarousel = setInterval(() => {
    if (document.getElementsByClassName("carousel-parent-container")[0] != undefined){
        document.getElementsByClassName("carousel-parent-container")[0].style.overflowX = "scroll";
    
        clearInterval(modifyCarousel);
    } 
}, 500);

//This script modifies the AP classroom assignment carousel by adding a scroll
// bar for easy access to all the assignments.