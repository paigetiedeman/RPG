import Game from "./../src/js/game.js";
import Character from "./../src/js/character.js";


describe(Game, () => {
  
  let game;
  let characterOne;
  let characterTwo;
  
  beforeEach(() => {
  characterOne = new Character('Chad', 'warrior');
  characterTwo = new Character('Rosa', 'monk');
  game = new Game(characterOne, characterTwo);
  })
  
  test('should create object game with two characters/players, and playerOneTurn and playerTwoTurn', () => {
    expect(game.playerOne).toEqual(characterOne);
    expect(game.playerTwo).toEqual(characterTwo);
    expect(game.playerOneTurn).toEqual(true);
    expect(game.playerTwoTurn).toEqual(false);
  })
  test('should change between playerOne and playerTwo turn', () => {
    game.changeTurn();
    expect(game.playerOneTurn).toEqual(false);
    expect(game.playerTwoTurn).toEqual(true);
  })
})

// 