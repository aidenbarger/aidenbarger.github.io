$(document).ready(function(){
	$('h3').hover(
		function() {
			$('h3').css('background-color', '#FFFF00');
		}
		);
	$('h1').click(
		function(){
			$('h1').css('display', 'none');
		})
	$('body').mousemove(
		function(){
			$('body').css('position', 'relative');
			$('body').css('left', '30px');
		})
});