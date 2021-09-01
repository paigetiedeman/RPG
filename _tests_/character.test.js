import Character from "./../src/js/character.js";

describe(Character, () => {
  test('should create a character object with name, type, level, health, experience, progress', () => {
    let character = new Character("Bob", "wizard");
    expect(character.name).toEqual("Bob");
    expect(character.type).toEqual("wizard");
    expect(character.level).toEqual(1);
    expect(character.health).toEqual(10);
    expect(character.experience).toEqual(0);
    expect(character.progress).toEqual(0);
  })

  test('should set default stats for wizard type', () =>{
    let character = new Character("Bob", "wizard")
    character.makeType();
    expect(character.strength).toEqual(3);
    expect(character.intelligence).toEqual(6);
    expect(character.charisma).toEqual(1);
  })
  test('should set default stats for warrior type', () =>{
    let character = new Character("Chad", "warrior")
    character.makeType();
    expect(character.strength).toEqual(8);
    expect(character.intelligence).toEqual(2);
    expect(character.charisma).toEqual(4);
  })

  test('should set default stats for monk type', () =>{
    let character = new Character("Rosa", "monk")
    character.makeType();
    expect(character.strength).toEqual(2);
    expect(character.intelligence).toEqual(4);
    expect(character.charisma).toEqual(7);
  })

  test('should set default stats for enemy type', () =>{
    let character = new Character("Goblin", "enemy");
    character.makeType();
    expect(character.strength).toEqual(4);
    expect(character.intelligence).toEqual(1);
    expect(character.charisma).toEqual(0);
  })
  test('should decrease health in current player by argument', () => {
    let character = new Character("Rosa", "monk");
    character.takeDamage(1);
    expect(character.health).toEqual(9)
  })

  test('should increase health in current player by argument', () => {
    let character = new Character("Rosa", "monk");
    character.heal(1);
    expect(character.health).toEqual(11);
  })

  test('should increase stats by 2 and level by 1 and set progress back to 0 if progress is equal to 10 or more', () => {
    let character = new Character("Rosa", "monk");
    character.makeType();
    character.progress = 10
    character.levelUp();
    expect(character.strength).toEqual(4);
    expect(character.intelligence).toEqual(6);
    expect(character.charisma).toEqual(9);
    expect(character.level).toEqual(2);
    expect(character.progress).toEqual(0);
  })

  test('should not increase stats by 2 and level by 1 and set progress back to 0 if progress is less than 10', () => {
    let character = new Character("Rosa", "monk");
    character.makeType();
    character.progress = 9
    character.levelUp();
    expect(character.strength).toEqual(2);
    expect(character.intelligence).toEqual(4);
    expect(character.charisma).toEqual(7);
    expect(character.level).toEqual(1);
    expect(character.progress).toEqual(9);
  })


})