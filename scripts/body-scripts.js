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
        jQuery(".imageGallery").nanogallery2({

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

    $('[data-toggle="tooltip"]').tooltip()

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

    $('#'+dayOfWeek+'HoursLine').css("font-weight","bold");

    if (['monday', 'tuesday', 'wednesday', 'friday'].indexOf(dayOfWeek) >= 0) {
        if (timeOfDay>=10 && timeOfDay<=18){
            bootstrap_alert.warning('We are <strong>open</strong> right now! Come and visit us!', 'success', 4000);
            $("#openHoursIndicator-open")
                .css("display", "''");
            $("#openHoursIndicator-closed")
                .css("display", "none");

        }
        else{
            bootstrap_alert.warning('Sorry, we are currently<strong> closed.</strong>', 'warning', 4000);
            $("#openHoursIndicator-open")
                .css("display", "none");
            $("#openHoursIndicator-closed")
                .css("display", "''");
        }
    }else if (['thursday'].indexOf(dayOfWeek) >= 0){
        if (timeOfDay>=10 && timeOfDay<=19){
            bootstrap_alert.warning('We are <strong>open</strong> right now! Come and visit us!', 'success', 4000);
            $("#openHoursIndicator-open")
                .css("display", "''");
            $("#openHoursIndicator-closed")
                .css("display", "none");
        }
        else{
            bootstrap_alert.warning('Sorry, we are currently<strong> closed.</strong>', 'warning', 4000);
            $("#openHoursIndicator-open")
                .css("display", "none");
            $("#openHoursIndicator-closed")
                .css("display", "''");
        }
    }else if (['saturday'].indexOf(dayOfWeek) >= 0){
        if (timeOfDay>=10 && timeOfDay<=17){
            bootstrap_alert.warning('We are <strong>open</strong> right now! Come and visit us!', 'success', 4000);
            $("#openHoursIndicator-open")
                .css("display", "''");
            $("#openHoursIndicator-closed")
                .css("display", "none");
        }
        else{
            bootstrap_alert.warning('Sorry, we are currently<strong> closed.</strong>', 'warning', 4000);
            $("#openHoursIndicator-open")
                .css("display", "none");
            $("#openHoursIndicator-closed")
                .css("display", "''");
        }
    }else if (['sunday'].indexOf(dayOfWeek) >= 0){
        bootstrap_alert.warning('Sorry, we are currently<strong> closed.</strong>', 'warning', 4000);
        $("#openHoursIndicator-open")
            .css("display", "none");
        $("#openHoursIndicator-closed")
            .css("display", "''");
    }
};

checkIfOpen();


$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.target).attr("href");
});
