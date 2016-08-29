var plane = document.getElementsByClassName('plane-icon');
var player2 = document.getElementById("player2");
var player1 = document.getElementById("player1");
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

/**********PLANE 1 MOVEMENT***********/
	$("body").keydown(function(e){
		if (e.which === 65) {
			console.log("keydown");
			$(player1).css('color', 'purple');
			//move right
			$(player1).each(function() {
				//get position of the plane
				var player1RPos = $(player1).position();
				var player1Right = $(player1).position().left;
				console.log(player1Right);
				//if the position of the plane is less than or equal to 220px on the right (parent div width), keep moving; else stop movement
				if (player1Right < 805) {
	   		 		$(this).css({ left: $(this).position().left + 5 });
	   		 		player1RPos + 5;
   		 		}
			});
		}
	})
	// 	} else if (e.which === 68) {
	// 		//move left
	// 		$(player1).each(function() {
	// 			//get position of plane
	// 			var player1LPos = $(player1).position();
	// 			var player1Left = $(player1).position().left;
	// 			//if the position of the plane is greater than or equal to -240px on the left (parent div width), keep moving; else stop movement
	// 			if (player1Left > 0) {
 //    			$(this).css({ left: $(this).position().left - 5 });
 //    				player1LPos - 5;
	//    		 	}
	// 		});
	// 	} else if (e.which === 87) {
	// 		//move up
	// 		$(player1).each(function() {
	// 			//get position of plane
	// 			var player1TPos = $(player1).position();
	// 			var player1Top = $(player1).position().top;
	// 			//if the position of the plane is greater than or equal to -240px on the left (parent div width), keep moving; else stop movement
	// 			if (player1Top > 45) {
 //    			$(this).css({ left: $(this).position().top - 5 });
 //    				player1TPos - 5;
	//    		 	}
	// 		});
	// 	}
	// })

	/***********END OF PLANE MOVEMENT**************/

	/**********PLANE 2 MOVEMENT***********/
	$("body").keydown(function(e){
		if (e.which === 39) {
			console.log("keydown");
			$(player2).css('color', 'purple');
			//move right
			$(player2).each(function() {
				//get position of the plane
				var player2RPos = $(player2).position();
				var player2Right = $(player2).position().left;
				console.log(player2Right);
				//if the position of the plane is less than or equal to 220px on the right (parent div width), keep moving; else stop movement
				if (player2Right < 805) {
	   		 		$(this).css({ left: $(this).position().left + 5 });
	   		 		player2RPos + 5;
   		 		}
			});
		}
	})
})
	// 	} else if (e.which === 37) {
	// 		//move left
	// 		$(player2).each(function() {
	// 			//get position of plane
	// 			var player2LPos = $(player2).position();
	// 			var player2Left = $(player2).position().left;
	// 			//if the position of the plane is greater than or equal to -240px on the left (parent div width), keep moving; else stop movement
	// 			if (player2Left > 250) {
 //    			$(this).css({ left: $(this).position().left - 5 });
 //    				player2LPos - 5;
	//    		 	}
	// 		});
	// 	} else if (e.which === 38) {
	// 		//move up
	// 		$(player2).each(function() {
	// 			//get position of plane
	// 			var player2TPos = $(player2).position();
	// 			var player2Top = $(player2).position().top;
	// 			//if the position of the plane is greater than or equal to -240px on the left (parent div width), keep moving; else stop movement
	// 			if (player2Top > 45) {
 //    			$(this).css({ left: $(this).position().top - 5 });
 //    				player2TPos - 5;
	//    		 	}
	// 		});
	// 	}
	// })

	// /***********END OF PLANE MOVEMENT**************/

	// //rollTheDice to see if an obstacle or a boost will drop:
	// function rollTheDice(){		
	// 	tokenPosition = Math.floor(Math.random() * 20);
	// 	if (tokenPosition % 2 == 0){
	// 		obstacle = $(img).attr('src', '' + 'Img/danger.jpg').appendTo($(gameBoard)).slideDown('slow');
	// 		$(obstacle).attr('class', 'obstacle-icon');			
	// 		$(obstacle).css('top', '0px');
	// 		$(obstacle).css('width', '50px');
	// 		$(obstacle).css('height', 'auto');
	// 		getTokenStartPos(obstacle);
	// 	} else {
	// 		boost = $(img).attr('src', '' + 'Img/boost.png').appendTo($(gameBoard)).slideDown('slow');			
	// 		$(boost).attr('class', 'boost-icon');
	// 		$(boost).css('top', '0px');
	// 		$(boost).css('width', '25px');
	// 		$(boost).css('height', 'auto');
	// 		getTokenStartPos(boost);
	// 	}
	// }
	
	// //getTokenStartPos to figure where to drop the obstacle/boost:
	// function getTokenStartPos(token){
	// 	var tokenPos = Math.floor(Math.random() * 20);
	// 	if (tokenPos <= 5){
	// 		$(token).css('margin-left', '90px');
	// 	} else if (tokenPos > 5 && tokenPos <= 10){
	// 		$(token).css('margin-left', '180px');
	// 	} else if (tokenPos > 10 && tokenPos <= 15){
	// 		$(token).css('margin-left', '270px');
	// 	} else if (tokenPos > 15 && tokenPos <= 20){
	// 		$(token).css('margin-left', '360px');
	// 	} else {
	// 		$(token).css('margin-left', '440px');
	// 	}
	// 	dropIt(token);
	// }

	// //dropIt actually drops either an obstacle or boost:
	// function dropIt(token){
	// 	var positionOfToken = token.position().top;
	// 	if (positionOfToken > 0 && positionOfToken < 260){
	// 		setInterval(function(){
	// 			$(token).css({ top: $(token).position().top + 10});
	// 			}, 200);
	// 			return positionOfToken;
	// 		}
	// }


	// //clicking the start button triggers rollTheDice and starts the timer:
	// $(start).on('click', function startIt(){
	// // 	var start = new Date;
	// // 	setInterval(function() {
 // //    		$('.Timer').text((new Date - start) / 1000 + " Seconds");
	// // }, 1000);
	// 	rollTheDice();
	// })

	// function checkCollision(token){
	// 	if ($(plane).position.left == $(token).position.left){
	// 		console.log("COLLISION!!!!!");
	// 	}
	// }
//})

