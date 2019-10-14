/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase(console.log('hello phrase'));
// const game = new Game(console.log('hello game'));

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
//   console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//   };
//   const game = new Game();
//   logPhrase(game.getRandomPhrase());
//   logPhrase(game.getRandomPhrase());
//   logPhrase(game.getRandomPhrase());
//   logPhrase(game.getRandomPhrase());
//   logPhrase(game.getRandomPhrase());
//step 7
// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();
//step 8 
// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

const game;
document.getElementById("btn__reset").addEventListener('click', () => {
    game = new Game;
    game.startGame()
});
document.getElementById("qwerty").addEventListener('click', () => {});