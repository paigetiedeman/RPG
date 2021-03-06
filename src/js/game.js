import Character from "./character.js";

// methods =
// takePotion(will increase stat depending on potion type)
// battle, player and enemy character.
// Game should a space for enemies
// this.enemy = character
// method adds an enemy, [goblin, orc, troll, dragon] = character types, with specific stats
// method changeEnemy is just going to make this.enemy = character
// battle would be in Game would be dependent if playerOneTurn = true, battle will effect playerOne, takeDamage on the player and on the enemy,
// playersAttack: dependent on whose turn it is. two branches dependent on playerOneTurn is true or false. parameter would be which stat they use to attack, and then the damage would be the difference between the two characters stats.
// Math.abs()
// random chance of attack not working Math.random
// roll = 1+Math.floor Math.random() * 10; switch(roll) { case: 1 case:2 etc.,etc., to case:10}

export default class Game {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.playerOneTurn = true;
    this.playerTwoTurn = false;
  }
  changeTurn() {
    if (this.playerOneTurn) {
      this.playerOneTurn = false;
      this.playerTwoTurn = true;
    } else {
      this.playerOneTurn = true;
      this.playerTwoTurn = false;
    }
  }

  addEnemy(character) {
    this.enemy = character;
  }

  playersStrAttack() {
    let currentPlayerStat;
    if (this.playerOneTurn) {
      currentPlayerStat = this.playerOne.strength;
      
    } else {
      currentPlayerStat = this.playerTwo.strength;
    }
    let enemyStat = this.enemy.strength;
    let damage = currentPlayerStat - enemyStat;
    if (damage > 0) {
      this.enemy.takeDamage(damage);
    }
  }

  playersIntAttack() {
    let currentPlayerStat;
    if (this.playerOneTurn) {
      currentPlayerStat = this.playerOne.intelligence;
    } else {
      currentPlayerStat = this.playerTwo.intelligence;
    }
    let enemyStat = this.enemy.intelligence;
    console.log(currentPlayerStat);
    let damage = currentPlayerStat - enemyStat;
    if (damage > 0) {
      this.enemy.takeDamage(damage);
    }
  }

  playersChaAttack(){
    let currentPlayerStat;
    if (this.playerOneTurn){
      currentPlayerStat = this.playerOne.charisma;
    } else {
      currentPlayerStat = this.playerTwo.charisma;
    }
    let enemyStat = this.enemy.charisma;
    let damage = currentPlayerStat - enemyStat;
    if (damage > 0) {
      this.enemy.takeDamage(damage);
    }
  }
}
