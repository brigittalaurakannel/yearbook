$(function(){

  	  /* highlight menu item on scroll */


  	  $(window).scroll(function() {
  	      var position = $(this).scrollTop();

  	      $('section').each(function() {
  	          var target = $(this).offset().top - 500;
  	          var id = $(this).attr('id');

  	          if (position >= target) {
  	            // console.log(id + ":" + target);
  	              $('.menu-items a').removeClass('active');
  	              $('.menu-items a[href=\\#' + id + ']').addClass('active');
  	          }
  	      });
  	  });

  	/* sticky header */

  	$(window).on("scroll", function() {
  		if($(window).scrollTop() > 72 ){
  				$(".header-lower").addClass("sticky");
  		} else {
  			 $(".header-lower").removeClass("sticky");
  	}})

    if ($(window).width() < 769) {
        $(window).on("scroll", function() {
          if($(window).scrollTop() > 72 ){
              $("header").addClass("sticky");
          } else {
             $("header").removeClass("sticky");
        }})
    }
    /* mob menu open/close */

    $('.burger').on('click', function(){
      $('.mob-menu').addClass('open');
      $('.burger').css('display', 'none');
      $('.close-menu').css('display', 'block');
      $('.menu-item').on('click', function(){
        $('.mob-menu').removeClass('open');
        $('.burger').css('display', 'block');
        $('.close-menu').css('display', 'none');
      })
        $(window).on("scroll", function() {
        if($(window).scrollTop() > 10 ){
           $('header').addClass('sticky');
        } else {
           $('header').removeClass('sticky');
      }})
    })
    $('.close-menu').on('click', function(){
      $('.mob-menu').removeClass('open');
      $('.burger').css('display', 'block');
      $('.close-menu').css('display', 'none');
    })
    $('.burger, .close-menu, .mob-menu a').on('click', function(){
      $("html, body, .wrapper").toggleClass("noScroll");
    })

    /* read more section function*/

  $('.more').on('click', function(event) {
      event.preventDefault();
      $(this).siblings('.longtext').children('.moretext').slideToggle(400);
      $(this).children('p').children('span').toggle();
      $(this).children('img').toggleClass('rotate');
  });

  /* key figures slider mobile*/
  var $status = $('.slideNumber');
  var $slickElement = $('.key-slick');

  $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
  });
  $slickElement.slick({
      infinite: false,
      dots: true,
      arrows: true,
      prevArrow: $("#figurePrev"),
      nextArrow: $("#figureNext")
  });

  /* awards slider */
  $('.awards-slider').slick({
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: $("#awardPrev"),
    nextArrow: $("#awardNext")
  });
    /* quotes slider */
    $('.slick-carousel').slick({
      // autoplay: true,
      autoplaySpeed: 2000,
      arrows: true
  	});
    $('.slick-carousel .slick-next').append('<img src="assets/arrow-right.svg">');
    $('.slick-carousel .slick-prev').append('<img src="assets/arrow-left.svg">');

    $('.mobile-slick-carousel').slick({
      // autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      prevArrow: $("#quotePrev"),
      nextArrow: $("#quoteNext")
    });
    /* gallery */

    $('#projects-gallery').lightGallery({
      thumbnail:true,
      animateThumb: false,
      showThumbByDefault: false
    });

    $('.loadmore').on('click', function(){
      $('#projects-gallery .col-lg-3').slideUp(400);
      $('#projects-gallery .col-lg-3').slideDown(400);
      $('.loadmore').css('display', 'none');
    })

    /* video gallery */

    $('#video-gallery').lightGallery({
      // subHtmlSelectorRelative: true
    });
  	    /* smooth scroll to id */

  			$('.menu-item').click(function(){
  	      $('html, body').animate({
  	           scrollTop: $( $(this).attr('href') ).offset().top - 100
  	      }, 800);
  	      return false;
  	  });
      //
  	  //   $('a[href^="#"]').click(function(){
  	  //     $('html, body').animate({
  	  //         scrollTop: $( $(this).attr('href') ).offset().top - 100
  	  //     }, 800);
  	  //     return false;
  	  // });

})
