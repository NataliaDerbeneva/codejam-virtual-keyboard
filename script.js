const keys = {
    'Backquote': {en: '\`', enShift: '~', ru: 'ё', ruShift: "Ё", type: "Print"},
    'Digit1': {en: '1', enShift: '!', ru: '1', ruShift: '!', type: "Print"},
    'Digit2': {en: '2', enShift: '@', ru: '2', ruShift: '\"', type: "Print"},
    'Digit3': {en: '3', enShift: '#', ru: '3', ruShift: '№', type: "Print"},
    'Digit4': {en: '4', enShift: '$', ru: '4', ruShift: ';', type: "Print"},
    'Digit5': {en: '5', enShift: '%', ru: '5', ruShift: '%', type: "Print"},
    'Digit6': {en: '6', enShift: '^', ru: '6', ruShift: ':', type: "Print"},
    'Digit7': {en: '7', enShift: '&', ru: '7', ruShift: '?', type: "Print"},
    'Digit8': {en: '8', enShift: '*', ru: '8', ruShift: '*', type: "Print"},
    'Digit9': {en: '9', enShift: '(', ru: '9', ruShift: '(', type: "Print"},
    'Digit0': {en: '0', enShift: ')', ru: '0', ruShift:')', type: "Print"},
    'Minus': {en: '-', enShift: '_', ru: '-', ruShift:'_', type: "Print"},
    'Equal': {en: '=', enShift: '+', ru: '=', ruShift:'+', type: "Print"},
    'Backspace': {en: 'Backspace', enShift: 'Backspace', ru: 'Backspace', ruShift:'Backspace', type: "action"},
    'Tab': {en: 'Tab', enShift: 'Tab', ru: 'Tab', ruShift:'Tab', type: "Print"},
    'KeyQ': {en: 'q', enShift: 'Q', ru: 'й', ruShift: 'Й', type: "Print"},
    'KeyW': {en: 'w', enShift: 'W', ru: 'ц', ruShift: 'Ц', type: "Print"},
    'KeyE': {en: 'e', enShift: 'E', ru: 'у', ruShift: 'У', type: "Print"},
    'KeyR': {en: 'r', enShift: 'R', ru: 'к', ruShift: 'К', type: "Print"},
    'KeyT': {en: 't', enShift: 'T', ru: 'е', ruShift: 'Е', type: "Print"},
    'KeyY': {en: 'y', enShift: 'Y', ru: 'н', ruShift: 'Н', type: "Print"},
    'KeyU': {en: 'u', enShift: 'U', ru: 'г', ruShift: 'Г', type: "Print"},
    'KeyI': {en: 'i', enShift: 'I', ru: 'ш', ruShift: 'Ш', type: "Print"},
    'KeyO': {en: 'o', enShift: 'O', ru: 'щ', ruShift: 'Щ', type: "Print"},
    'KeyP': {en: 'p', enShift: 'P', ru: 'з', ruShift: 'З', type: "Print"},
    'BracketRight': {en: '[', enShift: '{', ru: 'х', ruShift: 'Х', type: "Print"},
    'BracketLeft': {en: ']', enShift: '}', ru: 'ъ', ruShift: 'Ъ', type: "Print"},
    'Backslash': {en: '\\', enShift: '|', ru: '\\', ruShift: '/', type: "Print"},
    'Delete': {en: 'Delete', enShift: 'Delete', ru: 'Delete', ruShift: 'Delete', type: "action"},
    'CapsLock': {en: 'CapsLock', enShift: 'CapsLock', ru: 'CapsLock', ruShift: 'CapsLock',  type: "action"},
    'KeyA': {en: 'a', enShift: 'A', ru: 'ф', ruShift: 'Ф', type: "Print"},
    'KeyS': {en: 's', enShift: 'S', ru: 'ы', ruShift: 'Ы', type: "Print"},
    'KeyD': {en: 'd', enShift: 'D', ru: 'в', ruShift: 'В', type: "Print"},
    'KeyF': {en: 'f', enShift: 'F', ru: 'а', ruShift: 'А', type: "Print"},
    'KeyG': {en: 'g', enShift: 'G', ru: 'п', ruShift: 'П', type: "Print"},
    'KeyH': {en: 'h', enShift: 'H', ru: 'р', ruShift: 'Р', type: "Print"},
    'KeyJ': {en: 'j', enShift: 'J', ru: 'о', ruShift: 'О', type: "Print"},
    'KeyK': {en: 'k', enShift: 'K', ru: 'л', ruShift: 'Л', type: "Print"},
    'KeyL': {en: 'l', enShift: 'L', ru: 'д', ruShift: 'Д', type: "Print"},
    'Semicolon': {en: ';', enShift: ':', ru: 'ж', ruShift: 'Ж', type: "Print"},
    'Quote': {en: '\'', enShift: '"', ru: 'э', ruShift: 'Э', type: "Print"},
    'Enter': {en: 'Enter', enShift: 'Enter', ru: 'Enter', ruShift: 'Enter', type: "Print"},
    'ShiftLeft': {en: 'Shift', enShift: 'Shift', ru: 'Shift', ruShift: 'Shift', type: "action"},
    'KeyZ': {en: 'z', enShift: 'Z', ru: 'я', ruShift: 'Я', type: "Print"},
    'KeyX': {en: 'x', enShift: 'X', ru: 'ч', ruShift: 'Ч', type: "Print"},
    'KeyC': {en: 'c', enShift: 'C', ru: 'с', ruShift: 'С', type: "Print"},
    'KeyV': {en: 'v', enShift: 'V', ru: 'м', ruShift: 'М', type: "Print"},
    'KeyB': {en: 'b', enShift: 'B', ru: 'и', ruShift: 'И', type: "Print"},
    'KeyN': {en: 'n', enShift: 'N', ru: 'т', ruShift: 'Т', type: "Print"},
    'KeyM': {en: 'm', enShift: 'M', ru: 'ь', ruShift: 'Ь', type: "Print"},
    'Key,': {en: ',', enShift: '<', ru: 'б', ruShift: 'Б', type: "Print"},
    'Key.': {en: '.', enShift: '>', ru: 'ю', ruShift: 'Ю', type: "Print"},
    'Key/': {en: '/', enShift: '?', ru: '.', ruShift: ',', type: "Print"},
    'ArrowUp': {en: '&uarr;', enShift: '&uarr;', ru: '&uarr;', ruShift: '&uarr;', type: "action"},
    'ShiftRight': {en: 'Shift', enShift: 'Shift', ru: 'Shift', ruShift: 'Shift', type: "action"},
    'ControlLeft': {en: 'Ctrl', enShift: 'Ctrl', ru: 'Ctrl', ruShift: 'Ctrl', type: "action"},
    'MetaLeft': {en: 'Win', enShift: 'Win', ru: 'Win', ruShift: 'Win', type: "action"},
    'AltLeft': {en: 'Alt', enShift: 'Alt', ru: 'Alt', ruShift: 'Alt', type: "action"},
    'Space': {en: " ", enShift: " ", ru: " ", ruShift: " ", type: "action"},
    'AltRight': {en: 'Alt', enShift: 'Alt', ru: 'Alt', ruShift: 'Alt', type: "action"},
    'ArrowLeft': {en: '&larr;', enShift: '&larr;', ru: '&larr;', ruShift: '&larr;', type: "action"},
    'ArrowDown': {en: '&darr;', enShift: '&darr;', ru: '&darr;', ruShift: '&darr;', type: "action"},
    'ArrowRight': {en: '&rarr;', enShift: '&rarr;', ru: '&rarr;', ruShift: '&rarr;', type: "action"},
    'ControlRight': {en: 'Ctrl', enShift: 'Ctrl', ru: 'Ctrl', ruShift: 'Ctrl', type: "action"},
    }
    
