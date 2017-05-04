$(document).ready(function(){
	$('.slider').slick({
	  mobileFirst: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: true,
	  infinite: true,
	  responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        arrows: true,
	      }
	    }
	  ]
	});
});