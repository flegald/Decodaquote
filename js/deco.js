$(function(){
	


// Navigation
	
	$('#title').on('click', function(){
		$('#aboutUs').hide();
		$('#faq').hide();
		$('#tips').hide();
		$('#orderTabs').hide();
		$('#homePage').fadeIn();
	})

	$('#hamburger').on('click', function(){
		$('#dropDown').slideToggle();
	});

	$('#toTop').on('click', function(){
		$('html, body').animate({scrollTop: 0 });
	})

	$('#toAboutUs').on('click', function(){
		$('#homePage').hide();
		$('#faq').hide();
		$('#orderTabs').hide();
		$('#tips').hide();
		$('#aboutUs').fadeIn();
		if ($('#hamburger').css('display') !== 'none'){
			$('#dropDown').slideToggle();
		};
	})

	$('#toFaq').on('click', function(){
		$('#homePage').hide();
		$('#orderTabs').hide();
		$('#aboutUs').hide();
		$('#tips').hide();
		$('#faq').fadeIn();
		if ($('#hamburger').css('display') !== 'none'){
			$('#dropDown').slideToggle();
		};
	})

	$('#toTips').on('click', function(){
		$('#homePage').hide();
		$('#orderTabs').hide();
		$('#aboutUs').hide();
		$('#faq').hide();
		$('#tips').fadeIn();
		if ($('#hamburger').css('display') !== 'none'){
			$('#dropDown').slideToggle();
		};
	})

	$('#HomeButt').on('click', function(){
		$('#aboutUs').hide();
		$('#faq').hide();
		$('#orderTabs').hide();
		$('#tips').hide();
		$('#homePage').fadeIn();
		if ($('#hamburger').css('display') !== 'none'){
			$('#dropDown').slideToggle();
		};
	});

		$('#toOrderTabs').on('click', function(){
			$('#aboutUs').hide();
			$('#faq').hide();
			$('#orderTabs').hide();
			$('#tips').hide();
			$('#homePage').hide();
			$('#orderTabs').fadeIn();
			if ($('#hamburger').css('display') !== 'none'){
				$('#dropDown').slideToggle();
			};
		});

	// Hide all sections on load
	$('#aboutUs').hide();
	$('#faq').hide();
	$('#tips').hide();
	$('#orderTabs').hide();


});