// your js here
//window.console && console.log("Welcome to box starter");
$(document).ready(function() {
	
	function addClass_function() {
		if ($('.wrap ul li.active').hasClass("active") ) {
			$(".wrap ul li.active").each(function(i) {
				var t = $(this);
				setTimeout(function(){ 
					t.addClass('animateIt'); 
				}, (i+1) * 10);
				setTimeout(function(){ 
					t.removeClass('animateIt'); 
				}, (i+1) * 110);
			});
		}
	}
	if ( $('li.inview').hasClass("active") ) {
		//do something it does have the protected class!
		$('li.inview').addClass("active");
	}else {
		$('li.inview').addClass("active2");
	}
	$(function () {
		$('li.inview').bind('inview', function (event, visible) {
			if (visible) {
				console.log('visible');
				$(this).addClass("active");
				$(this).removeClass("active2");
				addClass_function();
			} else {
				$(this).addClass("active2");
				$(this).removeClass("active");
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
	/*$('.mobileMenu .nav li a').bind('click', function() {
		menuremoveClass_function();
		//return false;
	});*/
	
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