class Button{
#langs = ["en","ru"];

constructor(value){
    this.lang = "en";
    this.shift = "";
    this.textarea = "";
    this.ctrl = false;
    this.alt = false;
    this.currentPosition = 0;

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

set upperCase(shift) {
    this.shift = shift;
}

set workspace(textarea){
    this.textarea = textarea;
}

get workspace() {
    return this.textarea;
}

fillKeyboard() {
    let i = 0;
    let buttons = document.querySelectorAll('.key');
    for (const [keyCode, value] of Object.entries(keys)){ 
        let {[`${this.lang}${this.shift}`]:innerHTML, type} = value;
        buttons[i].id = type;
        buttons[i].name = keyCode; 
        buttons[i].innerHTML = innerHTML;
        i++;
    }
}

setCurrentPosition() {
    this.currentPosition = this.textarea.selectionStart;
}

getCurrentPosition(){
    return this.currentPosition;
}

PrintSymbol(s){
    let [text, pos, afterText] = [this.textarea.value, this.currentPosition, ""];
    let beforeText = text.substring(0, pos);
    if(pos < text.length) afterText = text.substring(pos, text.length);

    this.textarea.value = `${beforeText}${s}${afterText}`;
    this.currentPosition += s.length;
}

Print(keyCode){
    let outStringType = this.lang + this.shift;
    let {[keyCode]: {[outStringType]: value}} = keys;
    this.PrintSymbol(value);
}

Backspace(){
    let [text, pos] = [this.textarea.value, this.currentPosition];
    if(pos > 0 && text.length > 0){     
        let [afterText, beforeText] = ["", ""];
        if(pos < text.length) afterText = text.substring(pos, text.length);

        let symbolToDelete = text.substring(pos-1, pos);
        console.log(symbolToDelete);
        if(symbolToDelete == '\n' && pos-2 > 0){
            beforeText = text.substring(0, pos-2);
            this.currentPosition -= 2;
        } else if(pos-1 > 0){
            if(symbolToDelete == " ") {
                let numSpaces = 1;
                while(text.substring(pos-1-numSpaces, pos-numSpaces) == " "){
                    numSpaces++;
                }
                if(numSpaces == 4) {
                    beforeText = text.substring(0,pos-4);
                    this.currentPosition -= 4;    
                } else {
                    beforeText = text.substring(0, pos-1);
                    this.currentPosition--;
                }
            } else {
                beforeText = text.substring(0, pos-1);
                this.currentPosition--;            
            }    
        }

        this.textarea.value = beforeText + afterText;
    }
}

Tab(){
    this.PrintSymbol('    ');        
}

Enter(){
    this.PrintSymbol('\n');
}

CapsLock(){
    if(this.shift) this.shift = "";
    else this.shift = "Shift";
    this.fillKeyboard();
}

ShiftLeft(){this.CapsLock();}
ShiftRight(){this.CapsLock();}

changeLang(){
    let posInLangs = this.#langs.indexOf(lang);
    this.lang = this.#langs[Number(!posInLangs)];
    this.fillKeyboard();
}

Alt(){
    this.alt = true;
    if(this.ctrl) this.changeLang();
}

AltReset(){
    this.alt = false;
}

AltLeft(){this.Alt();}
AltRight(){this.Alt();}
AltLeftReset(){this.AltReset();}
AltRightReset(){this.AltReset();}

Ctrl(){
    this.ctrl = true;
    if(this.alt) this.changeLang();
}

CtrlReset(){
    this.ctrl = false;
}

ControlLeft(){this.Ctrl();}
ControlRight(){this.Ctrl();}
ControlLeftReset(){this.CtrlReset();}
ControlRightReset(){this.CtrlReset();}


get currentPositionInRow(){
    let text = this.textarea.value;
    let rows = text.split('\n');
    let nRows = rows.length;

    let currentColumn = this.currentPosition;

    let currentRow=0;
    while(currentColumn > rows[currentRow].length) {
        currentColumn -= rows[currentRow].length + 1;
        currentRow++;
    }

    return [rows, currentRow, currentColumn];
}   

changeCurrentRow(shiftRow, parsedText){
    let [rows, currentRow, currentColumn] = parsedText;
    currentRow += shiftRow; 

    if(currentRow < 0) {
        currentRow = 0;
        currentColumn = 0;
    }    
    else if(currentRow > rows.length-1) {
        currentRow = rows.length - 1;
        currentColumn = rows[currentRow].length;
    }

    return [rows, currentRow, currentColumn];
}

changeCurrentColumn(shiftColumn, parsedText){
    let [rows, currentRow, currentColumn] = parsedText;

    currentColumn += shiftColumn;
    
    if(currentColumn > rows[currentRow].length) {
        let [,shiftedRow, shiftedColumn] = this.changeCurrentRow(1,parsedText);
        if(currentRow == shiftedRow) currentColumn = shiftedColumn;
        else {                  
            currentColumn -= rows[currentRow].length + 1;
            currentRow = shiftedRow;
        }
    } else if (currentColumn < 0) {
        let [,shiftedRow, shiftedColumn] = this.changeCurrentRow(-1,parsedText);
        if(currentRow == shiftedRow) currentColumn = shiftedColumn;
        else {
            currentRow = shiftedRow;
            currentColumn += rows[currentRow].length + 1; 
        }    
    } 
    
    return [rows, currentRow, currentColumn];
}

changeCurrentPosition(parsedText){
    let [rows,currentRow,currentColumn] = parsedText;
    let row = 0;
    this.currentPosition = 0;
    while(row < currentRow){
        this.currentPosition += rows[row].length + 1;
        row++;
    }
    this.currentPosition += currentColumn;

    console.log(`row = ${currentRow}, col = ${currentColumn}, pos = ${this.currentPosition}`);
}

ArrowMove(shiftRow,shiftColumn){
    let parsedText = this.currentPositionInRow;
    if(shiftRow) {
        let [rows,currentRow,currentColumn] = this.changeCurrentRow(shiftRow, parsedText); 
        [,,currentColumn] = this.changeCurrentColumn(0,[[rows[currentRow]],0,currentColumn]);
        this.changeCurrentPosition([rows,currentRow,currentColumn]);
        if(shiftRow > 0) this.textarea.selectionStart = this.currentPosition;
        else this.textarea.selectionEnd = this.currentPosition;
        this.textarea.focus();
    }
    if(shiftColumn) {
        parsedText = this.changeCurrentColumn(shiftColumn, parsedText);
        this.changeCurrentPosition(parsedText);
        if(shiftColumn > 0) this.textarea.selectionStart = this.currentPosition;
        else this.textarea.selectionEnd = this.currentPosition;
        this.textarea.focus();
    }   
}


ArrowUp(){
    this.ArrowMove(-1,0);
}

ArrowRight(){
    this.ArrowMove(0,1);
}

ArrowDown(){
    this.ArrowMove(1,0);
}

ArrowLeft(){
    this.ArrowMove(0,-1);
}


}      


let lang = "en"; 
let shift = "Shift";
let btn = new Button([lang, shift]);


(function (){

let body = document.querySelector('body');

let bodyWrapper = document.createElement('div');
bodyWrapper.classList.add('body__wrapper');

let output = document.createElement('textarea');
output.classList.add('output-textarea');
output.setAttribute('autofocus','true');
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

btn.fillKeyboard();
btn.workspace = output; 
btn.Print("KeyZ");
btn.Print("KeyM");
btn.Tab();
btn.Print("KeyM");
btn.Print("KeyN");
btn.Enter();
btn.Print("KeyO");
btn.Print("KeyP");
btn.Print("KeyR");
btn.Print("KeyS");
btn.Enter();
btn.Print("KeyT");
btn.Print("KeyU");
btn.Print("KeyP");
btn.Tab();
btn.Print("KeyP");

}());



let actionButtons = document.querySelectorAll('#action');
actionButtons.forEach(button => button.addEventListener('click',clickButton));

function clickButton(event){
    console.log(event.target.name);
    btn[event.target.name]();
}

actionButtons.forEach(button => button.addEventListener('focus',onFocus));
function onFocus(event){
    event.preventDefault();
}


let textarea = document.querySelector('.output-textarea');
textarea.addEventListener('click',clickTextarea);

function clickTextarea(){
btn.setCurrentPosition();
}