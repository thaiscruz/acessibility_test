// on dom ready
$(document).ready(function(){

	$("#buttonSearch").hover(function () {
		$(".input-search").animate({width:'show'},400);
	});
	$("#buttonSearch").focus(function () {
		$(".input-search").animate({width:'show'},400);

	});
});

