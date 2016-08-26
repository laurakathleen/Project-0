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

	$(document).keydown(function(e){
		if (e.which === 37) {
			console.log('left');
			$(plane).css('margin-right', '10%');
		} else if (e.which === 39) {
			console.log('right');
			$(plane).css('margin-left', '10%');
		} else {
			e.preventDefault();
		}

	})

})