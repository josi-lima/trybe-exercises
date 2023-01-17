// Você se lembra dos vídeos da aula anterior, como fazer isso?


// ----------------------------- PRIMEIRA PARTE ----------------------------------------

// 1. Acesse o elemento elementoOndeVoceEsta.

function findElement(){
    const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
}


// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

function addColor(){
    const fatherElement = elementoOndeVoceEsta.parentElement;
    fatherElement.style.color = '#fff';
}
   

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
    
function addText(){
    const childElement = elementoOndeVoceEsta.firstElementChild;
    childElement.innerHTML = 'Programming on Sunday can be tiring!';
}


// 4. Acesse o primeiroFilho a partir de pai.

function accessElementOne(){
    const firstChildOne = pai.firstElementChild;
}
    

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
   
function accessElementTwo(){
    const firstChildTwo = elementoOndeVoceEsta.previousElementSibling;
}
   

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
    
function accessText(){
    const textElement = elementoOndeVoceEsta.nextSibling;
}


// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

function accessThirdChild(){
    const thirdChildFound = elementoOndeVoceEsta.nextElementSibling;
}


// 8. Agora acesse o terceiroFilho a partir de pai.

function accessElementBeforeLast(){
    const thirdChildAccessed = pai.lastElementChild.previousElementSibling;
}

// ----------------------------- SEGUNDA PARTE ----------------------------------------
    
// 1. Crie um irmão para elementoOndeVoceEsta.


// 2. Crie um filho para elementoOndeVoceEsta.



// 3. Crie um filho para primeiroFilhoDoFilho.



// 4. A partir desse filho criado, acesse terceiroFilho.




// ----------------------------- TERCEIRA PARTE ----------------------------------------

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.