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
	const acc = $(".acc");
	const weapon = $(".weapon");
	const hair = $(".hair");
	const eyes = $(".eyes");
	const tattoo = $(".tattoo");

	const shirt_picker = new ImageSwitcher(shirts);
	document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };

	const bottom_picker = new ImageSwitcher(bottom);
	document.getElementById("bottom_button").onclick = function() {bottom_picker.Next(); };

	const shoes_picker = new ImageSwitcher(shoes);
	document.getElementById("shoes_button").onclick = function() {shoes_picker.Next(); };

	const acc_picker = new ImageSwitcher(acc);
	document.getElementById("acc_button").onclick = function() {acc_picker.Next(); };

	const weapon_picker = new ImageSwitcher(weapon);
	document.getElementById("weapon_button").onclick = function (){weapon_picker.Next(); };

	const hair_picker = new ImageSwitcher(hair);
	document.getElementById("hair_button").onclick = function() {hair_picker.Next(); };

	const eyes_picker = new ImageSwitcher(eyes);
	document.getElementById("eyes_button").onclick = function() {eyes_picker.Next(); };

	const tattoo_picker = new ImageSwitcher(tattoo);
	document.getElementById("tattoo_button").onclick = function() {tattoo_picker.Next(); };
});

  $("#shirt_button").click(function(){
  $("#shirt-menu").css("visibility", "visible"); 
  

  
  });