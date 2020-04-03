const keys = {
    'Backquote': {en: '\`', enShift: '~', ru: 'ё', ruShift: "Ё", function: "Print"},
    'Digit1': {en: '1', enShift: '!', ru: '1', ruShift: '!', function: "Print"},
    'Digit2': {en: '2', enShift: '@', ru: '2', ruShift: '\"', function: "Print"},
    'Digit3': {en: '3', enShift: '#', ru: '3', ruShift: '№', function: "Print"},
    'Digit4': {en: '4', enShift: '$', ru: '4', ruShift: ';', function: "Print"},
    'Digit5': {en: '5', enShift: '%', ru: '5', ruShift: '%', function: "Print"},
    'Digit6': {en: '6', enShift: '^', ru: '6', ruShift: ':', function: "Print"},
    'Digit7': {en: '7', enShift: '&', ru: '7', ruShift: '?', function: "Print"},
    'Digit8': {en: '8', enShift: '*', ru: '8', ruShift: '*', function: "Print"},
    'Digit9': {en: '9', enShift: '(', ru: '9', ruShift: '(', function: "Print"},
    'Digit0': {en: '0', enShift: ')', ru: '0', ruShift:')', function: "Print"},
    'Minus': {en: '-', enShift: '_', ru: '-', ruShift:'_', function: "Print"},
    'Equal': {en: '=', enShift: '+', ru: '=', ruShift:'+', function: "Print"},
    'Backspace': {en: 'Backspace', enShift: 'Backspace', ru: 'Backspace', ruShift:'Backspace', function: 'Backspace'},
    'Tab': {en: 'Tab', enShift: 'Tab', ru: 'Tab', ruShift:'Tab', function: 'Tab'},
    'KeyQ': {en: 'q', enShift: 'Q', ru: 'й', ruShift: 'Й', function: "Print"},
    'KeyW': {en: 'w', enShift: 'W', ru: 'ц', ruShift: 'Ц', function: "Print"},
    'KeyE': {en: 'e', enShift: 'E', ru: 'у', ruShift: 'У', function: "Print"},
    'KeyR': {en: 'r', enShift: 'R', ru: 'к', ruShift: 'К', function: "Print"},
    'KeyT': {en: 't', enShift: 'T', ru: 'е', ruShift: 'Е', function: "Print"},
    'KeyY': {en: 'y', enShift: 'Y', ru: 'н', ruShift: 'Н', function: "Print"},
    'KeyU': {en: 'u', enShift: 'U', ru: 'г', ruShift: 'Г', function: "Print"},
    'KeyI': {en: 'i', enShift: 'I', ru: 'ш', ruShift: 'Ш', function: "Print"},
    'KeyO': {en: 'o', enShift: 'O', ru: 'щ', ruShift: 'Щ', function: "Print"},
    'KeyP': {en: 'p', enShift: 'P', ru: 'з', ruShift: 'З', function: "Print"},
    'BracketRight': {en: '[', enShift: '{', ru: 'х', ruShift: 'Х', function: "Print"},
    'BracketLeft': {en: ']', enShift: '}', ru: 'ъ', ruShift: 'Ъ', function: "Print"},
    'Backslash': {en: '\\', enShift: '|', ru: '\\', ruShift: '/', function: "Print"},
    'Delete': {en: 'Delete', enShift: 'Delete', ru: 'Delete', ruShift: 'Delete', function: "Delete"},
    'CapsLock': {en: 'CapsLock', enShift: 'CapsLock', ru: 'CapsLock', ruShift: 'CapsLock',  function: "CapsLock"},
    'KeyA': {en: 'a', enShift: 'A', ru: 'ф', ruShift: 'Ф', function: "Print"},
    'KeyS': {en: 's', enShift: 'S', ru: 'ы', ruShift: 'Ы', function: "Print"},
    'KeyD': {en: 'd', enShift: 'D', ru: 'в', ruShift: 'В', function: "Print"},
    'KeyF': {en: 'f', enShift: 'F', ru: 'а', ruShift: 'А', function: "Print"},
    'KeyG': {en: 'g', enShift: 'G', ru: 'п', ruShift: 'П', function: "Print"},
    'KeyH': {en: 'h', enShift: 'H', ru: 'р', ruShift: 'Р', function: "Print"},
    'KeyJ': {en: 'j', enShift: 'J', ru: 'о', ruShift: 'О', function: "Print"},
    'KeyK': {en: 'k', enShift: 'K', ru: 'л', ruShift: 'Л', function: "Print"},
    'KeyL': {en: 'l', enShift: 'L', ru: 'д', ruShift: 'Д', function: "Print"},
    'Semicolon': {en: ';', enShift: ':', ru: 'ж', ruShift: 'Ж', function: "Print"},
    'Quote': {en: '\'', enShift: '"', ru: 'э', ruShift: 'Э', function: "Print"},
    'Enter': {en: 'Enter', enShift: 'Enter', ru: 'Enter', ruShift: 'Enter', function: "Enter"},
    'ShiftLeft': {en: 'Shift', enShift: 'Shift', ru: 'Shift', ruShift: 'Shift', function: "Shift"},
    'KeyZ': {en: 'z', enShift: 'Z', ru: 'я', ruShift: 'Я', function: "Print"},
    'KeyX': {en: 'x', enShift: 'X', ru: 'ч', ruShift: 'Ч', function: "Print"},
    'KeyC': {en: 'c', enShift: 'C', ru: 'с', ruShift: 'С', function: "Print"},
    'KeyV': {en: 'v', enShift: 'V', ru: 'м', ruShift: 'М', function: "Print"},
    'KeyB': {en: 'b', enShift: 'B', ru: 'и', ruShift: 'И', function: "Print"},
    'KeyN': {en: 'n', enShift: 'N', ru: 'т', ruShift: 'Т', function: "Print"},
    'KeyM': {en: 'm', enShift: 'M', ru: 'ь', ruShift: 'Ь', function: "Print"},
    'Key,': {en: ',', enShift: '<', ru: 'б', ruShift: 'Б', function: "Print"},
    'Key.': {en: '.', enShift: '>', ru: 'ю', ruShift: 'Ю', function: "Print"},
    'Key/': {en: '/', enShift: '?', ru: '.', ruShift: ',', function: "Print"},
    'ArrowUp': {en: '&uarr;', enShift: '&uarr;', ru: '&uarr;', ruShift: '&uarr;', function: "ArrowUp"},
    'ShiftRight': {en: 'Shift', enShift: 'Shift', ru: 'Shift', ruShift: 'Shift', function: "Shift"},
    'ControlLeft': {en: 'Ctrl', enShift: 'Ctrl', ru: 'Ctrl', ruShift: 'Ctrl', function: "Control"},
    'MetaLeft': {en: 'Win', enShift: 'Win', ru: 'Win', ruShift: 'Win', function: "Meta"},
    'AltLeft': {en: 'Alt', enShift: 'Alt', ru: 'Alt', ruShift: 'Alt', function: "Alt"},
    'Space': {en: " ", enShift: " ", ru: " ", ruShift: " ", function: "Print"},
    'AltRight': {function: "Alt"},
    'ArrowLeft': {en: '&larr;', enShift: '&larr;', ru: '&larr;', ruShift: '&larr;', function: "ArrowLeft"},
    'ArrowDown': {en: '&darr;', enShift: '&darr;', ru: '&darr;', ruShift: '&darr;', function: "ArrowDown"},
    'ArrowRight': {en: '&rarr;', enShift: '&rarr;', ru: '&rarr;', ruShift: '&rarr;', function: "ArrowRight"},
    'ControlRight': {en: 'Ctrl', enShift: 'Ctrl', ru: 'Ctrl', ruShift: 'Ctrl', function: "Control"},
    }
    
    let lang = "en"; 
    let shift = "Shift";
    let keyboardFilled = false;


