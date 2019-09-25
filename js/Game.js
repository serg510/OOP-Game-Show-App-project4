/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = 'null';
     }
     /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game */
     createPhrases(){
        return [
            new Phrase("Breathe Through the Pain, It Always Gets Easier with Time"), 
            new Phrase("Bring Home The Bacon"),
            new Phrase("Bread always falls buttered side down"),
            new Phrase("Better to have loved and lost than never to have loved at all"),
            new Phrase("Absolute power corrupts absolutely"),
            
          ]
     }
 };