$(function(){
    $(window).on("load resize", function(){
        $(".fill-screen").css("height",window.innerHeight);
    });

    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });

    $('nav a, .down-button a').bind('click',function(){
    	$('html, body').stop().animate({
    		scrollTop: $($(this).attr('href')).offset().top -100
    	}, 1500, 'easeInOutExpo');
    	event.preventDefault();
    	});

    $(window).stellar();

    new WOW().init();

    $(document).ready(function () {
        $("#nanoGallery3").nanoGallery({

                thumbnailHeight: 250,
                colorScheme: 'light',
                colorSchemeViewer: 'light',
                thumbnailHoverEffect: {name: 'scale120', duration: 100},
                theme: 'clean',
                thumbnailGutterWidth : 0,
                thumbnailGutterHeight : 0,
                // i18n: { thumbnailImageDescription: 'View Photo', thumbnailAlbumDescription: 'Open Album' },
                 thumbnailLabel: { display: false, position: 'overImageOnMiddle', align: 'center'},
                thumbnailOpenImage: false,

        });
    });
});