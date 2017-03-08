window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

$(function(){
    $(window).on("load resize", function(){
        $(".fill-screen").css("height",window.innerHeight);
    });

    $('body').scrollspy({
        target: '.navbar',
        offset: 105
    });

    $('nav a, .down-button a').bind('click',function(){
    	$('html, body').stop().animate({
    		scrollTop: $($(this).attr('href')).offset().top -100
    	}, 1000, 'easeInOutExpo');
    	event.preventDefault();
    	});

    $(window).stellar();

    new WOW().init();

    $(document).ready(function () {
        $("#imageGallery").nanoGallery({

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

    // $(".fa-facebook,.fa-twitter,.fa-google-plus,.fa-envelope").hover(function() {
    //     $(this).addClass("fa-2x");
    // },
    //     function(){
    //         $(this).removeClass("fa-2x");
    //     });
    //     //     $(this).stop().animate({ fontSize : '20px' });
    //     // },
    //     // function() {
    //     //     $(this).stop().animate({ fontSize : '14px' });
    //     // });
    $(".fa-chevron-circle-down").hover(function() {
        $(this).stop().animate({fontSize: '60px'}, 100)
    },
        function(){
        $(this).stop().animate({ fontSize: '56px'}, 100)
        })
    });