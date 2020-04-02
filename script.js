const keys = {
    'Backquote': {en: '\`', enShift: '~', ru: 'ё', ruShift: "Ё", type: "symbol"},
    'Digit1': {en: '1', enShift: '!', ru: '1', ruShift: '!', type: "symbol"},
    'Digit2': {en: '2', enShift: '@', ru: '2', ruShift: '\"', type: "symbol"},
    'Digit3': {en: '3', enShift: '#', ru: '3', ruShift: '№', type: "symbol"},
    'Digit4': {en: '4', enShift: '$', ru: '4', ruShift: ';', type: "symbol"},
    'Digit5': {en: '5', enShift: '%', ru: '5', ruShift: '%', type: "symbol"},
    'Digit6': {en: '6', enShift: '^', ru: '6', ruShift: ':', type: "symbol"},
    'Digit7': {en: '7', enShift: '&', ru: '7', ruShift: '?', type: "symbol"},
    'Digit8': {en: '8', enShift: '*', ru: '8', ruShift: '*', type: "symbol"},
    'Digit9': {en: '9', enShift: '(', ru: '9', ruShift: '(', type: "symbol"},
    'Digit0': {en: '0', enShift: ')', ru: '0', ruShift:')', type: "symbol"},
    'Minus': {en: '-', enShift: '_', ru: '-', ruShift:'_', type: "symbol"},
    'Equal': {en: '=', enShift: '+', ru: '=', ruShift:'+', type: "symbol"},
    'Backspace': {en: 'Backspace', enShift: 'Backspace', ru: 'Backspace', ruShift:'Backspace', type: "action"},
    'Tab': {en: 'Tab', enShift: 'Tab', ru: 'Tab', ruShift: 'Tab', type: "action"},
    'KeyQ': {en: 'q', enShift: 'Q', ru: 'й', ruShift: 'Й', type: "symbol"},
    'KeyW': {en: 'w', enShift: 'W', ru: 'ц', ruShift: 'Ц', type: "symbol"},
    'KeyE': {en: 'e', enShift: 'E', ru: 'у', ruShift: 'У', type: "symbol"},
    'KeyR': {en: 'r', enShift: 'R', ru: 'к', ruShift: 'К', type: "symbol"},
    'KeyT': {en: 't', enShift: 'T', ru: 'е', ruShift: 'Е', type: "symbol"},
    'KeyY': {en: 'y', enShift: 'Y', ru: 'н', ruShift: 'Н', type: "symbol"},
    'KeyU': {en: 'u', enShift: 'U', ru: 'г', ruShift: 'Г', type: "symbol"},
    'KeyI': {en: 'i', enShift: 'I', ru: 'ш', ruShift: 'Ш', type: "symbol"},
    'KeyO': {en: 'o', enShift: 'O', ru: 'щ', ruShift: 'Щ', type: "symbol"},
    'KeyP': {en: 'p', enShift: 'P', ru: 'з', ruShift: 'З', type: "symbol"},
    'BracketRight': {en: '[', enShift: '{', ru: 'х', ruShift: 'Х', type: "symbol"},
    'BracketLeft': {en: ']', enShift: '}', ru: 'ъ', ruShift: 'Ъ', type: "symbol"},
    'Backslash': {en: '\\', enShift: '|', ru: '\\', ruShift: '/', type: "symbol"},
    'Delete': {en: 'Del', enShift: 'Del', ru: 'Del', ruShift: 'Del', type: "action"},
    'CapsLock': {en: 'CapsLock', enShift: 'CapsLock', ru: 'CapsLock', ruShift: 'CapsLock', type: "action"},
    'KeyA': {en: 'a', enShift: 'A', ru: 'ф', ruShift: 'Ф', type: "symbol"},
    'KeyS': {en: 's', enShift: 'S', ru: 'ы', ruShift: 'Ы', type: "symbol"},
    'KeyD': {en: 'd', enShift: 'D', ru: 'в', ruShift: 'В', type: "symbol"},
    'KeyF': {en: 'f', enShift: 'F', ru: 'а', ruShift: 'А', type: "symbol"},
    'KeyG': {en: 'g', enShift: 'G', ru: 'п', ruShift: 'П', type: "symbol"},
    'KeyH': {en: 'h', enShift: 'H', ru: 'р', ruShift: 'Р', type: "symbol"},
    'KeyJ': {en: 'j', enShift: 'J', ru: 'о', ruShift: 'О', type: "symbol"},
    'KeyK': {en: 'k', enShift: 'K', ru: 'л', ruShift: 'Л', type: "symbol"},
    'KeyL': {en: 'l', enShift: 'L', ru: 'д', ruShift: 'Д', type: "symbol"},
    'Semicolon': {en: ';', enShift: ':', ru: 'ж', ruShift: 'Ж', type: "symbol"},
    'Quote': {en: '\'', enShift: '"', ru: 'э', ruShift: 'Э', type: "symbol"},
    'Enter': {en: 'Enter', enShift: 'Enter', ru: 'Enter', ruShift: 'Enter', type: "action"},
    'ShiftLeft': {en: 'Shift', enShift: 'Shift', ru: 'Shift', ruShift: 'Shift', type: "action"},
    'KeyZ': {en: 'z', enShift: 'Z', ru: 'я', ruShift: 'Я', type: "symbol"},
    'KeyX': {en: 'x', enShift: 'X', ru: 'ч', ruShift: 'Ч', type: "symbol"},
    'KeyC': {en: 'c', enShift: 'C', ru: 'с', ruShift: 'С', type: "symbol"},
    'KeyV': {en: 'v', enShift: 'V', ru: 'м', ruShift: 'М', type: "symbol"},
    'KeyB': {en: 'b', enShift: 'B', ru: 'и', ruShift: 'И', type: "symbol"},
    'KeyN': {en: 'n', enShift: 'N', ru: 'т', ruShift: 'Т', type: "symbol"},
    'KeyM': {en: 'm', enShift: 'M', ru: 'ь', ruShift: 'Ь', type: "symbol"},
    'Key,': {en: ',', enShift: '<', ru: 'б', ruShift: 'Б', type: "symbol"},
    'Key.': {en: '.', enShift: '>', ru: 'ю', ruShift: 'Ю', type: "symbol"},
    'Key/': {en: '/', enShift: '?', ru: '.', ruShift: ',', type: "symbol"},
    'ShiftLeft': {en: 'Shift', enShift: 'Shift', ru: 'Shift', ruShift: 'Shift', type: "action"},
    'ArrowUp': {en: '&uarr;', enShift: '&uarr;', ru: '&uarr;', ruShift: '&uarr;', type: "arrow_action"},
    'ShiftRight': {en: 'Shift', enShift: 'Shift', ru: 'Shift', ruShift: 'Shift', type: "arrow-action"},
    'ControlLeft': {en: 'Ctrl', enShift: 'Ctrl', ru: 'Ctrl', ruShift: 'Ctrl', type: "action"},
    'MetaLeft': {en: 'Win', enShift: 'Win', ru: 'Win', ruShift: 'Win', type: "action"},
    'AltLeft': {en: 'Alt', enShift: 'Alt', ru: 'Alt', ruShift: 'Alt', type: "action"},
    'Space': {en: " ", enShift: " ", ru: " ", ruShift: " ", type: "symbol"},
    'AltRight': {en: 'Alt', enShift: 'Alt', ru: 'Alt', ruShift: 'Alt', type: "action"},
    'ArrowLeft': {en: '&larr;', enShift: '&larr;', ru: '&larr;', ruShift: '&larr;', type: "action"},
    'ArrowDown': {en: '&darr;', enShift: '&darr;', ru: '&darr;', ruShift: '&darr;', type: "action"},
    'ArrowRight': {en: '&rarr;', enShift: '&rarr;', ru: '&rarr;', ruShift: '&rarr;', type: "action"},
    'ControlRight': {en: 'Ctrl', enShift: 'Ctrl', ru: 'Ctrl', ruShift: 'Ctrl', type: "action"},
    }
    
    let lang = "en"; 




window.addEventListener("onload", makeKeyboardTable());

function makeKeyboardTable(){

    const keyboardWrapper = document.createElement("div");
    body.append(keyboardWrapper);
    keyboardWrapper.classList.add("keyboard__wrapper");

    let input = document.createElement("input");
 
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

