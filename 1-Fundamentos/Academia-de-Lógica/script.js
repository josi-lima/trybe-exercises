// =============== *** FUNCTIONS *** =============================================

// =============== 💡 Academia de Lógica - 3.1 JavaScript: Primeiros passos  ========================

/* 🚀 Practice Exercise (Academia de Lógica) - 1. Descubra a idade mínima

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e verifique quem é a pessoa mais jovem. Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:

"X é a pessoa mais jovem e possui Y anos de idade."

Segue a idade sugerida de cada pessoa: Marina tem 27 anos, Silvia 18 e Iza 63. */

// FUNÇÃO ANÔNIMA ----------------------------------

const checkYoungest = function (ageMarina, ageSilvia, ageIza) {

  if (ageMarina < ageSilvia && ageMarina < ageIza) {
    return `Marina é a pessoa mais jovem e possui ${ageMarina} anos de idade.`;
  } else if (ageSilvia < ageMarina && ageSilvia < ageIza) {
    return `Silvia é a pessoa mais jovem e possui ${ageSilvia} anos de idade.`;
  } else {
    return `Iza é a pessoa mais jovem e possui ${ageIza} anos de idade.`;
  }
};
console.log(checkYoungest(27, 18, 63));

// ====================================================================================

/* 🚀 Practice Exercise (Academia de Lógica) - 2. Taxa Metabólica Basal

Ana Laura é nutricionista e quer disponibilizar uma calculadora de TMB (Taxa Metabólica Basal) em seu site, vamos ajudá-la escrevendo um algoritmo. Ele recebe os seguintes dados:

age: número maior que 0
sex: M ou F
weight: Em (kg) com número maior que 0
height: Em (cm) com número maior que 0

A fórmula para homens: (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5

A fórmula para mulheres: (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161

Imprima no terminal o resultado do cálculo no formato: "A taxa metabólica basal é: x Kcal" */

// FUNÇÃO ANÔNIMA ----------------------------------

const checkTMB = function (age, sex, weight, height) {

  let calculation = Math.floor(height * 6.25 + weight * 9.99 - age * 4.92);
  
  if (age > 0 && weight > 0 && height > 0) {
    if (sex === 'F') {
      return `A taxa metabólica basal é: ${calculation - 161} kcal.`;
    } else if (sex === 'M') {
      return `A taxa metabólica basal é: ${calculation + 5} kcal.`;
    }
  } return 'Por favor, digite dados válidos.';
}
console.log(checkTMB(37, 'F', 58.5, 167));

// =================================================================

/* 🚀 Practice Exercise (Academia de Lógica) - 3. Lanchonete Vegana da Trybe

O bootcamp Trybe abriu uma lanchonete vegana e precisa criar um menu de opções para que as pessoas consigam escolher qual lanche maravilhoso e saudável irão pedir. Para isso, escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo e imprima no terminal a mensagem de acordo com a opção escolhida.

Ou seja, se o número for 2 o código deve imprimir no terminal "2 - McTrybe". Tabela:

"1 - Trybe Lanche Feliz"
"2 - McTrybe"
"3 - TrybeWooper"
"4 - X-Trybe"
"5 - Triplo Trybe com JS"

Caso a pessoa escolha uma opção inexistente, imprima no terminal: "Ainda não possuímos esta opção :(" */

// ========================================================================================================

// =============== 💡 Academia de Lógica - 3.2 JavaScript: Array e Loop For  ========================

/* 🚀 Practice Exercise (Academia de Lógica) - 1. Encontrando o index

Encontre o index através do valor de um elemento. Escreva um algoritmo que recebe 2 parâmetros:

a) Um array contendo um conjunto de números;
b) O valor de um desses elementos.

Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se. 

Caso não o encontre, imprima: "Elemento não encontrado no array" */

// =================================================================

/* 🚀 Practice Exercise (Academia de Lógica) - 2. Retorne os números ímpares

🤸‍♂️ A Dora Aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão: "x, y, z, ...n" */

// FUNÇÃO ANÔNIMA ---------------------------------- to be fixed!!!

const findOddNumbers = function () {
  let oddNumbers = ' ';

  for (let index = 1; index <= 50; index += 2) {
    oddNumbers = index; 
  } return oddNumbers;
}
console.log(findOddNumbers());
// =================================================================

/* 🚀 Practice Exercise (Academia de Lógica) - 3. Encontre os números divisíveis por 3

Escreva um algoritmo que cria uma sequência numérica de inteiros com intervalo de 1 entre eles. O algoritmo deve receber antes de criar essa sequência, o valor inicial e final.

Conte os números divisíveis por 3 da sequência e imprima no terminal condicionando:

Se houver 50 ou mais: "Há 50 ou mais números divisíveis por 3."

Caso o contrário: "Sequência muito pequena." */

// =================================================================