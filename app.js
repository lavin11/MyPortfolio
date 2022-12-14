$(document).ready(function () {

    // For the Nabar to appear on scroll

    $(window).scroll(function () {
        if(this.scrollY > 200) {
            $(".navbar").addClass("sticky");
        }else {
            $(".navbar").removeCloss("sticky");
        }

        // Scrolling Button btn

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else {
            $('.scroll-up-btn').removeCloss("show");
        }

    });

    //Slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({scrollTop:0});
    });

    // Typing effects
    var typed = new Typed (".typing-1", {
        strings: [
            "Developer", "Designer", "Web Developer"
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed (".typing-2", {
        strings: [
            "Developer", "Designer", "Web Developer"
        ],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    
    // owl carousel Styling animation

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        navigation: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }




    })
    


});