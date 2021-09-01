import Character from "./character.js";

// methods =
// takeDamage (will decrease health)
// levelUp (increase level by 1 and increase stats by 2)
// heal (will increase health)
// changeTurn (will change playerOneTurn to opposite and playerTwoTurn to opposite)
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
    
  }
  
}