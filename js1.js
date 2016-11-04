$(document).ready(function(){
	$('h3').hover(
		function() {
			$('h3').css('background-color', '#FFFF00');
		}
		);
	$('h3').click(
		function(){
			$('h3').css('display', 'none');
		});
	$('h1').mousemove(
		function(){
			$('h1').css('position', 'relative');
			$('h1').css('left', '30px');
		});
});