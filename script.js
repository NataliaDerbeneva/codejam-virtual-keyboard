const keys = {
    'Backquote': {en: '`', enUp: '~', ru: 'ё', ruUp: "Ё", type: "print"},
    'Digit1': {en: '1', enUp: '!', ru: '1', ruUp: '!', type: "print"},
    'Digit2': {en: '2', enUp: '@', ru: '2', ruUp: '"', type: "print"},
    'Digit3': {en: '3', enUp: '#', ru: '3', ruUp: '№', type: "print"},
    'Digit4': {en: '4', enUp: '$', ru: '4', ruUp: ';', type: "print"},
    'Digit5': {en: '5', enUp: '%', ru: '5', ruUp: '%', type: "print"},
    'Digit6': {en: '6', enUp: '^', ru: '6', ruUp: ':', type: "print"},
    'Digit7': {en: '7', enUp: '&', ru: '7', ruUp: '?', type: "print"},
    'Digit8': {en: '8', enUp: '*', ru: '8', ruUp: '*', type: "print"},
    'Digit9': {en: '9', enUp: '(', ru: '9', ruUp: '(', type: "print"},
    'Digit0': {en: '0', enUp: ')', ru: '0', ruUp:')', type: "print"},
    'Minus': {en: '-', enUp: '_', ru: '-', ruUp:'_', type: "print"},
    'Equal': {en: '=', enUp: '+', ru: '=', ruUp:'+', type: "print"},
    'Backspace': {en: 'Backspace', enUp: 'Backspace', ru: 'Backspace', ruUp:'Backspace', type: "specificPrint"},
    'Tab': {en: 'Tab', enUp: 'Tab', ru: 'Tab', ruUp:'Tab', type: "specificPrint"},
    'KeyQ': {en: 'q', enUp: 'Q', ru: 'й', ruUp: 'Й', type: "print"},
    'KeyW': {en: 'w', enUp: 'W', ru: 'ц', ruUp: 'Ц', type: "print"},
    'KeyE': {en: 'e', enUp: 'E', ru: 'у', ruUp: 'У', type: "print"},
    'KeyR': {en: 'r', enUp: 'R', ru: 'к', ruUp: 'К', type: "print"},
    'KeyT': {en: 't', enUp: 'T', ru: 'е', ruUp: 'Е', type: "print"},
    'KeyY': {en: 'y', enUp: 'Y', ru: 'н', ruUp: 'Н', type: "print"},
    'KeyU': {en: 'u', enUp: 'U', ru: 'г', ruUp: 'Г', type: "print"},
    'KeyI': {en: 'i', enUp: 'I', ru: 'ш', ruUp: 'Ш', type: "print"},
    'KeyO': {en: 'o', enUp: 'O', ru: 'щ', ruUp: 'Щ', type: "print"},
    'KeyP': {en: 'p', enUp: 'P', ru: 'з', ruUp: 'З', type: "print"},
    'BracketRight': {en: '[', enUp: '{', ru: 'х', ruUp: 'Х', type: "print"},
    'BracketLeft': {en: ']', enUp: '}', ru: 'ъ', ruUp: 'Ъ', type: "print"},
    'Backslash': {en: '\\', enUp: '|', ru: '\\', ruUp: '/', type: "print"},
    'Delete': {en: 'Delete', enUp: 'Delete', ru: 'Delete', ruUp: 'Delete', type: "specificPrint"},
    'CapsLock': {en: 'CapsLock', enUp: 'CapsLock', ru: 'CapsLock', ruUp: 'CapsLock',  type: "capsLock"},
    'KeyA': {en: 'a', enUp: 'A', ru: 'ф', ruUp: 'Ф', type: "print"},
    'KeyS': {en: 's', enUp: 'S', ru: 'ы', ruUp: 'Ы', type: "print"},
    'KeyD': {en: 'd', enUp: 'D', ru: 'в', ruUp: 'В', type: "print"},
    'KeyF': {en: 'f', enUp: 'F', ru: 'а', ruUp: 'А', type: "print"},
    'KeyG': {en: 'g', enUp: 'G', ru: 'п', ruUp: 'П', type: "print"},
    'KeyH': {en: 'h', enUp: 'H', ru: 'р', ruUp: 'Р', type: "print"},
    'KeyJ': {en: 'j', enUp: 'J', ru: 'о', ruUp: 'О', type: "print"},
    'KeyK': {en: 'k', enUp: 'K', ru: 'л', ruUp: 'Л', type: "print"},
    'KeyL': {en: 'l', enUp: 'L', ru: 'д', ruUp: 'Д', type: "print"},
    'Semicolon': {en: ';', enUp: ':', ru: 'ж', ruUp: 'Ж', type: "print"},
    'Quote': {en: '\'', enUp: '"', ru: 'э', ruUp: 'Э', type: "print"},
    'Enter': {en: 'Enter', enUp: 'Enter', ru: 'Enter', ruUp: 'Enter', type: "specificPrint"},
    'ShiftLeft': {en: 'Shift', enUp: 'Shift', ru: 'Shift', ruUp: 'Shift', type: "keyPress"},
    'KeyZ': {en: 'z', enUp: 'Z', ru: 'я', ruUp: 'Я', type: "print"},
    'KeyX': {en: 'x', enUp: 'X', ru: 'ч', ruUp: 'Ч', type: "print"},
    'KeyC': {en: 'c', enUp: 'C', ru: 'с', ruUp: 'С', type: "print"},
    'KeyV': {en: 'v', enUp: 'V', ru: 'м', ruUp: 'М', type: "print"},
    'KeyB': {en: 'b', enUp: 'B', ru: 'и', ruUp: 'И', type: "print"},
    'KeyN': {en: 'n', enUp: 'N', ru: 'т', ruUp: 'Т', type: "print"},
    'KeyM': {en: 'm', enUp: 'M', ru: 'ь', ruUp: 'Ь', type: "print"},
    'Comma': {en: ',', enUp: '<', ru: 'б', ruUp: 'Б', type: "print"},
    'Period': {en: '.', enUp: '>', ru: 'ю', ruUp: 'Ю', type: "print"},
    'Slash': {en: '/', enUp: '?', ru: '.', ruUp: ',', type: "print"},
    'ArrowUp': {en: '&uarr;', enUp: '&uarr;', ru: '&uarr;', ruUp: '&uarr;', type: "action"},
    'ShiftRight': {en: 'Shift', enUp: 'Shift', ru: 'Shift', ruUp: 'Shift', type: "keyPress"},
    'ControlLeft': {en: 'Ctrl', enUp: 'Ctrl', ru: 'Ctrl', ruUp: 'Ctrl', type: "keyPress"},
    'MetaLeft': {en: 'Win', enUp: 'Win', ru: 'Win', ruUp: 'Win', type: "action"},
    'AltLeft': {en: 'Alt', enUp: 'Alt', ru: 'Alt', ruUp: 'Alt', type: "keyPress"},
    'Space': {en: " ", enUp: " ", ru: " ", ruUp: " ", type: "print"},
    'AltRight': {en: 'Alt', enUp: 'Alt', ru: 'Alt', ruUp: 'Alt', type: "keyPress"},
    'ArrowLeft': {en: '&larr;', enUp: '&larr;', ru: '&larr;', ruUp: '&larr;', type: "action"},
    'ArrowDown': {en: '&darr;', enUp: '&darr;', ru: '&darr;', ruUp: '&darr;', type: "action"},
    'ArrowRight': {en: '&rarr;', enUp: '&rarr;', ru: '&rarr;', ruUp: '&rarr;', type: "action"},
    'ControlRight': {en: 'Ctrl', enUp: 'Ctrl', ru: 'Ctrl', ruUp: 'Ctrl', type: "keyPress"},
    }
    
