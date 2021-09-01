import Character from "./character.js";

// methods =
// takePotion(will increase stat depending on potion type)
// battle, player and enemy character. 
// Game should a space for enemies
// this.enemy = character
// method adds an enemy, [goblin, orc, troll, dragon] = character types, with specific stats
// method changeEnemy is just going to make this.enemy = character
// battle would be in Game would be dependent if playerOneTurn = true, battle will effect playerOne, takeDamage on the player and on the enemy, 


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
  
  addEnemy (character) {
    this.enemy = character;
  }

  playersAttack () {

  }
  
}