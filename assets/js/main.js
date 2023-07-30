jQuery(document).ready(function ($) {
  "use strict";
  /*------------------
        Counter Up
    ------------------*/
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  /*------------------
        FeedBack Slider
        ------------------*/
  let feedback = $(".team-slider");
  if (feedback.length) {
    feedback.slick({
      mobileFirst: true,
      arrows: true,
      autoplay: false,
      prevArrow:
        '<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left-long"></i> </button>',
      nextArrow:
        '<button type="button" class="slick-next"> <i class="fa-solid fa-arrow-right-long"></i></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            arrows: true,
            autoplay: false,
          },
        },
      ],
    });
  }

  /*---------------
  logo slider
  ---------------*/

  $(".logo-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
});
