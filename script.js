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
    'Tab': {en: 'Tab', enShift: 'Tab', ru: 'Tab', ruShift:'Tab', type: "action"},
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
    'Delete': {en: 'Delete', enShift: 'Delete', ru: 'Delete', ruShift: 'Delete', type: "action"},
    'CapsLock': {en: 'CapsLock', enShift: 'CapsLock', ru: 'CapsLock', ruShift: 'CapsLock',  type: "action"},
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
    let [text, pos] = [this.textarea.value, this.currentPosition];
    let [afterText, beforeText] =  ["", ""];
    let [start, end] = [this.textarea.selectionStart, this.textarea.selectionEnd];

    if(end-start){
        pos = start;
        beforeText = text.substring(0,start);
        afterText = text.substring(end, text.length);
    } else {
        beforeText = text.substring(0, pos);
        afterText = text.substring(pos, text.length);
    }
    this.textarea.value = `${beforeText}${s}${afterText}`;
    this.currentPosition += s.length;
    this.textarea.selectionEnd = this.currentPosition;
    this.textarea.focus();
}

Print(keyCode){
    let outStringType = this.lang + this.shift;
    let {[keyCode]: {[outStringType]: value}} = keys;
    this.PrintSymbol(value);
}

Backspace(){
    let [text, pos] = [this.textarea.value, this.currentPosition];
    let [start, end] = [this.textarea.selectionStart, this.textarea.selectionEnd];
    let [afterText, beforeText] = ["", ""];

    if(end-start){
       beforeText = text.substring(0,start);
       afterText = text.substring(end,text.length);
       this.textarea.value = beforeText + afterText; 
       this.currentPosition = start;
    } else {
        if(pos > 0){     
            afterText = text.substring(pos, text.length);

            let symbolToDelete = text.substring(pos-1, pos);
            console.log(symbolToDelete);
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

            this.textarea.value = beforeText + afterText;
        }
    }
    this.textarea.selectionEnd = this.currentPosition;
    this.textarea.focus();
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

changeSelection(parsedText, shiftValue, isSelectionNeeded){
    var oldPosition = this.currentPosition;
    this.changeCurrentPosition(parsedText);
    
    var start, end;
    if(isSelectionNeeded){
        [start, end] = [this.textarea.selectionStart, this.textarea.selectionEnd];  
        if(start == end)
            if(shiftValue > 0) this.textarea.selectionEnd = this.currentPosition;
            else this.textarea.selectionStart = this.currentPosition;
        else
            if(oldPosition == start) this.textarea.selectionStart = this.currentPosition;
            else this.textarea.selectionEnd = this.currentPosition;        
    } else
        if(shiftValue > 0) this.textarea.selectionStart = this.currentPosition;
        else this.textarea.selectionEnd = this.currentPosition;

    [start, end] = [this.textarea.selectionStart, this.textarea.selectionEnd];
    console.log(start, end, this.textarea.value.substring(start,end));    
    this.textarea.focus();
}

ArrowMove(shiftRow, shiftColumn, isSelectionNeeded){
    let parsedText = this.currentPositionInRow;
    if(shiftRow) {
        let [rows,currentRow,currentColumn] = this.changeCurrentRow(shiftRow, parsedText); 
        [,,currentColumn] = this.changeCurrentColumn(0,[[rows[currentRow]],0,currentColumn]);
        this.changeSelection([rows,currentRow,currentColumn], shiftRow, isSelectionNeeded);
    }
    if(shiftColumn) {
        parsedText = this.changeCurrentColumn(shiftColumn, parsedText);
        this.changeSelection(parsedText, shiftColumn, isSelectionNeeded);
    }   
}


ArrowUp(){
    this.ArrowMove(-1,0,this.ctrl);
}

ArrowRight(){
    this.ArrowMove(0,1,this.ctrl); 
}

ArrowDown(){
    this.ArrowMove(1,0,this.ctrl);
}

ArrowLeft(){
    this.ArrowMove(0,-1,this.ctrl);
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
actionButtons.forEach(button => button.addEventListener('click',clickActionButton));

function clickActionButton(event){
    console.log(event.target.name);
    btn[event.target.name]();
}

let printButtons = document.querySelectorAll('#print');
printButtons.forEach(button => button.addEventListener('click',clickPrintButton));

function clickPrintButton(event){
    console.log(event.target.innerHTML);
    btn.PrintSymbol(event.target.innerHTML);
}

let textarea = document.querySelector('.output-textarea');
textarea.addEventListener('click',clickTextarea);

function clickTextarea(){
    btn.setCurrentPosition();
}