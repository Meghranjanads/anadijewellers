$(document).ready(function () {
    /********* On scroll heder Sticky *********/
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("header").addClass("head-sticky");
            $(".left-fixed-header").fadeOut();
        } else {
            $("header").removeClass("head-sticky");
            $(".left-fixed-header").fadeIn();
        }
    });
    /********* Mobile Menu ********/
    $('.mobile-menu-button').on('click', function (e) {
        e.preventDefault();
        setTimeout(function () {
            $('body').addClass('no-scroll active-menu');
            $(".mobile-menu-wrapper").toggleClass("active-menu");
            $('.overlay').addClass('menu-overlay');
        }, 50);
    });
    $('body').on('click', '.overlay.menu-overlay, .menu-close-icon svg', function (e) {
        e.preventDefault();
        $('body').removeClass('no-scroll active-menu');
        $(".mobile-menu-wrapper").removeClass("active-menu");
        $('.overlay').removeClass('menu-overlay');
    });
    /*********  Header Search Popup  ********/
    $(".search-header a").click(function () {
        $(".search-popup").toggleClass("active");
        $("body").toggleClass("no-scroll");
    });
    $(".close-search").click(function () {
        $(".search-popup").removeClass("active");
        $("body").removeClass("no-scroll");
    });
     /*****  Multi-level accordion nav  *****/
     $('.acnav-label').click(function () {
        var label = $(this);
        var parent = label.parent('.has-children');
        var list = label.siblings('.acnav-list');
        if (parent.hasClass('is-open')) {
            list.slideUp('fast');
            parent.removeClass('is-open');
        } else {
            list.slideDown('fast');
            parent.addClass('is-open');
        }
    });
}); 

$('.menu-slider-inner').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    arrows:false,
     responsive: [ 
                {
                    breakpoint: 1200,
                    settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1   
                    }
                },  
                {
                breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1 
                    }
                },
                {
                  breakpoint: 776,
                      settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1 
                      }
                  },
                {
                breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1 
                    }
                }
            ]
});
$('.product-slider').slick({
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 800,
arrows:false,
    responsive: [ 
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1   
                }
            },  
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1 
                }
            },
            {
                breakpoint: 776,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1 
                    }
                },
            {
            breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1 
                }
            }
        ]
});
$('.product-leb-1').slick({  
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    arrows:false,
        responsive: [ 
                {
                    breakpoint: 1200,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1   
                    }
                },  
                {
                breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1 
                    }
                },
                {
                    breakpoint: 776,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1 
                        }
                    },
                {
                breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1 
                    }
                }
            ]
});
$('.insta-anadi-pic-leb').slick({
    slidesToShow: 4,
    rows: 2,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 800,
    arrows:false,
        responsive: [ 
                {
                    breakpoint: 1200,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1   
                    }
                },  
                {
                breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1 
                    }
                },
                {
                    breakpoint: 776,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1 
                        }
                    },
                {
                breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1 
                    }
                }
            ]
});
$('.blog-slider').slick({
    slidesToShow: 2,
    rows: 3,
    dots: false,
    arrows: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    arrows:false,
        responsive: [ 
                {
                    breakpoint: 1200,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1   
                    }
                },  
                {
                breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        rows: 1,
                        slidesToScroll: 1 
                    }
                },
                {
                    breakpoint: 776,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1 
                        }
                    },
                {
                breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1 
                    }
                }
            ]
});

$('#play-video,play-video1').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.instagram.com/reel/Co3_3VLAKpF/?hl=en" frameborder="0" allowfullscreen></iframe>');
    });

    $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
    });

    $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
    });

    function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

$('#play-video1').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.instagram.com/reel/Ck1bFz_BFBv/?hl=en" frameborder="0" allowfullscreen></iframe>');
    });

    $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
    });

    $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
    });

    function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};

$('#play-video2').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="560" height="315" src="https://www.instagram.com/reel/ChJx5NzhTCy/?hl=en" frameborder="0" allowfullscreen></iframe>');
    });

    $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
    });

    $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
    });

    function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
};



$(document).ready(function() {
	$('.vid-slider .vid').on('click', function() {
  // get required DOM Elements
  var iframe_src = $(this).children('iframe').attr('src'),
        iframe = $('.video-popup'),
        iframe_video = $('.video-popup iframe'),
        close_btn = $('.close-video');
        iframe_src = iframe_src + '?autoplay=1&rel=0'; // for autoplaying the popup video
        
  // change the video source with the clicked one
  $(iframe_video).attr('src', iframe_src);
  $(iframe).fadeIn().addClass('show-video');
		
  // remove the video overlay when clicking outside the video
  $(document).on('click', function(e) {
    if($(iframe).is(e.target) || $(close_btn).is(e.target)) {
    $(iframe).removeClass('show-video');
    $(iframe_video).attr('src', '');
  }
		});
		
	});
  
});