class Button{
    constructor(){
        this.langs = ["en","ru"];
        this.lang = "en";
        this.capsLock = "";
        this.textarea = "";
        this.controlValue = false;
        this.altValue = false;
        this.shiftValue = false;
        this.capsValue = false;
        this.currentPosition = 0;
        this.clickedButtonKeyCode = "";
        this.isLangChanged = false;

        this.isCapsLockOn = false;
        this.isShiftOnKEY = false;
        this.isShiftOnMOUSE = false;
        this.isCtrlOnKEY = false;
        this.isCtrlOnMOUSE = false;
        this.isAltOnKEY = false;
        this.isAltOnMOUSE = false;

        if(arguments.length){           
            if(arguments.length == 1)
                [this.lang] = arguments;
            else if(arguments.length == 2)
                [this.lang, this.capsLock] = arguments; 
            else if(arguments.length == 3)
                [this.lang, this.capsLock, this.workspace] = arguments; 
        }
    }

    set ClickedButtonKeyCode(keyCode){
        this.clickedButtonKeyCode = keyCode;
    }

    get ClickedButtonKeyCode(){
        return this.clickedButtonKeyCode;
    }

    set isLanguageChanged(bool){
        this.isLangChanged = bool;
    }

    get isLanguageChanged(){
        return this.isLangChanged;
    }

