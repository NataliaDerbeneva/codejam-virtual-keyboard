const keys = {
    'Backquote': {en: '\`', enShift: '~', ru: 'ё', ruShift: "Ё", type: "print"},
    'Digit1': {en: '1', enShift: '!', ru: '1', ruShift: '!', type: "print"},
    'Digit2': {en: '2', enShift: '@', ru: '2', ruShift: '\"', type: "print"},
    'Digit3': {en: '3', enShift: '#', ru: '3', ruShift: '№', type: "print"},
    'Digit4': {en: '4', enShift: '$', ru: '4', ruShift: ';', type: "print"},
    'Digit5': {en: '5', enShift: '%', ru: '5', ruShift: '%', type: "print"},
    'Digit6': {en: '6', enShift: '^', ru: '6', ruShift: ':', type: "print"},
    'Digit7': {en: '7', enShift: '&', ru: '7', ruShift: '?', type: "print"},
    'Digit8': {en: '8', enShift: '*', ru: '8', ruShift: '*', type: "print"},
    'Digit9': {en: '9', enShift: '(', ru: '9', ruShift: '(', type: "print"},
    'Digit0': {en: '0', enShift: ')', ru: '0', ruShift:')', type: "print"},
    'Minus': {en: '-', enShift: '_', ru: '-', ruShift:'_', type: "print"},
    'Equal': {en: '=', enShift: '+', ru: '=', ruShift:'+', type: "print"},
    'Backspace': {en: 'Backspace', enShift: 'Backspace', ru: 'Backspace', ruShift:'Backspace', type: "action"},
    'Tab': {en: 'Tab', enShift: 'Tab', ru: 'Tab', ruShift: 'Tab', type: "action"},
    'KeyQ': {en: 'q', enShift: 'Q', ru: 'й', ruShift: 'Й', type: "print"},
    'KeyW': {en: 'w', enShift: 'W', ru: 'ц', ruShift: 'Ц', type: "print"},
    'KeyE': {en: 'e', enShift: 'E', ru: 'у', ruShift: 'У', type: "print"},
    'KeyR': {en: 'r', enShift: 'R', ru: 'к', ruShift: 'К', type: "print"},
    'KeyT': {en: 't', enShift: 'T', ru: 'е', ruShift: 'Е', type: "print"},
    'KeyY': {en: 'y', enShift: 'Y', ru: 'н', ruShift: 'Н', type: "print"},
    'KeyU': {en: 'u', enShift: 'U', ru: 'г', ruShift: 'Г', type: "print"},
    'KeyI': {en: 'i', enShift: 'I', ru: 'ш', ruShift: 'Ш', type: "print"},
    'KeyO': {en: 'o', enShift: 'O', ru: 'щ', ruShift: 'Щ', type: "print"},
    'KeyP': {en: 'p', enShift: 'P', ru: 'з', ruShift: 'З', type: "print"},
    'BracketRight': {en: '[', enShift: '{', ru: 'х', ruShift: 'Х', type: "print"},
    'BracketLeft': {en: ']', enShift: '}', ru: 'ъ', ruShift: 'Ъ', type: "print"},
    'Backslash': {en: '\\', enShift: '|', ru: '\\', ruShift: '/', type: "print"},
    'Delete': {en: 'Del', enShift: 'Del', ru: 'Del', ruShift: 'Del', type: "action"},
    'CapsLock': {en: 'CapsLock', enShift: 'CapsLock', ru: 'CapsLock', ruShift: 'CapsLock', type: "action"},
    'KeyA': {en: 'a', enShift: 'A', ru: 'ф', ruShift: 'Ф', type: "print"},
    'KeyS': {en: 's', enShift: 'S', ru: 'ы', ruShift: 'Ы', type: "print"},
    'KeyD': {en: 'd', enShift: 'D', ru: 'в', ruShift: 'В', type: "print"},
    'KeyF': {en: 'f', enShift: 'F', ru: 'а', ruShift: 'А', type: "print"},
    'KeyG': {en: 'g', enShift: 'G', ru: 'п', ruShift: 'П', type: "print"},
    'KeyH': {en: 'h', enShift: 'H', ru: 'р', ruShift: 'Р', type: "print"},
    'KeyJ': {en: 'j', enShift: 'J', ru: 'о', ruShift: 'О', type: "print"},
    'KeyK': {en: 'k', enShift: 'K', ru: 'л', ruShift: 'Л', type: "print"},
    'KeyL': {en: 'l', enShift: 'L', ru: 'д', ruShift: 'Д', type: "print"},
    'Semicolon': {en: ';', enShift: ':', ru: 'ж', ruShift: 'Ж', type: "print"},
    'Quote': {en: '\'', enShift: '"', ru: 'э', ruShift: 'Э', type: "print"},
    'Enter': {en: 'Enter', enShift: 'Enter', ru: 'Enter', ruShift: 'Enter', type: "action"},
    'ShiftLeft': {en: 'Shift', enShift: 'Shift', ru: 'Shift', ruShift: 'Shift', type: "action"},
    'KeyZ': {en: 'z', enShift: 'Z', ru: 'я', ruShift: 'Я', type: "print"},
    'KeyX': {en: 'x', enShift: 'X', ru: 'ч', ruShift: 'Ч', type: "print"},
    'KeyC': {en: 'c', enShift: 'C', ru: 'с', ruShift: 'С', type: "print"},
    'KeyV': {en: 'v', enShift: 'V', ru: 'м', ruShift: 'М', type: "print"},
    'KeyB': {en: 'b', enShift: 'B', ru: 'и', ruShift: 'И', type: "print"},
    'KeyN': {en: 'n', enShift: 'N', ru: 'т', ruShift: 'Т', type: "print"},
    'KeyM': {en: 'm', enShift: 'M', ru: 'ь', ruShift: 'Ь', type: "print"},
    'Key,': {en: ',', enShift: '<', ru: 'б', ruShift: 'Б', type: "print"},
    'Key.': {en: '.', enShift: '>', ru: 'ю', ruShift: 'Ю', type: "print"},
    'Key/': {en: '/', enShift: '?', ru: '.', ruShift: ',', type: "print"},
    'ShiftLeft': {en: 'Shift', enShift: 'Shift', ru: 'Shift', ruShift: 'Shift', type: "action"},
    'ArrowUp': {en: '&uarr;', enShift: '&uarr;', ru: '&uarr;', ruShift: '&uarr;', type: "arrow_action"},
    'ShiftRight': {en: 'Shift', enShift: 'Shift', ru: 'Shift', ruShift: 'Shift', type: "arrow-action"},
    'ControlLeft': {en: 'Ctrl', enShift: 'Ctrl', ru: 'Ctrl', ruShift: 'Ctrl', type: "action"},
    'MetaLeft': {en: 'Win', enShift: 'Win', ru: 'Win', ruShift: 'Win', type: "action"},
    'AltLeft': {en: 'Alt', enShift: 'Alt', ru: 'Alt', ruShift: 'Alt', type: "action"},
    'Space': {en: " ", enShift: " ", ru: " ", ruShift: " ", type: "print"},
    'AltRight': {en: 'Alt', enShift: 'Alt', ru: 'Alt', ruShift: 'Alt', type: "action"},
    'ArrowLeft': {en: '&larr;', enShift: '&larr;', ru: '&larr;', ruShift: '&larr;', type: "action"},
    'ArrowDown': {en: '&darr;', enShift: '&darr;', ru: '&darr;', ruShift: '&darr;', type: "action"},
    'ArrowRight': {en: '&rarr;', enShift: '&rarr;', ru: '&rarr;', ruShift: '&rarr;', type: "action"},
    'ControlRight': {en: 'Ctrl', enShift: 'Ctrl', ru: 'Ctrl', ruShift: 'Ctrl', type: "action"},
    }
    
    let lang = "en"; 


    class Button{
        constructor (keyCode, lang, shift){
            this.keyCode = keyCode;
            this.lang = lang;
            this.shift = shift;
        }
        
        get value(){
            let outStringType = this.lang + this.shift;
            let {[this.keyCode]: {[outStringType]: output}} = keys;
            return output;
        }
    
        action (){};
    }

    class ButtonPrint extends Button {
        action(){
            let output = document.querySelector('.output-textarea');
            output.innerHTML += output;
        }
    }


