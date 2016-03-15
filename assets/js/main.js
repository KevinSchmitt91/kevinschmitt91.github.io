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

/* 
	Funktion für ein aufklappendes Dropdown
	Menu beim drüberfahren des Mauscursors
	-> .dropdown .dropdown-menu
*/
$(document).ready(function(){
    $('.dropdown').hover(function(){ 
	  $('.dropdown-toggle', this).trigger('click');
	}); 
});


/* 
	Funktion zum abfragen ob der oberste Punkt eines
	Elementes, den unteren Bildschirmrand erreicht hat
*/
function isScrolledIntoView(elem) {
    var $window = $(window),
        docViewTop = $window.scrollTop(),
        docViewBottom = docViewTop + $window.height(),
        elemTop = $(elem).offset().top,
        elemBottom = elemTop + $(elem).outerHeight();
        
    return ((( elemTop >= docViewTop) && (elemTop <= docViewBottom)) || ((elemBottom >= docViewTop) && (elemBottom <= docViewBottom)) ) ;
}

/* 
	Funktion zum abfragen ob der oberste Punkt eines
	Elementes, größer als der obersten Punkt des Bildschirmrands
	ist
*/
function isOnTopOfView(elem) {
    var $window = $(window),
        docViewTop = $window.scrollTop(),
        elemTop = $(elem).offset().top;
        
    return docViewTop > elemTop;
}

/* 
	Funktion zum abfragen ob der oberste Punkt eines
	Elementes, kleiner als der oberste Rand des
	Bildschirms ist
*/
function isOverTopOfView(elem) {
    var $window = $(window),
        docViewTop = $window.scrollTop(),
        elemTop = $(elem).offset().top;
        
    return docViewTop < elemTop;
}

/* 
	Funktion für die Navigations Leiste 
	Opacity 0.7 --> Opacity 1
	Opacity 1   --> Opacity 0.7
*/
$(window).scroll(function() {
	
	if(isOnTopOfView('.welcome')) {
		$('.navbar-inverse').css('background', 'rgba(245,245,220,1)');
	}
	
	if(isOverTopOfView('.welcome')) {
		$('.navbar-inverse').css('background', 'rgba(245,245,220,0.7)');
		$(".navbar-inverse").hover(function() {
		  $(this).css('background', 'rgba(245,245,220,1)');
		});
	}
})


/* 
	Funktion für eine animierte Section 
	im Zusammenspiel mit der CSS Klasse
	onview -> .section-animate.onview
*/
$(window).scroll(function() {

    $('.section-animate').each(function() {
        if (isScrolledIntoView(this)) {
            $(this).addClass('onview');
        }
    });
    

});

/* 
	Funktion für eine animierte Bilder 
	im Zusammenspiel mit der CSS Klasse
	onview -> .picture-animate.onview
	mit einem Delay von 800
*/
$(window).scroll(function() {

    $('.picture-animate').each(function() {
        if (isScrolledIntoView(this)) {
            $(this).addClass('onview').delay(800);
        }
    });
    

});

/* 
	Funktion für das einblenden der Buttons
	im Zusammenspiel mit der CSS Klasse
	onview -> .btn-animate.onview
*/
$(window).scroll(function() {

    $('.btn-animate').each(function() {
        if (isScrolledIntoView(this)) {
            $(this).addClass('onview');
        }
    });
    

});

