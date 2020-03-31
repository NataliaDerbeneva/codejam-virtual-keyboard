const body = document.querySelector('body');

window.addEventListener("onload", makeKeyboardTable());

function makeKeyboardTable(){

    const keyboardWrapper = document.createElement("div");
    body.append(keyboardWrapper);
    keyboardWrapper.classList.add("keyboard-wrapper");

    const numRows = 5;
    const numCols = [14,15,13,13,9];
    let numElements = 0;
        for(let i=0; i<numRows; i++){
            numElements += numCols[i];
        }
    
    let fragment = document.createDocumentFragment();
    let div = document.createElement('div');
    div.classList.add('key');
    
    for (let i = 0; i < numElements; i++){
        fragment.appendChild(div.cloneNode(true));
    }   

    keyboardWrapper.appendChild(fragment);
    console.log(keyboardWrapper);
}