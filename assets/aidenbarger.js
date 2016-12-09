
// declare namespace object
var stuff = {};

// declare and initialize image prototype object
stuff.image = {

    // how many image instances have been created
    count: 0,

    // index number
    index: null,

    // image stuff
    string: null,

    // jquery reference to page element
    element: null,

    // define new image instance (stuff and index)
     define: function(entry) {
     	this.string = entry;

    		// increment total number of text instances
			content.image.count++;

			// use new count as index
			this.index = content.image.count;
        
     },

    // place image instance in document
    place: function() {
        $('#aidenbarger').append("<span class=\"image\" id=\"image"+ this.index +"\">"+ this.string +"</span>");
        $("#image").prop("src", $(this).val());

        this.element = $( '#image'+this.index ).eq(0);

        this.element.draggable();
    },

    // change stuff of image instance
    change: function(newImage) {

        this.string = newImage;

        this.element.image(newImage);
    }
} 