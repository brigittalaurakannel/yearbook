$(function(){

  	  /* highlight menu item on scroll */


  	  $(window).scroll(function() {
  	      var position = $(this).scrollTop();

  	      $('section').each(function() {
  	          var target = $(this).offset().top - 500;
  	          var id = $(this).attr('id');

  	          if (position >= target) {
  	            // console.log(id + ":" + target);
  	              $('.header-items a').removeClass('active');
  	              $('.header-items a[href=\\#' + id + ']').addClass('active');
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

    /* read more section function*/

  $('.more').on('click', function(event) {
      event.preventDefault();
      $(this).siblings('.longtext').children('.moretext').slideToggle(400);
      $(this).children('p').children('span').toggle();
      $(this).children('img').toggleClass('rotate');
  });

    /* quotes slider */
    $('.slick-carousel').slick({
      infinite: false,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true
  	});
    $('.slick-carousel .slick-next').append('<img src="assets/arrow-right.svg">');
    $('.slick-carousel .slick-prev').append('<img src="assets/arrow-left.svg">');

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

    $('#video-gallery').lightGallery();
  	    /* smooth scroll to id */

  			$('.menu-item').click(function(){
  	      $('html, body').animate({
  	          scrollTop: 0
  	      }, 800);
  	      return false;
  	  });

  	    $('a[href^="#"]').click(function(){
  	      $('html, body').animate({
  	          scrollTop: $( $(this).attr('href') ).offset().top - 100
  	      }, 800);
  	      return false;
  	  });

})
