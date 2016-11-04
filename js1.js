$( document ).ready(function(){
	$('h3').hover(
		function() {
			$('h3').css('background-color', '#FFFF00');
		}
		);
	$('a').click(
		function(){
			$('a').css('display', 'none');
		})
	$('body').mousemove(
		function(){
			$('body').css('position', 'relative');
			$('body').css('left', '30px');
		})
});