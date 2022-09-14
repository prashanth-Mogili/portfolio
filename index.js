const phrases = ["Software Engineer...","Mentor...","Human Being..."];

const content = document.querySelector("#dynText");
console.log(content);
let letterIndex = 0;
let phraseIndex =0;


function printLetters(phrase){    
    if(letterIndex == phrase.length)
    {
        //clear letters which have been typed
        clearLetters();
    }
    else if(letterIndex < phrase.length){
    content.textContent += phrase.charAt(letterIndex);
    letterIndex+=1;
    setTimeout(function(){
        printLetters(phrase);
    },100)
    }
}


function clearLetters(){
    if(letterIndex == -1)
    {
        phraseIndex = (phraseIndex+1) % phrases.length;
        console.log(phraseIndex,letterIndex);
        letterIndex = 0;
        printLetters(phrases[phraseIndex]);
    }

    else if(letterIndex>-1)
    {
        let updatedPhrase = "";
        updatedPhrase += phrases[phraseIndex].slice(0,letterIndex);
        // for(let index=0;index<letterIndex;index++)
        //     updatedPhrase += phrases[phraseIndex].charAt(index);
        console.log(updatedPhrase);
        content.textContent = updatedPhrase;
        letterIndex-=1;
        setTimeout(clearLetters,100);

    }
}


printLetters(phrases[phraseIndex]);


