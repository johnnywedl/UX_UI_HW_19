// console.log("Your index.js file is loaded correctly!")

// Preloader //
function fade() {
    $('.preloader').fadeOut("slow");
    }
    setTimeout(fade, 3000);  


// Button hover

$(document).ready(function(){
    $('.button').mouseenter(function(){
        $(this).css({"width": "120px","height":"40px"});
    });

    $('.button').mouseleave(function(){
        $(this).css({"width" : "auto" , "height" : "auto"});
    });
})
