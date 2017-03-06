$(function(){
    $(window).on("load resize", function(){
        $(".fill-screen").css("height",window.innerHeight);
    });

    $('body').scrollspy({
        target: '.navbar'
    })
});