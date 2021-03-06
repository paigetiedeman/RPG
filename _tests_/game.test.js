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
test('should change playerOneTurn from true to false and playerTwoTurn from false to true', () => {
  game.changeTurn();
  expect(game.playerOneTurn).toEqual(false);
  expect(game.playerTwoTurn).toEqual(true);
})
test('should change playerOneTurn from false to true and playerTwoTurn from true to false', () => {
  game.changeTurn();
  game.changeTurn();
  expect(game.playerOneTurn).toEqual(true);
  expect(game.playerTwoTurn).toEqual(false);
})

test('should add enemy character to game property', () => {
  let characterThree = new Character('Goblin', 'enemy');
  characterThree.makeType();
  game.addEnemy(characterThree);
    expect(game.enemy).toEqual(characterThree);
  })
  
  test('should allow player to decrease enemy health', () => {
    let characterThree = new Character('Goblin', 'enemy');
    characterThree.makeType();
    characterOne.makeType();
    game.addEnemy(characterThree);
    game.playersStrAttack();
    expect(game.enemy.health).toBeLessThan(10);
  })

  test('should deal damage that is difference between enemy strength and current player strength if PlayerOneTurn is true', () => {
    let characterThree = new Character('Goblin', 'enemy');
    characterThree.makeType();
    characterOne.makeType();
    game.addEnemy(characterThree);
    game.playersStrAttack();
    expect(characterThree.health).toEqual(6);
  })
  
  test('should deal damage that is difference between enemy strength and current player strength if playerTwoTurn is true', () => {
    let characterThree = new Character('Goblin', 'enemy');
    characterThree.makeType();
    characterTwo.makeType();
    game.addEnemy(characterThree);
    game.changeTurn();
    game.playersStrAttack();
    expect(characterThree.health).toEqual(10);
  })

  test('should allow player to decrease enemy health', () => {
    let characterThree = new Character('Goblin', 'enemy');
    characterThree.makeType();
    characterOne.makeType();
    game.addEnemy(characterThree);
    game.playersIntAttack();
    expect(game.enemy.health).toBeLessThan(10);
  })

  test('should deal damage that is difference between enemy intelligence and current player intelligence if PlayerOneTurn is true', () => {
    let characterThree = new Character('Goblin', 'enemy');
    characterThree.makeType();
    characterOne.makeType();
    game.addEnemy(characterThree);
    game.playersIntAttack();
    expect(characterThree.health).toEqual(9);
  })
  
  test('should deal damage that is difference between enemy intelligence and current player intelligence if playerTwoTurn is true', () => {
    let characterThree = new Character('Goblin', 'enemy');
    characterThree.makeType();
    characterTwo.makeType();
    game.addEnemy(characterThree);
    game.changeTurn();
    game.playersIntAttack();
    expect(characterThree.health).toEqual(7);
  })

  test('should allow player to decrease enemy health', () => {
    let characterThree = new Character('Goblin', 'enemy');
    characterThree.makeType();
    characterOne.makeType();
    game.addEnemy(characterThree);
    game.playersChaAttack();
    expect(game.enemy.health).toBeLessThan(10);
  })

  test('should deal damage that is difference between enemy charisma and current player charisma if PlayerOneTurn is true', () => {
    let characterThree = new Character('Goblin', 'enemy');
    characterThree.makeType();
    characterOne.makeType();
    game.addEnemy(characterThree);
    game.playersChaAttack();
    expect(characterThree.health).toEqual(6);
  })
  
  test('should deal damage that is difference between enemy charisma and current player charisma if playerTwoTurn is true', () => {
    let characterThree = new Character('Goblin', 'enemy');
    characterThree.makeType();
    characterTwo.makeType();
    game.addEnemy(characterThree);
    game.changeTurn();
    game.playersChaAttack();
    expect(characterThree.health).toEqual(3);
  })
})

