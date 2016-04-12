(function ($) {
"use strict";

/*--
	Mobile Menu
------------------------*/
$('.mobile-menu nav').meanmenu({
	meanScreenWidth: "990",
	meanMenuContainer: ".mobile-menu",
	onePage: true,
});
/*--
	Header Search
-----------------------------------*/
$( ".header-search .search" ).on('click',function() {
  $( ".search-form" ).slideToggle( "fast" );
});
$(".panel-heading a").on("click", function(){
	$(".panel-heading a").removeClass("active");
	$(this).addClass("active");
});
/*--
	Menu Stick
-----------------------------------*/
if ($(".sticker")[0]){
	$('.sticker');
	$(window).on('scroll',function(){
		var wind_scr = $(window).scrollTop();
		var window_width = $(window).width();
		var head_w = $('.sticker').height();
		if (window_width >= 10) {
			if(wind_scr < 400){
				if($('.sticker').data('stick') === true){
					$('.sticker').data('stick', false);
					$('.sticker').stop(true).animate({opacity : 0}, 300, function(){
						$('.sticker').removeClass('stick slideDown');
						$('.sticker').stop(true).animate({opacity : 1}, 300);
					});
				}
			} else {
				if($('.sticker').data('stick') === false || typeof $('.sticker').data('stick') === 'undefined'){
					$('.sticker').data('stick', true);
					$('.sticker').stop(true).animate({opacity : 0},300,function(){
						$('.sticker').addClass('stick slideDown');
						$('.sticker.stick').stop(true).animate({opacity : 1}, 300);
					});
				}
			}
		}
	});
};	
/*--
	One Page Nav
-----------------------------------*/
var top_offset = $('.main-menu').height() - -60;
$('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrollOffset: top_offset,
});
/*--
	Smooth Scroll
-----------------------------------*/
$('.scroll-down, .mean-nav ul li a').on('click', function(e) {
	e.preventDefault();
	var link = this;
	$.smoothScroll({
	  offset: -100,
	  scrollTarget: link.hash
	});
});	
/*--
	Home Nivo Slider
-----------------------------------*/
$('#mainSlider').nivoSlider({
	directionNav: false,
	animSpeed: 500,
	slices: 18,
	pauseTime: 5000,
	pauseOnHover: false,
	controlNav: false,
	prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
	nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
});
/*--
	Home Carousel
-----------------------------------*/
$(".home-slider").owlCarousel({
    items:1,
	autoplay: false,
    loop: true,
});
/*--
	Testimonial Carousel
-----------------------------------*/
$(".testimonial-slider").owlCarousel({
    items:1,
	autoplay: false,
    loop: true,
});
/*--
	Testimonial Slick Carousel
-----------------------------------*/
 $('.testimonial-text-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  draggable: false,
  fade: true,
  asNavFor: '.slider-nav'
});
/*--
	Testimonial Slick Carousel as Nav
-----------------------------------*/
$('.testimonial-image-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial-text-slider',
  dots: true,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '40px',
  responsive: [
    {
      breakpoint: 767,
      settings: {
		dots: false,
        centerPadding: '0px',
      }
    },
    {
      breakpoint: 420,
      settings: {
		autoplay: true,
		dots: false,
		slidesToShow: 1,
		centerMode: false,
      }
    }
  ]
});
/*--
	Portfolio Filter
-----------------------------------*/
$('#portfolio').mixItUp();
/*--
	Scroll Up
------------------------*/
$.scrollUp({
	scrollText: '<i class="fa fa-chevron-up"></i>',
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade'
});
/*--
	Magnific Popup
-----------------------------------*/
$('.sin-screenshot a, .portfolio-hover a, .home-5 .single-photo .hover a').magnificPopup({
	type:'image',
	gallery: {
	  enabled: true
	},
	mainClass: 'mfp-with-zoom',
});
/*--
	Fun Fact
-----------------------------------*/
$('.funfacts, #about-area').appear(function() {
    $('.timer').countTo();
});	
/*--
	Count Down
-----------------------------------*/
$('[data-countdown]').each(function() {
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function(event) {
	$this.html(event.strftime('<span class="cdown day"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>Sec</p></span>'));
	});
});

	
})(jQuery);	