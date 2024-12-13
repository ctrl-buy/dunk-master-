$(document).ready(function () {
    // menu toggler 
    $('#menu-toogler-icon').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('change');
        $('nav .navigations menu').toggleClass('menu-toggler-class');
    });

    $('nav .navigations menu a').click(function (e) {
        $('nav .navigations menu').removeClass('menu-toggler-class');
        $('#menu-toogler-icon').removeClass('change');
    });


    // nav toggler 
    $(window).scroll(function () {
        // console.log(window.scrollY)
        if (scrollY > 20) {
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    });

    // typed js 
    var typed = new Typed('#element', {
        strings: ['עקבו אחר האימונים שלכם', 'עם הדאנק מאסטר'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        backspeed: 10
    });
    var typed = new Typed('#appliaction', {
        strings: ['זמין בחנות אפליקציות באייפון', 'זמין בחנות אפליקציות באנדרואיד'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        backspeed: 10
    });
    var typed = new Typed('#htu-head-text', {
        strings: ['1: התקינו את האפליקציה', '2: הדליקו את היחידה'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        backspeed: 10
    });
    var typed = new Typed('#myd-typed', {
        strings: ['תעקבו אחר התקדמות', 'תשתפרו בכל מוד באפליקציה', 'השתפרו מאימון לאימון'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        backspeed: 10
    });

    // var typed = new Typed('#dmi-typed', {
    //     strings: ['Understand the differences', 'between a Dunk Master player ', 'And others players'],
    //     typeSpeed: 50,
    //     loop: true,
    //     backDelay: 1000,
    //     backspeed: 10
    // });
    var typed = new Typed('#buynow-typed', {
        strings: ['תקנו דאנק מאסטר', 'רק בלחיצה אחת'],
        typeSpeed: 50,
        loop: true,
        backDelay: 1000,
        backspeed: 10
    });
    // var typed = new Typed('#au-typed', {
    //     strings: [' Instagram', ' Tiktok', ' WhatsApp'],
    //     typeSpeed: 50,
    //     loop: true,
    //     backDelay: 1000,
    //     backspeed: 10
    // });
    // aos aimation 
    AOS.init();


    // owl carousel 
    $('.right-box').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.app-imgs').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
});