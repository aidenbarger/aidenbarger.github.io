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
	$('body').mousemove(
		function(){
			$('body').css('position', 'relative');
			$('body').css('left', '30px');
		});
});