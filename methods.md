---
layout: page
title: Methods
permalink: /methods/
---

<script>

var yPosition, screenHeight, saturationRatio, saturationValue, 
		cssValue, brightnessValue, hueValue, xPosition, screenWidth, brightnessRatio;
		
		brightnessValue = 50;

var characters = {
	count: 0,
	appear: function(menu) {
		// select a geometric char from array
		// var menu = ['•','◊','∆'];

		// select random integer from 0-2
		var dart = Math.random();
		dart = Math.floor(dart * menu.length );
		var character = menu[dart];

		var idName = 'char-' + this.count++;
		// insert at the beginning of the body element
		$('body').prepend('<span class="character" id="' + idName+ '">'  + character + '</span>');
		// style it with css?
	},

	disappear: function() {
		$('.character').hide();
	},
	move: function(destX, destY, count) {
		var whichChar = Math.floor(Math.random()*characters.count);
		alert(characters.count);
		$('.character').animate(
			{ top: destY, left: destX },
		  	3000
		);
	},

	newColor: function(characters) {
		newColor = Math.random() * 360;
				// embed saturation value in css rule
				cssValue = 'hsl('+hueValue+',' +saturationValue+'%,' + (brightnessValue)%100 +'%)';
				// change the css value to color w new saturation.
				$('body').css('characters', cssValue);
	},

	newSize: function(characters) {
		newSize = (Math.random() + 50) * 350 + '%';
			var ranSize = 50 + Math.random() * 350 + "%)";
			$('body').css('characters', cssValue);
	}

}
characters.appear(['•','◊','∆']);
$('body').click( function(event) {
	characters.move(event.pageX, event.pageY)
	characters.newColor();
	characters.newSize();
})



</script>

<style>
.character {
	position: absolute;
	font-size: 60px;
}
</style>