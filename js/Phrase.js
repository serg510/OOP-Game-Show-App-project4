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
// go thru each letter of the pharseArr and create and <Li>
// added the respective class to each item
// then appended to the dom
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
    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
     
    checkLetter(letter){
      if(this.phrase.includes(letter)){
         return true;
      }else {
         return false;
      }

    };

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
   
    showMatchedLetter(letter){
       const phraseLi = document.querySelectorAll('#phrase > ul > li');
       
          if(this.checkLetter(letter) === true){
             for(let i =0; i < phraseLi.length; i++){
                if(phraseLi[i].textContent === letter ){
                  phraseLi[i].classList.remove('hide');
                  phraseLi[i].classList.add('show');
                  
                }
             }
            

          }
       
      
    };
 }