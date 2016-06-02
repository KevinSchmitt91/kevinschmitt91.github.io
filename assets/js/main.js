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
    if (window_top > div_top) {
        $('.navbar').addClass('navbar-fixed-top');
        $('.navbar-brand').fadeTo("fast",1);
        $('#navbar-anchor').height($('.navbar').outerHeight());
    } else {
        $('.navbar').removeClass('navbar-fixed-top');
        $('.navbar-brand').fadeTo("fast",0);
        $('#navbar-anchor').height(0);
    }
}

/**
	* ruft die function sticky_relocate auf
	*/
$(function() {
    $(window).scroll(sticky_relocate);
    sticky_relocate();
});



