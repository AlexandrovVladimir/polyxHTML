$(document).ready(function() {
	if($(window).width() > '1500') {
		var movement = 25;
		var height = movement / $(window).height();
		var width = movement / $(window).width();
		$(".visual").mousemove(function(e){
			var pageX = e.pageX - ($(window).width() / 2);
			var pageY = e.pageY - ($(window).height() / 2);
			var newvalueX = width * pageX * -1 - 25;
			var newvalueY = height * pageY * -1 - 50;
			$('.visual').css("background-position", newvalueX + "px  " + newvalueY + "px");
		});
	}
});