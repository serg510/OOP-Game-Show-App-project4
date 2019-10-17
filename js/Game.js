/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     constructor(){
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
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
            new Phrase("There is no trying only doing")
          ]
     }
        /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */

    getRandomPhrase() {
        return  this.phrases[Math.floor(Math.random() * this.phrases.length )];
    };
     /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    //hides screen overlay
    //calls the getRandomPhrase()
    //add phrase to display by calling addPhraseToDisplay()in (Phrase class)
    //the selected phrase should be stored in the Games activePhrase property
    startGame(){
        const overlay = document.getElementById('overlay');
         overlay.style.display='none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    };
    handleInteraction(){

        // checkForWin(){};

        // removeLife(){};

        // gameOver(){}

    }
 };