$(function(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop() > 400) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
    });
    $('.scroll-top').on('click', function(e) {
        $("html, body").animate({ scrollTop: 0 }, 300);
        e.stopPropagation();
    })
})