    set control(bool){
        this.controlValue = bool;
    }

    get control(){
        return this.controlValue;
    }

    set shift(bool){
        this.shiftValue = bool;
    }

    get shift(){
        return this.shiftValue;
    }

    set alt(bool){
        this.altValue = bool;
    }

    get alt(){
        return this.altValue;
    }

    set language(lang) {
        this.lang = lang;
    }

    get language() {
        return this.lang;
    }

    set upperCase(capsLock) {
        this.capsLock = capsLock;
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
            let {[`${this.lang}${this.capsLock}`]:innerHTML, type} = value;
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
        let outStringType = this.lang + this.capsLock;
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

    Delete(){
        let [text, pos] = [this.textarea.value, this.currentPosition];
        let [start, end] = [this.textarea.selectionStart, this.textarea.selectionEnd];

        if(start == end){
            if(text.length>0 && pos < text.length) {
                this.textarea.value = text.substring(0,pos) + text.substring(pos+1,text.length);
            }
        } else {
            this.textarea.value = text.substring(0,start) + text.substring(end,text.length);
            this.currentPosition = start;
        }
        this.textarea.selectionEnd = this.currentPosition;  
        this.textarea.selectionStart = this.currentPosition;
        this.textarea.focus();
    }

    MetaLeft(){
        return;
    }

    changeCapsLock(){
        if(this.capsLock == "Up") this.capsLock = "";
        else this.capsLock = "Up";
        this.fillKeyboard();
    }

    CapsLock(){
        this.changeCapsLock();
        this.capsValue = !this.capsValue;
        this.textarea.focus();
        this.isCapsLockOn =!this.isCapsLockOn;
    }

    changeLang(){
        let posInLangs = this.langs.indexOf(this.lang);
        this.lang = this.langs[Number(!posInLangs)];
    
        this.AltReset();
        this.CtrlReset();

        this.fillKeyboard();
        this.isLangChanged = true;
        this.textarea.focus();
    }

    Shift(){
        this.shiftValue = true;
        this.changeCapsLock();
        this.textarea.focus();
    }

    ShiftReset(){
        this.shiftValue = false;
        this.changeCapsLock();
        this.textarea.focus();
    }

    ShiftLeft(){this.Shift();}
    ShiftRight(){this.Shift();}
    ShiftLeftReset(){this.ShiftReset();}
    ShiftRightReset(){this.ShiftReset();}

    Alt(){
        this.altValue = true;
        if(this.controlValue) this.changeLang();
        this.textarea.focus();
    }

    AltReset(){
        this.altValue = false;
        this.textarea.focus();
    }

    AltLeft(){this.Alt();}
    AltRight(){this.Alt();}
    AltLeftReset(){this.AltReset();}
    AltRightReset(){this.AltReset();}

    Ctrl(){
        this.controlValue = true;
        if(this.altValue) this.changeLang();
        this.textarea.focus();
    }

    CtrlReset(){
        this.controlValue = false;

        if(this.currentPosition == this.textarea.selectionStart) this.textarea.selectionEnd = this.currentPosition;
        else this.textarea.selectionStart = this.currentPosition;

        this.textarea.focus();
    }

    ControlLeft(){this.Ctrl();}
    ControlRight(){this.Ctrl();}
    ControlLeftReset(){this.CtrlReset();}
    ControlRightReset(){this.CtrlReset();}

    get currentPositionInRow(){
        let text = this.textarea.value;
        let rows = text.split('\n');

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
    }

    changeSelection(parsedText, shiftValue){
        var oldPosition = this.currentPosition;
        this.changeCurrentPosition(parsedText);
        
        var start, end;
        [start, end] = [this.textarea.selectionStart, this.textarea.selectionEnd];  

        if(this.shiftValue){
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
        this.textarea.focus();
    }

    ArrowMove(shiftRow, shiftColumn){
        let parsedText = this.currentPositionInRow;
        if(shiftRow) {
            let [rows,currentRow,currentColumn] = this.changeCurrentRow(shiftRow, parsedText); 
            [,,currentColumn] = this.changeCurrentColumn(0,[[rows[currentRow]],0,currentColumn]);
            this.changeSelection([rows,currentRow,currentColumn], shiftRow);
        }
        if(shiftColumn) {
            parsedText = this.changeCurrentColumn(shiftColumn, parsedText);
            this.changeSelection(parsedText, shiftColumn);
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


let btn;
let language;

window.addEventListener('load',loadWindow);

function loadWindow(){
    var loaded = localStorage.getItem('loaded');
    if(loaded){
        language = localStorage.getItem('language');
    } else {
        language = "en";
        localStorage.setItem('loaded',true);
        localStorage.setItem('language',language);
    }

    makeDOM();
    addListeners();
}

function makeDOM(){
    btn = new Button(language);
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
    let newButton = document.createElement('button');
    newButton.classList.add('key');

    for (let i = 0; i < numElements; i++){
        fragment.appendChild(newButton.cloneNode(true));
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
    document.querySelectorAll('.key_short').forEach(button => button.classList.add('key_action'));
    document.querySelectorAll('.key_middle').forEach(button => button.classList.add('key_action'));
    document.querySelectorAll('.key_long').forEach(button => button.classList.add('key_action'));
    document.querySelectorAll('#action').forEach(button => button.classList.add('key_action'));
    document.querySelectorAll('#keyPress').forEach(button => button.classList.add('key_action'));

    btn.workspace = output; 

    let pSystem = document.createElement('p');
    pSystem.classList.add('body__text');
    pSystem.innerHTML = "Клавиатура создана в операционной системе Windows";
    bodyWrapper.appendChild(pSystem);

    let pChangeLanguage = document.createElement('p');
    pChangeLanguage.classList.add('body__text');
    pChangeLanguage.innerHTML = "Для переключения языка комбинация: ctrl + alt";
    bodyWrapper.appendChild(pChangeLanguage);

    let pMakeSelection = document.createElement('p');
    pMakeSelection.classList.add('body__text');
    pMakeSelection.innerHTML = "Для выделения текста комбинация: shift + (&larr;, &rarr;, &uarr;, &darr;)";
    bodyWrapper.appendChild(pMakeSelection);
}

function addListeners(){
    let allButtons = document.querySelectorAll('.key');
    allButtons.forEach(button => button.addEventListener('mouseover',mouseoverSomeButton));
    allButtons.forEach(button => button.addEventListener('mouseout',mouseoutSomeButton));
       
    let keyboard = document.querySelector('.keyboard__wrapper');
    keyboard.addEventListener('mouseup',mouseupOverKeyboard);

    let printButtons = document.querySelectorAll('#print');
    printButtons.forEach(button => button.addEventListener('mousedown', mousedownPrintButton));
    printButtons.forEach(button => button.addEventListener('mouseup', mouseUp));

    let specificPrintButtons = document.querySelectorAll('#specificPrint');
    specificPrintButtons.forEach(button => button.addEventListener('mousedown', mousedownSpecificPrintButton));
    specificPrintButtons.forEach(button => button.addEventListener('mouseup', mouseUp));

    let pressButtons = document.querySelectorAll('#keyPress');
    pressButtons.forEach(button => button.addEventListener('mousedown',mousedownPressButton));
    pressButtons.forEach(button => button.addEventListener('mouseup',mouseupPressButton));

    let actionButtons = document.querySelectorAll('#action');
    actionButtons.forEach(button => button.addEventListener('mousedown', mousedownActionButton));
    actionButtons.forEach(button => button.addEventListener('mouseup', mouseUp));

    let capsLockButton = document.querySelector('#capsLock');
    capsLockButton.addEventListener('mousedown',clickCapsLockButton);

    let textarea = document.querySelector('.output-textarea');
    textarea.addEventListener('click',clickTextarea);

    textarea.addEventListener('keydown', keyDown);
    textarea.addEventListener('keyup',keyUp);
    textarea.focus();
}

function saveLanguage(currentLanguage){
    language = currentLanguage;
    localStorage.setItem('language',language);
}

function mouseoverSomeButton(){
    event.preventDefault();
    event.target.classList.add('key_mouseover');
}

function mouseoutSomeButton(){
    event.preventDefault();
    event.target.classList.remove('key_mouseover');
}

function mouseupOverKeyboard(){
    event.preventDefault();
    if(btn.ClickedButtonKeyCode) {
        let button = document.querySelector(`.keyboard__wrapper button[name = ${btn.ClickedButtonKeyCode}]`);
        button.classList.remove('key_mousedown');
        btn.ClickedButtonKeyCode = "";
    }

    if(btn.isLanguageChanged) resetOptionsOnChangeLanguage();
}    

function mouseDown(event){
    event.preventDefault();
    event.target.classList.add('key_mousedown');
}

function mouseUp(event){
    event.preventDefault();
    event.target.classList.remove('key_mousedown');
}


function mousedownPrintButton(event){
    mouseDown(event);

    btn.PrintSymbol(event.target.innerHTML);
    btn.ClickedButtonKeyCode = event.target.name;
}


function mousedownSpecificPrintButton(){
    mouseDown(event);
    btn.ClickedButtonKeyCode = event.target.name;
    btn[event.target.name]();

    let shLeft = document.querySelector('.key[name = ShiftLeft]');
    let shRight = document.querySelector('.key[name = ShiftRight]');

    if(shLeft.classList.contains('key_mousedown')){
        shLeft.classList.remove('key_mousedown');       
        btn.ShiftLeftReset();
        btn.isShiftOnMOUSE = false;
        btn.isShiftOnKEY = false;
    } else if(shRight.classList.contains('key_mousedown')){
        shRight.classList.remove('key_mousedown');       
        btn.ShiftRightReset();
        btn.isShiftOnKEY = false;
        btn.isShiftOnMOUSE = false;
    }
}

function mousedownActionButton(event){
    mouseDown(event);
    btn.ClickedButtonKeyCode = event.target.name;
    btn[event.target.name]();
}

function mousedownPressButton(event){
    event.preventDefault();
    var button = event.target; 
    var addFunctionName; 
    var funcName = "";
    var isFieldOnKEY = "is" + button.innerHTML + "OnKEY"; 
    var isFieldOnMOUSE = "is" + button.innerHTML + "OnMOUSE";

    let [buttonOtherSide, fieldName] = activateControlButton(button);
    if(!btn[isFieldOnKEY] && !btn[isFieldOnMOUSE]){
        mouseDown(event);
        if(!buttonOtherSide.classList.contains('key_mousedown')) {
            if(btn[fieldName]) addFunctionName = "Reset";
            else addFunctionName = "";
            funcName = `${button.name}${addFunctionName}`;
            btn[funcName]();
            btn[isFieldOnMOUSE] = true;
        }
}
}

function resetOptionsOnChangeLanguage(){
    btn.isCtrlOnMOUSE = false;
    btn.isCtrlOnKEY = false;
    btn.isAltOnKEY = false;
    btn.isAltOnMOUSE = false;
    document.querySelector('.key[name = ControlLeft]').classList.remove('key_mousedown');
    document.querySelector('.key[name = ControlRight]').classList.remove('key_mousedown');
    document.querySelector('.key[name = AltLeft]').classList.remove('key_mousedown');
    document.querySelector('.key[name = AltRight]').classList.remove('key_mousedown');
    btn.isLanguageChanged = false;
    saveLanguage(btn.language);
}

function mouseupPressButton(event){
    event.preventDefault();
    var button = event.target; 
    button.classList.add('key_mouseover');   
    var addFunctionName;
    var funcName = "";

    var isFieldOnMOUSE = "is" + button.innerHTML + "OnMOUSE";

    let [buttonOtherSide, fieldName] = activateControlButton(button);
    if(btn[isFieldOnMOUSE] && !buttonOtherSide.classList.contains('key_mousedown')){
        btn[isFieldOnMOUSE]  = false;
        if(!btn.isLanguageChanged) { 
            button.classList.remove('key_mousedown');   
            if(!buttonOtherSide.classList.contains('key_mousedown')) {
                if(btn[fieldName]) {
                    addFunctionName = "Reset";
                    funcName = `${button.name}${addFunctionName}`;
                    btn[funcName]();
                }    
            }
        } else resetOptionsOnChangeLanguage();
    }
}

function activateControlButton(button){
    let addName, lenOfSideName;
    if (button.name.match("Left")){
        lenOfSideName = 4;
        addName = "Right";
    } else {   
        lenOfSideName = 5;
        addName = "Left"; 
    }    
    
    let buttonCommonName = button.name.substring(0,button.name.length - lenOfSideName); 
    let fieldName = buttonCommonName.toLowerCase();

    buttonCommonName += addName;
    let buttonOtherSide = document.querySelector(".keyboard__wrapper .key[name = " + buttonCommonName);

    return [buttonOtherSide, fieldName];
}



function clickCapsLockButton(event){
    event.preventDefault();
//    event.target.classList.toggle('key_mouseover');
    event.target.classList.toggle('key_mousedown');   
    btn[event.target.name]();
}

function clickTextarea(){
    btn.setCurrentPosition();
}


function keyDown(){
    let keyCode = event.code;

    if(keyCode in keys){
        let className = '.keyboard__wrapper .key[name=' + keyCode + ']';
        let key = document.querySelector(className);
        var isFieldOnKEY = "is" + key.innerHTML + "OnKEY"; 
        var isFieldOnMOUSE = "is" + key.innerHTML + "OnMOUSE";

        if(keyCode == "CapsLock"){
            event.preventDefault();
            key.classList.toggle('key_mousedown');
            btn[keyCode]();
            btn.isCapsLockOn = !btn.isCapsLockOn;
        } else if(keyCode.match("Left") || keyCode.match("Right")){
            if(!btn[isFieldOnMOUSE]){
                let otherKeyCode;
                if(keyCode.match("Left")) otherKeyCode = keyCode.substring(0,keyCode.length - 4) + "Right";
                else otherKeyCode = keyCode.substring(0,keyCode.length - 5) + "Left";
                let otherClassName = '.keyboard__wrapper .key[name=' + otherKeyCode + ']';
                let otherKey = document.querySelector(otherClassName);
                if(!otherKey.classList.contains('key_mousedown')){
                    key.classList.add('key_mousedown');
                    if(!btn[isFieldOnKEY]){
                        btn[isFieldOnKEY] = true;
                        if(key.innerHTML == "Shift"){
                            if(btn.isCapsLockOn) btn[keyCode + "Reset"]();
                            else btn[keyCode]();    
                        } else btn[keyCode]();
                    }
                }
            }
        } else key.classList.add('key_mousedown');

        if(keyCode == "Tab") {
            event.preventDefault();
            btn[keyCode]();
        }

        if(key.id == "print"){
            event.preventDefault();
            btn.Print(keyCode);
        }

        if(keyCode.match("Arrow")){
            event.preventDefault();
            btn[keyCode]();
        }
    }
}

function keyUp(){
    let keyCode = event.code;

    if(keyCode in keys){
        let className = '.key[name=' + keyCode + ']';
        let key = document.querySelector(`.keyboard__wrapper ${className}`);
        var isFieldOnKEY = "is" + key.innerHTML + "OnKEY"; 
        var isFieldOnMOUSE = "is" + key.innerHTML + "OnMOUSE";

        if(!keyCode.match("CapsLock") && key.classList.contains('key_mousedown')) {
            key.classList.remove('key_mousedown');
            if(keyCode.match("Left") || keyCode.match("Right")){
                if(btn[isFieldOnKEY]){
                    btn[isFieldOnKEY] = false;
                    if(key.innerHTML == "Shift"){
                        if(btn.isCapsLockOn) btn[keyCode]();
                        else btn[keyCode + "Reset"]();    
                    } else {
                        if(!btn.isLanguageChanged) btn[keyCode + "Reset"]();
                        else resetOptionsOnChangeLanguage();
                    }
                }
                if(btn[isFieldOnMOUSE]){
                    btn[isFieldOnMOUSE] = false;
                    if(key.innerHTML == "Shift") {
                        if(btn.isCapsLockOn) btn[keyCode]();
                        else btn[keyCode + "Reset"]();     
                    } else {
                        if(!btn.isLanguageChanged) btn[keyCode + "Reset"]();
                        else resetOptionsOnChangeLanguage();
                    }
                }
            }
        }
    }    
}    