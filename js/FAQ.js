$(function(){

	$('.answer').hide();

	$('.question').on('click', function(){
		$(this).next('.answer').slideToggle();
	})

});