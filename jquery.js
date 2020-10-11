$(document).ready(function(){

// scroll on buttons using jquery and the library waypoint

$(".js--btnFull").click(function(){
    $("html, body").animate({scrollTop: $(".js--portfolio").offset().top}, 1000)
});

$(".js--btnGhost").click(function(){
    $("html, body").animate({scrollTop: $(".js--plans").offset().top} , 1000)
});

// animate section cities and plan premium using animate css and jquery

$(".js--wp-1").waypoint(function(direction){
    $(".js--wp-1").addClass("animate__animated animate__pulse")
}, {offset: "50%"}
);

$(".js--wp-2").waypoint(function(direction){
    $(".js--wp-2").addClass("animate__animated animate__pulse")
}, {offset: "50%"}
);

// responsive navbar

$(".js--nav-icon").click(function(){
    var nav = $(".js--main-nav")
    var icon = $(".js--nav-icon i")
    nav.slideToggle(200)

    if(icon.hasClass("fa-bars")){
        icon.addClass("fa-times")
        icon.removeClass("fa-bars")
    }
    else {
        icon.addClass("fa-bars")
        icon.removeClass("fa-times")
    }
})

});