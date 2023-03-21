$(document).ready(function () {

    //open burger menu
    $('.nav-burger').click(function(){
        $(this).toggleClass('active');
        $('.nav-mobile-menu').toggleClass('active');
    });

    //close burger menu on link click
    $('.nav-mobile-menu a').click(function(){
        $('.nav-burger').removeClass('active');
        $('.nav-mobile-menu').removeClass('active');
    });

    //scrollspy
    $(window).bind('scroll', function () {
        var currentTop = $(window).scrollTop();
        var elems = $('section');
        elems.each(function (index) {
            var elemTop = $(this).offset().top - 500;
            var elemBottom = elemTop + $(this).height();
            if (currentTop >= elemTop && currentTop <= elemBottom) {
                var id = $(this).attr('id');
                var navElem = $('a[href="#' + id + '"]');
                navElem.addClass('active').siblings().removeClass('active');
            }
        })
    });

    // nav item click smooth scroll to section
    $('.nav-item').click(function (event) {
        event.preventDefault();

        var link = ($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $(link).offset().top - 100
        }, 500);
    });

    //accordion tabs
    const acc = document.getElementsByClassName('accordion');
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = `${panel.scrollHeight}px`;
            }
        });
    }


    //open aminos modal
    $('.amino__products-box-more').click(function(){
        $(this).siblings('.amino__modal').addClass('active');
    });

    //hide modal on close icon
    $('.amino__modal-close').click(function(){
        $('.amino__modal').removeClass('active');
    });

    //click outside menu close it
    $(document).mouseup(function(e) {
        var container = $(".amino__modal-wrapper");

        if (!container.is(e.target) && container.has(e.target).length === 0)
        {
            $('.amino__modal').removeClass('active');
        }
    });

    //escape click close menu
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('.amino__modal').removeClass('active');
        }
    });


});
