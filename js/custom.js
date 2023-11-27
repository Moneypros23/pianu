$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
        $("header").addClass("darkHeader");
    } else {
        $("header").removeClass("darkHeader");
    }
});;