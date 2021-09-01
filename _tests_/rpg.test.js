import Character from "./../src/js/RPG.js";

describe(Character, () => {
  test('should create a character object with name, type, level, health, experience', () => {
    let character = new Character("Bob", "wizard");
    expect(character.name).toEqual("Bob");
    expect(character.type).toEqual("wizard");
    expect(character.level).toEqual(1);
    expect(character.health).toEqual(10);
    expect(character.experience).toEqual(0);
  })

  test('should set default stats for wizard type', () =>{
    let character = new Character("Bob", "wizard")
    expect(character.strength).toEqual(3);
    expect(character.intelligence).toEqual(6);
    expect(character.charisma).toEqual(1);
  })
})