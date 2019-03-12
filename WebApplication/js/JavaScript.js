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


(function ($) {
    $(document).ready(function () {
        //Hide navbar
        $("#navbar").hide();

        $(function () {
            $(window).scroll(function () {
                //Set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > 400) {
                    $('#navbar').fadeIn();
                } else {
                    $('#navbar').fadeOut();
                }
            });
        });
    });
}(jQuery));



