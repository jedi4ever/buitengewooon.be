
$(document).ready( function(){
	
	$(".thumbnail").click(function () {
		$("#photosmall").attr('src',$(this).attr('highres'));
		$("#photosmall").attr('title',$(this).attr('title'));

	});
	
	$(".thumbnail").hover(function () {
		$("#photosmall").attr('src',$(this).attr('highres'));
		$("#photosmall").attr('title',$(this).attr('title'));

	});

	$("a[href^='http:']").not("[href*='buitengewooon.be']").attr('target','_blank');
	$("form").attr('target','_blank');

	
});
