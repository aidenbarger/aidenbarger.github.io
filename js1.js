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
	$('h3').mousemove(
		function(){
			$('h3').css('position', 'relative');
			$('h3').css('left', '30px');
		});
	$('img').mouseenter(
		function(){
			$('img').css('opacity', '0.5');
		});
	$('img').mouseleave(
		function(){
			$('img').css('opacity', '1.0');
		});
	$('h2').mouseenter(
		function(){
			$('h2').css('opacity', '1.0');
		});
	$('h2').mouseleave(
		function(){
			$('h2').css('opacity', '0.0');
		});
});