import Character from "./character.js";

// methods =
// takePotion(will increase stat depending on potion type)
// level up = when character's experience goes up by 10 points. starts at 0, whenever you defeat a character, your experience should go up by like 5 points. when your experience reaches 10 points then it calls levelUp()
// this.tempscore = 0, when experienceDifference increases to 10, then levelUp and set experienceDifference = 0

export default class Game {
  constructor (playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.playerOneTurn = true;
    this.playerTwoTurn = false;
  }
  changeTurn () {
    if (this.playerOneTurn) {
      this.playerOneTurn = false;
      this.playerTwoTurn = true;
    } else {
      this.playerOneTurn = true;
      this.playerTwoTurn = false;
    }
  }
  
  
}