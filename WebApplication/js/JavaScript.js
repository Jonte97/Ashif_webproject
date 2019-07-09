//NavbarScripts
$(function () {
    $('.fadein div:gt(0)').hide();
    setInterval(function () {
        $('.fadein :first-child').fadeOut().next('div').fadeIn().end().appendTo('.fadein');
    }, 5000);
});

$('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

$(function() {
    $(function () {
        $('a[data-price_cathegory] = photo');
    });
});


//fade in och fade out för priskategorier https://www.w3schools.com/jquery/jquery_animate.asp <=== INSPIRATION
//$(function () {
//    $('#hover').hover(function () {
//        $('#photoShoot').fadeIn();
//    }, function () {
//        $('#photoShoot').fadeOut();
//        });
//});
$(function () {
    $('#hover').hover(function () {
        $('#photoShoot').animate({
            height: 'toggle'
        });
    });
});

(function ($) {
    $(document).ready(function () {
        //Hide navbar
        $(function () {
            $(window).scroll(function () {
                //Set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 600) {
                    $('#navbar').addClass('navbarBlue');
                    $('#navbar').removeClass('navbarTrans');
                } else if ($(this).scrollTop() < 300) {
                    $('#navbar').removeClass('navbarBlue');
                    $('#navbar').addClass('navbarTrans');
                }
            });
        });
    });
}(jQuery));

// Gallery sliding function

