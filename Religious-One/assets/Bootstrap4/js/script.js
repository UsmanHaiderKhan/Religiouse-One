//console.log("usman");

/*================== Read More Text ==================*/

$(function () {
    var showChar = 330;
    var moretext = "More About Us &nbsp; <b style='font-size:34px'>&#8594;</b>";
    var lesstext = "Read Less  &nbsp;<b style='font-size:34px'>&#8592;</b>";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content + '<span class="remaining-contents"><span>' + hide_content + '</span>' +
                '<a href="" class="morelinksss read-more-btn" style="display:block;margin-top:5px;">' + moretext + '</a>'
                + '</span>';
            $(this).html(html);
        }
    });

    $(".morelinksss").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});

/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/

$(function () {
    $('.nav-link').on('click',
        function () {
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        });
});

/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 3,
        showItems: 3

    });

});

/*===================== Date Picker Function ======================*/
$(function () {
    $("#datepicker").datepicker();
});
/*===================== Owl Carousel Slider ======================*/
$(function () {
    $('#owl-one').owlCarousel({
        loop: false,
        margin: 10,
        dots: false,
        nav: true,
        item: 1,
        navText: ["<i class='flaticon-left-angle-bracket'></i>", "<i class='flaticon-right-arrow-angle'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            400: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: false,
                nav: true
            },
            800: {
                items: 1,
                dots: false,
                nav: true
            },
            1000: {
                items: 1,
                dots: false,
                nav: true
            }
        }
    });
});



$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        item: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            400: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            800: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1,
                dots: true,
                nav: false
            }
        }
    });
});

/*===================== Slick Slider ======================*/
var counters = [];
counters = $(".counter-value");
var countersQuantity = counters.length;
console.log(counters + "," + countersQuantity);
var counter = [];

for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
}
var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
    }, 1);
}
var cond = true;
requestScrollAnimation((pos) => {
    var elAlert = document.getElementById("counter-strike");
    var isVisible = isScrolledIntoView(elAlert, true);

    if (isVisible) {
        if (cond) {
            for (var j = 0; j < countersQuantity; j++) {
                count(0, counter[j], j);
            }
            cond = false;
        }


    }
});
/*===================== 3D Slider Script ======================*/

/*===================== Scroll Top Function Script ======================*/
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var w_width = $(window).width();
        if (w_width <= 480) {
            if (scroll >= 100) {
                $("nav").addClass("fixed-top sleep nav-bg-color ");
                $(".navbar-brand img").addClass("scroll-logo-width");
            } else {
                $("nav").removeClass("fixed-top sleep nav-bg-color");
                $(".navbar-brand img").removeClass("scroll-logo-width");
            }
        }
        else if (scroll >= 100) {
            $("nav").addClass("fixed-top sleep nav-bg-color");
            $(".navbar-brand img").addClass("scroll-logo-width ml-5");
            $(".nav-item").addClass("nav-setting-on-scroll");

        } else {
            $("nav").removeClass("fixed-top sleep nav-bg-color");
            $(".navbar-brand img").removeClass("scroll-logo-width ml-5");
            $(".nav-item").removeClass("nav-setting-on-scroll");

        }
    });
});
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var w_width = $(window).width();
        if (w_width <= 480) {
            if (scroll >= 270) {
                $("nav").addClass("easy-nav-on-scroll");
            } else {
                $("nav").removeClass("easy-nav-on-scroll");
            }
        }
        else if (scroll >= 50) {
            $("nav").addClass("easy-nav-on-scroll");
        } else {
            $("nav").removeClass("easy-nav-on-scroll");
        }
    });
});
/*===================== Nav tabs active Function Script ======================*/
$(function () {
    $('.tab-active').on('click',
        function () {
            $('.tab-active').removeClass('dark-active');
            $(this).addClass('dark-active');
        });
});
/*===================== NAvTab Function Script ======================*/

var bgm = document.getElementById("bgm");
function bgmPlay() {
    bgm.play();
    bgm.prop();
}
