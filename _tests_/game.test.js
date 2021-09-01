import Game from "./../src/js/game.js";
import Character from "./../src/js/character.js";

describe(Game, () => {
  
  test('should create object game with two characters/players, and playerOneTurn and playerTwoTurn', () => {
    let characterOne = new Character('Chad', 'warrior');
    let characterTwo = new Character('Rosa', 'monk');
    let game = new Game (characterOne, characterTwo)
    expect(game.playerOne).toEqual(characterOne);
    expect(game.playerTwo).toEqual(characterTwo);
    expect(game.playerOneTurn).toEqual(true);
    expect(game.playerTwoTurn).toEqual(false);
  })
})

// 