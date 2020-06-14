$(document).ready(function(){
	// Scrolling
    $('.js--scroll-to-home').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000);
    });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});