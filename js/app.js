var x = $('#x');
var o =  $('#o');
var plane = $('.plane-icon');
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

	//function to literally drop the obstacle: (set to start on btn click for now)
	//$('.drop-obstacle-btn').on('click', dropObstacle(){
		//set interval so that every second, an obstacle is dropped:
		//window.setInterval(1000);
	//})

	//define dropObstacle function
	//function dropObstacle(){
	//	x.slideDown('slow');
	//	window.setInterval(1000);
	//}
	//dropObstacle();

	$(document).keydown(['#plane-icon'],function(event){
		if (event.which === 39) {
			console.log('right');
			$('#plane-icon').css('margin-right', '40%');
		} else if (event.which === 37) {
			console.log('left');
			$('#plane-icon').css('margin-left', '40%');
		} else {
			event.preventDefault();
		}

	})

})