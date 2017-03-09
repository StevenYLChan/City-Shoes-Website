window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    $('body').scrollspy({
        target: '.navbar',
        offset: 105
    });

    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    $(window).stellar();

    new WOW().init();

    var myCS= { thumbnail : { borderColor: '#ffffff' } };
    jQuery(document).ready(function () {
        jQuery("#imageGallery").nanogallery2({

            thumbnailHeight: 250,
            thumbnailHoverEffect2: {name: 'scale120', duration: 100},
            thumbnailGutterWidth: 0,
            thumbnailGutterHeight: 0,
            thumbnailLabel: {display: false, position: 'overImageOnMiddle', align: 'center'},
            thumbnailOpenImage: false,
            thumbnailBorderHorizontal: 1,
            thumbnailBorderVertical: 1,
            colorScheme: myCS

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
    $(".fa-chevron-circle-down").hover(function () {
            $(this).stop().animate({fontSize: '60px'}, 100)
        },
        function () {
            $(this).stop().animate({fontSize: '56px'}, 100)
        });


});

bootstrap_alert = function () {};
bootstrap_alert.warning = function (message, alert, timeout) {
    $('<div id="storeOpenAlert" class="alert alert-' + alert + ' fade in alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'
        + message + '</div>').appendTo('body');
    setTimeout(function () {
        $(".alert").alert('close');
    }, timeout);
};
//console.log = function(){};
var checkIfOpen = function(){
    var myDate = new Date();
    moment.tz.setDefault("America/Edmonton");
    console.log(moment.tz(myDate, "America/Edmonton").format('dddd HH:mm'));

    var dayOfWeek = moment.tz(myDate, "America/Edmonton").format('dddd').toLowerCase();
    var timeOfDay = moment.tz(myDate, "America/Edmonton").format('HH');

    if (['monday', 'tuesday', 'wednesday', 'friday'].indexOf(dayOfWeek) >= 0) {
        if (timeOfDay>=10 && timeOfDay<=18){
            bootstrap_alert.warning('<strong>Open!</strong> Come and visit us!', 'success', 4000);
        }
        else{
            bootstrap_alert.warning('<strong>Closed!</strong> Sorry, we are currently closed.', 'warning', 4000);
        }

    }else if (['thursday'].indexOf(dayOfWeek) >= 0){
        if (timeOfDay>=10 && timeOfDay<=19){
            bootstrap_alert.warning('<strong>Open!</strong> Come and visit us!', 'success', 4000);
        }
        else{
            bootstrap_alert.warning('<strong>Closed!</strong> Sorry, we are currently closed.', 'warning', 4000);
        }
    }else if (['saturday'].indexOf(dayOfWeek) >= 0){
        if (timeOfDay>=10 && timeOfDay<=17){
            bootstrap_alert.warning('<strong>Open!</strong> Come and visit us!', 'success', 4000);
        }
        else{
            bootstrap_alert.warning('<strong>Closed!</strong> Sorry, we are currently closed.', 'warning', 4000);
        }
    }else if (['sunday'].indexOf(dayOfWeek) >= 0){
        bootstrap_alert.warning('<strong>Closed!</strong> Sorry, we are currently closed.', 'warning', 4000);
    }
};

checkIfOpen();



