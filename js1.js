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

			var button = document.createElement("button");
				button.innerHTML = "Hue Value";

			var body = document.getElementsByTagName("body")[0];
				body.appendChild(button);

				button.addEventListener ("hover", function() {
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
// get horizontal position from event
// get width of screen
// divide position by width to get proportion
// saturationvalue = proportion * 100
// 
// get vertical position from event
// get height of screen
// divide position by height to get proportion
// lightnessValue = proportion * 100
// 
// plug in three values to css using string concatenation: +
// change css rule for body with jquery
// 
// vertical position measures lightness
	// if lightness is less than 50
	//if (  ) {
	// change all typeface to white
	//}
	// if lightness is more than 50
	//if (   ) {
	// change all typeface to black
	//}
// 
/*
$( document ).ready(function() {
	var yPosition, screenHeight, 
		saturationRatio, saturationValue, 
		cssValue, brightnessValue, hueValue;
		// initialize brightness value
		brightnessValue = 50;
	$('body').click(
		function(event) {
			// get y value of click
			yPosition = event.pageY;
			// get height of body element (screen)
			screenHeight = $('body').height();
			// divide yposition by height to get relative amount
			saturationRatio = yPosition/screenHeight;
			// multiple that by 100 to get saturation value
			saturationValue = saturationRatio*100;
			// if the cursor is on the top half of the screen
			if ( saturationValue > 50 ) {
			// increase the brightness by 5%
				brightnessValue = brightnessValue + 5;
			}
			// if the cursor is on the bottom half of the screen
			if ( saturationValue < 50 ) {
			// decrease the brightness by 5%
				brightnessValue = brightnessValue - 5;
			}
			hueValue = Math.random() * 360;
			// embed saturation value in css rule
			cssValue = 'hsl('+hueValue+', '+saturationValue+'%, '+ (brightnessValue)%100 +'%)';
			// change the css value to color w new saturation.
			$('body').css('background-color', cssValue);
		}
	);
});
});

*/