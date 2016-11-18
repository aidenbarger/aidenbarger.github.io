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
	// if user hovers on 'hue' button
	// hue of page changes to new random value
	// proportion = get random number between 0 and 1 - Math.random()
	// hueValue = multiply proportion by 360 
	// 

	var yPosition, screenHeight, saturationRatio, saturationValue, 
		cssValue, brightnessValue, hueValue, xPosition, screenWidth, brightnessRatio;
		
		brightnessValue = 50;

	$('body').click(
		function(event){
			xPosition = event.pageX;
			screenWidth = $('body').width();
			saturationRatio = xPosition/screenWidth;
			saturationValue = saturationRatio * 100;

			yPosition = event.pageY;
			screenHeight = $('body').height();
			brightnessRatio = yPosition/screenHeight;
			brightnessValue = brightnessRatio * 100;

			hueValue = Math.random() * 360;
				// embed saturation value in css rule
				cssValue = 'hsl('+hueValue+', '+saturationValue+'%, '+ (brightnessValue)%100 +'%)';
				// change the css value to color w new saturation.
				$('body').css('background-color', cssValue);

			$('button').hover(
				function(event){
					$('body').css('background-color', hueValue);
				});

			if(brightnessValue >= 50){
				$('body').css('color', 'black');
			}
			if(brightnessValue < 50){
				$('body').css('color', 'white');
			}

	});

});
