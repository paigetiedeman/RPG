import Character from "./character.js";

// methods =
// levelUp (increase level by 1 and increase stats by 2)
// takePotion(will increase stat depending on potion type)
// 

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