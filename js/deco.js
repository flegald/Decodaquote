$(function(){
	
// Navigation
	$('#dropDown').hide();
	$('#hamburger').on('click', function(){
		$('#dropDown').slideToggle();
	});

	$('#toTop').on('click', function(){
		$('html, body').animate({scrollTop: 0 });
	})

	$('#toAboutUs').on('click', function(){
		$('#homePage').hide();
		$('#aboutUs').show();
		$('#dropDown').slideToggle();
	})

	$('#HomeButt').on('click', function(){
		$('#aboutUs').hide();
		$('#homePage').show();
		$('#dropDown').slideToggle();
	})
	// Hide all sections on load
	$('#aboutUs').hide();


});