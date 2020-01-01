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
            new Phrase("Breathe Through the Pain"), 
            new Phrase("Bring Home The Bacon"),
            new Phrase("Bread always falls buttered side down"),
            new Phrase("Lo que sera sera"),
            new Phrase("Absolute power corrupts absolutely"),
            new Phrase("Say hello to my little friend")
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
    
  /**
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't
won */
//turn letters to show
// document.querySelectorAll('.letter').forEach(i => i.classList.add('show'));
// game.checkForWin();

//select and save to a var the letters in the phase
    checkForWin(){
        //select and save to a var the letters in the phase
        const boardLetters = document.querySelectorAll('.letter').length;
        //select and save to a var the letters that are shown
        const shownLetters = document.querySelectorAll('.show').length;
        //compare them to see if the whole phrase is readable
        if(boardLetters === shownLetters){
            
            return this.gameOver(true);
        } else {
            return false;
        }
    };

    /**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */
removeLife(){
    
    const scoreboard = document.querySelectorAll('.tries img');
    for(let heart of scoreboard){
        if(heart.getAttribute('src') === 'images/liveHeart.png'){
           heart.src = 'images/lostHeart.png';
           this.missed ++;
           break;
           
        }
        
        
    }
    if(this.missed === 5 ){
        return this.gameOver(false);
    }
};
//step 9
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {
        let overlay = document.getElementById('overlay');
        let finalMessage = document.getElementById("game-over-message");

        if(gameWon){
            overlay.style.display = 'flex';
            overlay.classList.remove('lose')
            overlay.classList.add('win');
            finalMessage.textContent ='You Win, Great Job!';
            //console.log('you won');
        }else if (!gameWon){
            overlay.style.display ='flex';
            overlay.classList.add('lose');
            finalMessage.textContent ='You lose, Better Luck Next Time';
            //console.log('you lost');
        }
        game.reset();
        
    };
    //step 10
    /**
     * Handles onscreen keyboard button clicks
     * @param (HTMLButtonElement) button - The clicked button element
     */
    handleInteraction(){
        //get letter and check if its on the active phrase 
        
         const matchedLetter = this.activePhrase.checkLetter(event.target.textContent);
        
        if(matchedLetter){
                this.activePhrase.showMatchedLetter(event.target.textContent);
                event.target.classList.add('chosen');
                event.target.disabled = 'true';
                this.checkForWin();
        // show the letter if true else remove a life     
              }
        else if(!matchedLetter){
            if(event.target.className === 'key'){
            event.target.disabled = 'true';
            event.target.classList.add('wrong');
            this.removeLife();
            
        }
    }

    }

//     Remove all `li` elements from the Phrase `ul` element.
//      Enable all of the onscreen keyboard buttons and update each to use the `key` CSS class,
//      and not use the `chosen` or `wrong` CSS classes.
//      Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of
//      the gameboard to display the `liveHeart.png` image.
        
        reset(){
            //reset li
            const li = document.querySelectorAll('#phrase li');
            li.forEach( li => {
                li.remove()})
            //reset chosen & wrong class
            const keys = document.querySelectorAll('#qwerty button');
            keys.forEach(key => {
                key.removeAttribute('disabled');
                key.className = 'key';
                });
            //reset lives 
            const lives = document.querySelectorAll('.tries img');
                lives.forEach( life => {
                    life.setAttribute('src','images/liveHeart.png');
                })
                
        }

 };