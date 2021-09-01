import Character from "./../src/js/RPG.js";

describe(Character, () => {
  test('should create a character object with name, type', () => {
    let character = new Character("Bob", "wizard")
    expect(character.name).toEqual("Bob")
    expect(character.type).toEqual("wizard")
  }) 
})