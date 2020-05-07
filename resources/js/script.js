$(document).ready(function(){
	// Scrolling
    $('.js--scroll-to-home').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000);
    });
    
    $('.js--scroll-to-locations').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-locations').offset().top}, 1000);
    });
});