
/* Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    - document.querySelector() */

        
/* 1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício) */

function changeText(){
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = 'I will be working around the world as a software developer pretty soon!';
}
changeText();


//2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).

function changeColorToGreen(){
    let yellowSquare = document.getElementsByClassName('main-content')[0];
    yellowSquare.style.background = 'rgb(76,164,109)';
}
changeColorToGreen();
        

//3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
        
function changeColorToWhite(){
    let redSquare = document.getElementsByClassName('center-content')[0];
    redSquare.style.background = '#fff';
}
changeColorToWhite();
        

//4. Crie e execute uma função que corrija o texto da tag <h1>.

function correctTitle(){
    let newTitle = document.querySelector('h1');
    newTitle.innerHTML = 'Exercício 5.1 - Javascript';
}
correctTitle();


//5. Crie e execute uma função que modifique todo o texto da tag <p> para maiúsculo.

function changeToCapitalLetter(){
    let paragraphUpperCase = document.getElementsByTagName('p')[0];
    paragraphUpperCase.innerHTML = paragraphUpperCase.innerHTML.toUpperCase();
}
changeToCapitalLetter();


//6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.

function showParagraph(){
    let paragraphs = document.getElementsByTagName('p');
    for (let index = 0; index < paragraphs.length; index += 1) {
        console.log(paragraphs[index].innerHTML);
    }
}
showParagraph();

  
