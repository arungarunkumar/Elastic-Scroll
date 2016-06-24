// your js here
//window.console && console.log("Welcome to box starter");
$(document).ready(function() {
	
	function addClass_function() {
		if ($('.wrap ul li.active').hasClass("active") ) {
			$(".wrap ul li.active").each(function(i) {
				var t = $(this);
				setTimeout(function(){ 
					t.addClass('animateIt'); 
				}, (i+1) * 0);
				setTimeout(function(){ 
					t.removeClass('animateIt'); 
				}, (i+1) * 100);
			});
		}
	}
	function reverseaddClass_function() {
		if ($('.wrap ul').hasClass("down") ) {
			$('li.inview').removeClass("animateIt");
			 $($('.wrap ul li.active').get().reverse()).each(function(i) {
				var t = $(this);
				setTimeout(function(){
					t.addClass('reverseanimate');
				}, (i+1) * 0);
				setTimeout(function(){
					t.removeClass('reverseanimate'); 
				}, (i+1) * 125);
			});
		}
	}
	if ( $('li.inview').hasClass("active") ) {
		//do something it does have the protected class!
		$('li.inview').addClass("active");
	}else {
		$('li.inview').addClass("active2");
		$('li.inview').removeClass("up");
	}
	
	/*$('ul').waypoint(function(direction) {
		console.log("Waypoint moved "+direction);
		if(direction==='down'){
			$("ul").addClass("down");
		}
		else if(direction==='up'){
			$("ul").addClass("up");
		}
	});*/
	$('ul li.inview').waypoint(function(direction) {
		if (direction === 'down') {
			//console.log("moved down");
			$('ul').addClass("up");
			$('ul').removeClass("down");
		} else if (direction === 'up') {
			//console.log("moved up");
			$('ul').addClass("down");
			reverseaddClass_function();
			$('ul').removeClass("up");
			
			// To Detect whether user stop scrolling
			(function( $ ) {
				console.log("hai");
				$(function() {
					var $output = $( "ul" );
					$( window ).scroll(function() {
						console.log("scroll()");
						clearTimeout( $.data( this, "scrollCheck" ) );
						$('ul').addClass("stop");
						$.data( this, "scrollCheck", setTimeout(function() {
							$('ul').removeClass("stop");
						}, 425) );
					});
				});
			})( jQuery );
		}

	}, { offset: '100%' });
	
	$(function () {
		$('li.inview').bind('inview', function (event, visible) {
			
			if (visible) {
				$(this).addClass("active");
				$(this).removeClass("active2");
				addClass_function();
			} else {
				reverseaddClass_function();
				$(this).addClass("active2");
				$(this).removeClass("active");
				$(this).removeClass("animateIt2");
			}
		});
	});
	$('.heart').click(function() {
		$(this).toggleClass('active');
		$('.voteCount').toggleClass('active');
		var count = 0;
		var button = document.getElementById("likes");
		var display = document.getElementById("counter");

		button.onclick = function(){
			count++;
			display.innerHTML = count;
		};
	});
	
	// Menu 
	function menuremoveClass_function() {
		$('.menu').removeClass('mactive');
		$(".nav").fadeOut('slow', function () {
			$('html').removeClass('menuOpen');
			$('.mobileMenu').removeClass('mactive');
		});
		$(".nav li").each(function(i) {
			var t = $(this);
			setTimeout(function(){
				t.removeClass('act'); 
			}, (i+1) * 100);
		});	
	}
	function menuaddClass_function() {
		$('.menu').addClass('mactive');
		$('.mobileMenu').addClass('mactive');
		$(".nav").show( function() {
			$(".nav li").each(function(i) {
				var t = $(this);
				setTimeout(function(){ 
					t.addClass('act'); 
				}, (i+1) * 100);
			});
		});
	}
	$(".menu").click(function() {
		$('html').addClass('menuOpen');
		if ($('.menu').hasClass('mactive')) {
			menuremoveClass_function();
			return false;
		}
		else {
			menuaddClass_function();
		}
	});
	
	$('#smooth').bind('click', function() {
		menuremoveClass_function();
		$('.wrap ul').removeClass();
		$('.wrap ul').addClass('smooth');
	});
	$('#smoothFly').bind('click', function() {
		menuremoveClass_function();
		$('.wrap ul').removeClass();
		$('.wrap ul').addClass('smoothFly');
	});
	$('#grow').bind('click', function() {
		menuremoveClass_function();
		$('.wrap ul').removeClass();
		$('.wrap ul').addClass('grow');
	});
	$('#flag').bind('click', function() {
		menuremoveClass_function();
		$('.wrap ul').removeClass();
		$('.wrap ul').addClass('flag');
	});
	$('#wave').bind('click', function() {
		menuremoveClass_function();
		$('.wrap ul').removeClass();
		$('.wrap ul').addClass('wave');
	});
	
});
