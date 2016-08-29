var plane = document.getElementsByClassName('plane-icon');
var start = document.getElementsByClassName('start-btn');
var obstacle = document.getElementsByClassName('obstacle-icon');;
var boost = document.getElementsByClassName('boost-icon');
var gameBoard = document.getElementsByClassName('game-board');
var img = new Image();
var tokePosition;
var tokensDropped = 0;
var counter = 0;

$(document).ready(function(){
	//test to make sure file is working:
	console.log("Sanity check!");

	/**********PLANE MOVEMENT***********/
	$("body").keydown(function(e){
		if (e.which === 39) {
			//move right
			$(plane).each(function() {
				//get position of the plane
				var planeRPos = $(plane).position();
				var planeRight = $(plane).position().left;
				//if the position of the plane is less than or equal to 220px on the right (parent div width), keep moving; else stop movement
				if (planeRight <= 200) {
	   		 		$(this).css({ left: $(this).position().left + 10 });
	   		 		planeRPos + 10;
   		 		}
			});
		} else if (e.which === 37) {
			//move left
			$(plane).each(function() {
				//get position of plane
				var planeLPos = $(plane).position();
				var planeLeft = $(plane).position().left;
				//if the position of the plane is greater than or equal to -240px on the left (parent div width), keep moving; else stop movement
				if (planeLeft >= -240) {
    			$(this).css({ left: $(this).position().left - 10 });
    				planeLPos - 10;
	   		 	}
			});
		}
	})

	/***********END OF PLANE MOVEMENT**************/

	//rollTheDice to see if an obstacle or a boost will drop:
	function rollTheDice(){		
		tokenPosition = Math.floor(Math.random() * 20);
		if (tokenPosition % 2 == 0){
			obstacle = $(img).attr('src', '' + 'Img/danger.jpg').appendTo($(gameBoard)).slideDown('slow');
			$(obstacle).attr('class', 'obstacle-icon');			
			$(obstacle).css('top', '0px');
			$(obstacle).css('width', '50px');
			$(obstacle).css('height', 'auto');
			getTokenStartPos(obstacle);
		} else {
			boost = $(img).attr('src', '' + 'Img/boost.png').appendTo($(gameBoard)).slideDown('slow');			
			$(boost).attr('class', 'boost-icon');
			$(boost).css('top', '0px');
			$(boost).css('width', '25px');
			$(boost).css('height', 'auto');
			getTokenStartPos(boost);
		}
	}
	
	//getTokenStartPos to figure where to drop the obstacle/boost:
	function getTokenStartPos(token){
		var tokenPos = Math.floor(Math.random() * 20);
		if (tokenPos <= 5){
			$(token).css('margin-left', '90px');
		} else if (tokenPos > 5 && tokenPos <= 10){
			$(token).css('margin-left', '180px');
		} else if (tokenPos > 10 && tokenPos <= 15){
			$(token).css('margin-left', '270px');
		} else if (tokenPos > 15 && tokenPos <= 20){
			$(token).css('margin-left', '360px');
		} else {
			$(token).css('margin-left', '440px');
		}
		dropIt(token);
	}

	//dropIt actually drops either an obstacle or boost:
	function dropIt(token){
		var positionOfToken = token.position().top;
		if (positionOfToken > 0 && positionOfToken < 260){
			setInterval(function(){
				$(token).css({ top: $(token).position().top + 10});
				}, 200);
				return positionOfToken;
			}
	}


	//clicking the start button triggers rollTheDice and starts the timer:
	$(start).on('click', function startIt(){
		var start = new Date;
		setInterval(function() {
    		$('.Timer').text((new Date - start) / 1000 + " Seconds");
	}, 1000);
		rollTheDice();
	})

	function checkCollision(token){
		if ($(plane).position.left == $(token).position.left){
			console.log("COLLISION!!!!!");
		}
	}
})

