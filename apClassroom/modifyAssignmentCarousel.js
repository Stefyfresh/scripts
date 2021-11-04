modifyCarousel = setInterval(() => {
    if (document.getElementsByClassName("carousel-parent-container")[0] != undefined){
        document.getElementsByClassName("carousel-parent-container")[0].style.overflowX = "scroll";
    
        clearInterval(modifyCarousel);
    } 
}, 500);