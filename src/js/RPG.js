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
    
  }
  
}
