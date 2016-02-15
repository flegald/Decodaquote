$(function(){
	
	$('#dropDown').hide();
	$('#hamburger').on('click', function(){
		$('#dropDown').slideToggle();
	});

	$('#toTop').on('click', function(){
		$('html, body').animate({scrollTop: 0 });
	})


});