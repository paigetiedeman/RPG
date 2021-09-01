// Classes = character, player,
// character.js character would be a class,
// wizard high intelligence
// warrior high strength,
// monk high charisma
// player.js
// game.js

export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.experience = 0;
    this.health = 10;
    this.level = 1;
    this.strength = 0;
    this.intelligence = 0;
    this.charisma = 0;
  }
  makeWizard() {
    if (this.type === "wizard"){
      this.strength = 3;
      this.intelligence = 6;
      this.charisma = 1;
    }
  }
  makeWarrior() {
    if (this.type === "warrior"){
      this.strength = 8;
      this.intelligence = 2;
      this.charisma = 4;
    }
  }
  
}
