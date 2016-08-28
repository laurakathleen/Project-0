//Testing to see if push is working

var x = $('#x');
var o =  $('#o');
var $plane = $('.plane-icon');
//constructor for all types of tokens- Obstacles & Boosts:
function Token(option) {
		this.symbol = option.symbol;
	}
//instances created from Token:
var obstacle = new Token({symbol: '<p>X</p>'});
var boost = new Token({symbol: '<p>O</p>'});

$(document).ready(function(){
	//test to make sure file is working:
	console.log("Sanity check!");
	
	//set interval so that every second, an obstacle is dropped:
	//window.setInterval(1000);
	
	//function to literally drop the obstacle: (set to start on btn click for now)
	//$('.drop-obstacle-btn').on('click', dropObstacle(){

	//})

	//define dropObstacle function
	function dropObstacle(){
		x.slideDown('slow');
		window.setInterval(1000);
	}
	dropObstacle();

	$("body").keydown(function(e){
		if (e.which === 39) {
			//move right
			console.log('right');
			$('.plane-icon').each(function() {
				//get position of the plane
				var planeRPosition = $('.plane-icon').position();
				var planeRight = $('.plane-icon').position().left;
				//if the position of the plane is less than or equal to 220px on the right (parent div width), keep moving; else stop movement
				if (planeRight <= 220) {
	   		 		$(this).css({ left: $(this).position().left + 10 });
	   		 		planeRPosition + 10;
   		 		}
			});
		} else if (e.which === 37) {
			//move left
			console.log('left');
			$('.plane-icon').each(function() {
				//get position of plane
				var planeLPosition = $('.plane-icon').position();
				var planeLeft = $('.plane-icon').position().left;
				//if the position of the plane is greater than or equal to -240px on the left (parent div width), keep moving; else stop movement
				if (planeLeft >= -240) {
    			$(this).css({ left: $(this).position().left - 10 });
    				planeLPosition - 10;
	   		 	}
			});
		}
	})

})