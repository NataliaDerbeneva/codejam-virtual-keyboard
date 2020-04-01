const body = document.querySelector('body');

window.addEventListener("onload", makeKeyboardTable());

function makeKeyboardTable(){

    const keyboardWrapper = document.createElement("div");
    body.append(keyboardWrapper);
    keyboardWrapper.classList.add("keyboard__wrapper");

    const numRows = 5;
    const numCols = [14,15,13,13,9];
    let numElements = 0;
        for(let i=0; i<numRows; i++){
            numElements += numCols[i];
        }
    
    let fragment = document.createDocumentFragment();
    let div = document.createElement('button');
    div.classList.add('key');
    
    for (let i = 0; i < numElements; i++){
        fragment.appendChild(div.cloneNode(true));
    }   

    keyboardWrapper.appendChild(fragment);

    let allButtons = keyboardWrapper.querySelectorAll('.key');
    allButtons[13].classList.add('key_long');
    allButtons[14].classList.add('key_short');
    allButtons[28].classList.add('key_short');
    allButtons[29].classList.add('key_long');
    allButtons[41].classList.add('key_middle');
    allButtons[42].classList.add('key_long');
    allButtons[54].classList.add('key_middle');
    allButtons[58].classList.add('key_very-long');


    
}


class Button{
    constructor (keyCode, en, ru){
        this.keyCode = keyCode;
        this.en = en;
        this.ru = ru;
    }

    get keyCode(){
        return this.keyCode;
    }

    get keyNameEn() {
        return this.en;
    }

    get keyNameRu() {
        return this.ru;
    }
}