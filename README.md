<!--
Creator: <Name>
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

#Model a Race Game with OOP

### User Stories & Game Mechanics
1. A track is set up with cars ready to race.
2. Users go one at a time to race their car through the track.
3. Players are scored based on how long they took to complete.
4. Random coins throughout the track to boost players' scores.
5. Obstacles on the course hurt your time and therefore players' scores.
6. Whichever player has the best time (aka highest score) at the end wins.

### Data Structures for Racing Game (Properties & Methods)

**Track**

* track template (string)
* reset (function- constructor)
* timer (function)
* hasWon (function- based on a timer comparison b/w players)
* celebrate (function- banner wave)

**Boost**

* image (string- constructor (different values to obstacles)
* boostHit (function)
* disappearOnBoost (function- constructor)

**Obstacles**

* image (string- constructor (different values to coins)
* obstacleHit (function)
* disappearOnHit (function- constructor)

**Players**

* newPlayer (constructor)
* whoWon (comparison function to other players)
* movements (functions, booleans)
* onLeft, onRight, onUp, onDown
* noMove (function)

### Development Stories

1. On load, track is ready.
  * Create HTML structure and CSS to display and style a track.
  * Display timer.
  * Have user click button indicating the number of players. (constructor to create each player? & for loop to instruct how many new games to play)

2. A user starts game, using left, right, up, down keys to steer.
  * Add click event listener so that:
     - the car responds to buttons pressed on keyboard (onLeft (keydown), onRight (keydown), onUp (keydown), onDown (keydown))
     - car does not move without buttons pressed on keyboard
     - when crosses finish line, race ends for that player (acrossLine)
     - next player starts their turn

3. If player hits a booster/obstacle:
  + Booster:
    - 	when player hits a booster, subtract -2 seconds from their overall time to increase their score (boostHit())
    - 	have booster disappear once hit (eventlistener?)
    - 	make sure all boosters are same color/image (HTML/CSS)
    -  use Math.random to send out either a booster or obstacle
    
 + Obstacle:
  - when player hits an obstacle, add 2 seconds from their overall time to increase their score (obstacleHit())
  		- display message on screen so player knows there was an obstacleHit
  -	 have obstacle disappear once hit (eventlistener?)
  - make sure all obstacles are same color/image (HTML/CSS)
  - use Math.random to send out either a booster or obstacle

4. Player finishes race and the score is calculated based on time, boosters hit, and obstacles hit
  * calculate score so that time is main score, and substract -2 seconds for boosterHits and +2 seconds for obstaclesHit
  * hasWon function to compare the scores amongst the different players to determine who won
  * Restart for new player/reset for new game (button)

6. Top Scores:
	* Display top scores and player name in corner


###Potential Challenges / Development Questions

1. How to make more than 1 player an option?
2. How to trigger a +/- 2 seconds when the car hits the booster/obstacle?
3. Use pixels to determine car movements?
4. Using constructors for the right components of the game?
5. Top scores to stay on page despite new games/new players?