class Button{
    constructor(value){
        this.lang = "";
        this.shift = "";
        this.textarea = "";
        this.position = 0;

        if(Array.isArray(value)){           
            if(value.length == 1)
                [this.lang] = value;
            else if(value.length == 2)
                [this.lang, this.shift] = value; 
            else if(value.length == 3)
                [this.lang, this.shift, this.workspace] = value; 
        };
    }

    set language(lang) {
        this.lang = lang;
    }

    set isUpperCase(shift) {
        this.shift = shift;
    }

    set workspace(textarea){
        this.textarea = textarea;
    }

    get workspace() {
        return this.textarea;
    }

    static fillKeyboard(buttons) {
        let i = 0;
        for (const [keyCode, value] of Object.entries(keys)){ 
            let {[lang]:outInnerHTML, type} = value;
            buttons[i].id = type;
            buttons[i].name = keyCode; 
            buttons[i].innerHTML = outInnerHTML;
            i++;
        }
    }



    Print(keyCode){
        let outStringType = this.lang + this.shift;
        let {[keyCode]: {[outStringType]: value}} = keys;

        this.textarea.innerHTML += value;
    }

    Backspace(){
        let innerHTML = this.textarea.innerHTML;
        let innerHTMLLength = innerHTML.length;
        if(innerHTMLLength>0){
            this.textarea.innerHTML = innerHTML.substring(0,innerHTMLLength - 1);
        }
    }

    Tab(){
        this.textarea.innerHTML += "\t";
    }

    Delete(){
        let innerHTML = this.textarea.innerHTML;
        let cursorPosition = this.textarea.selectionStart;
        if(innerHTML.length>0) {
            this.textarea.innerHTML = innerHTML.substring(0,innerHTMLLength - 1);
        }
    }

    CapsLock(){
        this.shift = "Shift";
    }

    CapsLockReset(){
        this.shift = "";
    }

    Enter(){
        this.textarea.innerHTML += "\n";
    }

    ShiftLeft(){this.CapsLock();}
    ShiftRight(){this.CapsLock();}
    ShiftLeftReset(){this.CapsLockReset();}
    ShiftRightReset(){this.CapsLockReset();}

    Alt(){
        return;
    }

    AltLeft(){this.Alt();}
    AltRight(){this.Alt();}

    Meta(){
        return;
    }

    Ctrl(){
        return;
    }

    ControlLeft(){this.Ctrl();}
    ControlRight(){this.Ctrl();}

    ArrowUp(){
        return;
    }

    ArrowRight(){
        return;
    }

    ArrowDown(){
        return;
    }

    ArrowLeft(){
        return;
    }
}      


let btn = new Button([lang, shift]);
console.log(btn.lang, " ",btn.shift);



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

    Button.fillKeyboard(buttons);
    btn.workspace = output; 
    btn.Print("KeyZ");
    btn.Print("KeyM");
    btn.Tab();
    btn.Print("KeyM");

    keyboardFilled = true;
}


if(keyboardFilled){
    let textarea = document.querySelector(".output-textarea");
    textarea.addEventListener('click',clickTextarea);
}

function clickTextarea(){
} 