window.addEventListener("onload", makeKeyboardTable());

function makeKeyboardTable(){

    let body = document.querySelector('body');
    
    let bodyWrapper = document.createElement('div');
    bodyWrapper.classList.add('body__wrapper');

    let output = document.createElement('textarea');
    output.classList.add('output-textarea');
    bodyWrapper.appendChild(output);

    let keyboardWrapper = document.createElement('div');
    keyboardWrapper.classList.add('keyboard__wrapper');
    bodyWrapper.appendChild(keyboardWrapper);

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
    body.appendChild(bodyWrapper);

    let buttons = keyboardWrapper.querySelectorAll('.key');
    buttons[13].classList.add('key_long');
    buttons[14].classList.add('key_short');
    buttons[28].classList.add('key_short');
    buttons[29].classList.add('key_long');
    buttons[41].classList.add('key_middle');
    buttons[42].classList.add('key_long');
    buttons[54].classList.add('key_middle');
    buttons[58].classList.add('key_very-long');

    fillKeyboard(lang, buttons);
    let shift = "";
    let btn = new Button("KeyZ",lang,shift);
    console.log(btn.value);
}

    function fillKeyboard(lang, buttons) {
        let i = 0;
        for (const [key, value] of Object.entries(keys)){ 
            let {[lang]:outInnerHTML, type} = value;
            buttons[i].id = type;
            buttons[i].innerHTML = outInnerHTML;
            i++;
        }
    } 
       



