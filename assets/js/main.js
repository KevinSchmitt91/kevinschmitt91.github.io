/*
	Name:		KS-0.0.1.js
	Version:	0.0.1
	Author:		Kevin Schmitt
	Datum:		16.02.2016
*/

/* ===================================================== */

/*
	Funktion für scrollende Hintergrundbilder
	-> section[data-type="background"]
	-> speed="number"
*/
$(function() {

	// Cache the window object
	var $window = $(window);

	// Parallax background effect
	$('section[data-type="background"]').each(function(){

		var $bgobj = $(this); // assigning the object

		$(window).scroll(function() {

			//scroll the background at var speed
			//the yPs is a negative value because we're scrolling

			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			// Put together our final background position
			var coords = '50% ' + yPos + 'px';

			// Move the background
			$bgobj.css({backgroundPosition: coords});
		}); // end window scroll
	});
});


/**
 * macht die Navbar nachdem sie den oberen Rand des Bildschirms erreich hat, fixed-top
 * wenn Sie den Anchor Punkt (navbar-anchor) wieder am oberen Bildschirm Rand hat, wie die
 * Navbar wieder statisch. (<div class="#navbar-anchor"></div> muss in der HTML Page enthalten sein)
 */
function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#navbar-anchor').offset().top;

    navbar_opacity(window_top, div_top);

    if (window_top > div_top) {
        $('.navbar').addClass('navbar-fixed-top');
        $('#navbar-anchor').height($('.navbar').outerHeight());
    } else {
        $('.navbar').removeClass('navbar-fixed-top');
        $('#navbar-anchor').height(0);
    }

}

/**
* fades the navbar-brand in and out if the window_top > div_top or window_top < div_top
**/
function navbar_opacity(window_top, div_top) {
	if (window_top > div_top) {
		$(".navbar-brand").fadeIn("slow");
	}else {
		$(".navbar-brand").fadeOut("slow");
	}
}

// blendet den back-zo-zop button aus und ein
function backToTopFadeIn() {
	var window_top = $(window).scrollTop();
    var div_top = $('#hero').offset().top;

    console.log(window_top);
    console.log(div_top);

    if(window_top > div_top) {
	    $(".back-to-top").fadeIn("slow");
    }else{
	    $(".back-to-top").fadeOut("slow");
    }
}

/**
	* ruft die function sticky_relocate und backToTopFadeIn
	*/
$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
    $(window).scroll(backToTopFadeIn);
    backToTopFadeIn();
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//toogle fullscreen navbar overlay
function openNav() {
	var navbar = document.getElementById("myNav");
	var bsNavbar = document.getElementById("bsNav");
	navbar.style.height = "100%";
	console.log(bsNavbar.classList.contains("navbar-fixed-top"));
	if (bsNavbar.classList.contains("navbar-fixed-top")) {
		bsNavbar.style.display= "none";
	}
}

function closeNav() {
	var navbar = document.getElementById("myNav");
	var bsNavbar = document.getElementById("bsNav");
	navbar.style.height = "0%";
	setTimeout(function displayBSnavbar() {
		console.log(bsNavbar.classList.contains("navbar-fixed-top"));
		if (bsNavbar.classList.contains("navbar-fixed-top")) {
			bsNavbar.style.display= "block";
		}
	},500);

}
