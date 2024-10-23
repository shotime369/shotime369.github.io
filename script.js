$(document).ready(function(){

function ImageSwitcher(choices, i) {
	i = 0;
	
	this.Next = function() {
		hide_current_image();
		show_next_image();
	}
	
	var hide_current_image = function() {
		if(choices){
			choices[i].style.visibility = "hidden";
			i += 1;
		}
	}
	var show_next_image = function() {
		if(choices){
			if(i == (choices.length)) {
				i = 0;
			}
			choices[i].style.visibility = "visible";
		}
	}
}
  
    var bottom = $(".bottom");
	var shirts = $(".shirt");
	var shoes = $(".shoes");

	var shirt_picker = new ImageSwitcher(shirts);
	document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };
	
	var bottom_picker = new ImageSwitcher(bottom);
	document.getElementById("bottom_button").onclick = function() {bottom_picker.Next(); };
  
  	var shoes_picker = new ImageSwitcher(shoes);
	document.getElementById("shoes_button").onclick = function() {shoes_picker.Next(); };
	

});

  $("#shirt_button").click(function(){
  $("#shirt-menu").css("visibility", "visible"); 
  

  
  });