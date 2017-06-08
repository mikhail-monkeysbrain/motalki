$(function(){
	$('.prew__small').click(function(){
		var link = $(this).attr('data-link')
				src = $(this).attr('src');
		$('.prew__big').attr('href', link);
		$('.prew__big img').attr('src', link);
	});
	$('.video').click(function(){
		var link = $(this).attr('data-link')
				src = $(this).attr('src');
		$('.prew__big').attr('href', link);
		$('.prew__big img').attr('src', src);
	});
});

$( function() {
  $( ".tabs" ).tabs();
} );
$( function() {
  $( ".tabs__faq" ).tabs();
} );

$( function() {
	$('.accordeon-js').find('.ac_head').click(function(){
	    $(this).next().stop().slideToggle();
	}).next().stop().hide();
	$('.ac_head').click(function(){
	    $(this).toggleClass("js_up");
	});
});

$(document).ready(function(){
  $(".slide-one").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    navText: [],
    items:1
  });
}); 



$(function(){
	  if($(window).width() < 1002) {
			$('.tabs__wrapper').unwrap();
			$('.tabs__wrapper').addClass('accordion');
			$('.tabs__wrapper').addClass('container');
			$('.tab').detach();
			$( ".tabs" ).tabs( "destroy" )
	  } else {
			$('.tabs__wrapper').removeClass('container');
	  }
	$(window).resize(function(){
	  if($(window).width() < 1002) { //1002 = 1024 - width scroll (22px)
			$('.tabs__wrapper').unwrap();
			$('.tabs__wrapper').addClass('container');
			$('.tab').detach();
			$( ".tabs" ).tabs( "destroy" )
	  } else {
			$('.tabs__wrapper').removeClass('container');
	  }
	});
});


$( function() {
  $( ".accordion" ).accordion({
	  animate: 0,
	});
} );

/*
$(function(){
	  if($(window).width() < 768) {
	  	$('.order_list').owlCarousel({
		    loop:false,
		    nav:true,
		    margin:0,
		    navText: [],
		    items:1
  	});
	  } else {
			$('.order_list').owlCarousel('destroy');
	  }
});
*/