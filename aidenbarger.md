---
layout: page
title: aidenbarger
permalink: /aidenbarger/
---
<ul>
	<li id="new_image">New Image</li>
</ul>
<div id="aiden">
    

</div>
<script type="image/javascript">
	$("#new_image").mousedown(
		function() {
			var newimage = Object.create(content.image);
			newimage.define(prompt('enter your image'));
			newimage.place();
		}
	);
</script>



<style>
.image {
	display:block;
    position: absolute;
    z-index: 2;
}
</style>