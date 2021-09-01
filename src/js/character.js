// Classes = character, player,
// character.js character would be a class,
// player.js
// game.js
import Game from './game.js';

export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.experience = 0;
    this.health = 10;
    this.level = 1;
    this.progress = 0;
  }
  makeType() {
    if (this.type === "wizard"){
      this.strength = 3;
      this.intelligence = 6;
      this.charisma = 1;
    } else if (this.type === "warrior"){
      this.strength = 8;
      this.intelligence = 2;
      this.charisma = 4;
    } else if (this.type === "monk"){
      this.strength = 2;
      this.intelligence = 4;
      this.charisma = 7;
    } else {
      this.strength = 4;
      this.intelligence = 1;
      this.charisma = 0;
    }
  }
  takeDamage(damage){
    this.health -= damage;
  }

  heal(damage){
  this.health += damage;
  }

  levelUp(){
    if (this.progress >= 10){
      this.level += 1;
      this.intelligence += 2;
      this.charisma += 2;
      this.strength += 2;
      this.progress = 0
    }
  }
  


}

