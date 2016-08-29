<!--
Creator: <Name>
Location: SF
-->

<img src="Img/wireframe.JPG">

#Model a Race Game with OOP

### User Stories & Game Mechanics
1. A track is set up with planes ready to race.
2. Players move horizontally across the gameBoard to be the first to cross the finishLine.
3. The first player to cross wins the game!

### Data Structures for Racing Game (Properties & Methods)

**Track**

* track template (string)
* reset (function- constructor)
* hasWon (function- based on which player crosses the finishLine first)
* celebrate (function- banner wave)

**Players**

* players 1 & 2 (constructor)
* whoWon (comparison function to other players)
* movements (functions, booleans)
* onLeft, onRight, onUp, onDown
* noMove (function)

### Development Stories

1. On load, track is ready.
  * Create HTML structure and CSS to display and style a track.

2. A user starts game, using left, right, up, down keys to steer.
  * Add click event listener so that:
     - the car responds to buttons pressed on keyboard (onLeft (keydown), onRight (keydown), onUp (keydown), onDown (keydown))
     - car does not move without buttons pressed on keyboard
     - when crosses finish line, race ends (finishLine)

4. When a player finishes the race:
  * display who has won (hasWon)
  * Restart for new player/reset for new game (button)


###Potential Challenges / Development Questions

1. How to make more than 1 player an option?
3. Use pixels to determine car movements?
4. Using constructors for the right components of the game?
5. Top scores to stay on page despite new games/new players?
