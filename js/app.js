/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const phrase = new Phrase(console.log('hello phrase'));
// const game = new Game(console.log('hello game'));

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);
const game = new Game();
game.phrases.forEach((phrase, index) => {
  console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
});


document.getElementById("btn__reset").addEventListener('click', () => {});
document.getElementById("qwerty").addEventListener('click', () => {});