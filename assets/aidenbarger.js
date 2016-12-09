---
layout: page
title: Pool
permalink: /pool/
---

// declare namespace object
var content = {};

// declare and initialize image prototype object
content.image = {

    // how many image instances have been created
    count: 0,

    // index number
    index: null,

    // image content
    string: null,

    // jquery reference to page element
    element: null,

    // define new image instance (content and index)
     define: function() {
        
     },

    // place image instance in document
    place: function() {
        $('#pool').append("<span class=\"image\" id=\"Skull Print One"+ this.index +"\">"+ this.string +"</span>");

        this.element = $( '#image'+this.index ).eq(0);

        this.element.sortable();
    },

    // change content of image instance
    change: function(newImage) {

        this.string = newImage;

        this.element.image(newImage);
    }
} 