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
		$('#faq').hide();
		$('#tips').hide();
		$('#aboutUs').show();
		$('#dropDown').slideToggle();
	})

	$('#toFaq').on('click', function(){
		$('#homePage').hide();
		$('#aboutUs').hide();
		$('#tips').hide();
		$('#faq').show();
		$('#dropDown').slideToggle();
	})

	$('#toTips').on('click', function(){
		$('#homePage').hide();
		$('#aboutUs').hide();
		$('#faq').hide();
		$('#tips').show();
		$('#dropDown').slideToggle();
	})

	$('#HomeButt').on('click', function(){
		$('#aboutUs').hide();
		$('#faq').hide();
		$('#tips').hide();
		$('#homePage').show();
		$('#dropDown').slideToggle();
	})
	// Hide all sections on load
	$('#aboutUs').hide();
	$('#faq').hide();
	$('#tips').hide();


});