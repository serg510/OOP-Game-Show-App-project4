/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
     }
     /**
     * Display phrase on game board
     */
    addPhraseToDisplay(){
       const phraseUl = document.querySelector('#phrase ul');
       const phraseArr = this.phrase.split('');
       let html = '';

       phraseArr.forEach(character => {
          if(character !== ' '){
               html += `<li class="hide letter ${character}">${character}</li>`;
            } else {
                html += `<li class="hide space">${character}</li>`;
            }
       });
        phraseUl.innerHTML = html;
        return phraseUl;
    };
 }