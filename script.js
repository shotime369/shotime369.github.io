$(document).ready(function(){

function ImageSwitcher(choices, i) {
	const show_next_image = function() {
		if(choices){
			if(i === (choices.length)) {
				i = 0;
			}
			choices[i].style.visibility = "visible";
		}
	};
	const hide_current_image = function() {
		if(choices){
			choices[i].style.visibility = "hidden";
			i += 1;
		}
	};
	i = 0;
	
	this.Next = function() {
		hide_current_image();
		show_next_image();
	}

}

	const bottom = $(".bottom");
	const shirts = $(".shirt");
	const shoes = $(".shoes");

	const shirt_picker = new ImageSwitcher(shirts);
	document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };

	const bottom_picker = new ImageSwitcher(bottom);
	document.getElementById("bottom_button").onclick = function() {bottom_picker.Next(); };

	const shoes_picker = new ImageSwitcher(shoes);
	document.getElementById("shoes_button").onclick = function() {shoes_picker.Next(); };
	

});

  $("#shirt_button").click(function(){
  $("#shirt-menu").css("visibility", "visible"); 
  

  
  });