$(function() {

	$("#menu").on('click', function(){
		$(".nav").slideToggle(300, function() {
			$(this).toggleClass("nav-expanded").css('display', '');
		});
	});



});