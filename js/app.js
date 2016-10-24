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
	console.log("Sanity check");

		$("body").keydown(function(e){
		if (e.which === 68) {
			console.log("keydown player1");
			//move right
			$('#player1').each(function() {
				//get position of the plane
				var player1RPos = $('#player1').position(),
				player1Right = $('#player1').position().left;
				console.log(player1RPos);
				//if the position of the plane is less than or equal to 220px on the right (parent div width), keep moving; else stop movement
				if (player1Right < 805) {
	   		 		$(this).css({ left: $(this).position().left + 10 });
	   		 		player1RPos + 10;
   		 		}
			});
		}
		})

		$("body").keydown(function(e){
		if (e.which === 76) {
			console.log("keydown player 2");
			//move right
			$('#player2').each(function() {
				//get position of the plane
				var player2RPos = $('#player2').position();
				var player2Right = $('#player2').position().left;
				console.log(player2Right);
				//if the position of the plane is less than or equal to 220px on the right (parent div width), keep moving; else stop movement
				if (player2Right < 805) {
	   		 		$(this).css({ left: $(this).position().left + 10 });
	   		 		player2RPos + 10;
   		 		}
			});
		}
		})


		function hasWon(){
			var oneLeftPosition = $('#player1').position().left;
			var twoLeftPosition = $('#player2').position().left;
			var finishLine = $(gameBoard).position().left;
			if (oneLeftPosition == finishLine){
				alert('Player 1 wins!');
			} else if (twoLeftPosition == finishLine){
				alert('Player 2 wins!');
			}
		}
})
