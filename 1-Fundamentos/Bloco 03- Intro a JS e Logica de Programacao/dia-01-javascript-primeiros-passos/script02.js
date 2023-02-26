// ======= *** EXERCISES - DAY 01 (JavaScript: First steps) *** =============================================

/* 🚀 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, com os valores que serão operados.*/

const calcNumbers = (a, b) => {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
  console.log(a % b);
}
calcNumbers(10, 5);

// ===================================================================================

/* 🚀 2. Faça um programa que retorne o maior de dois números. Defina os valores que serão comparados.*/

const findHighestNumber = (numberA, numberB) => {

  if (numberA > numberB) return numberA;  
  else if (numberB > numberA) return numberB; 
  return 'an invalid number'; 
}
console.log(`The highest number is ${findHighestNumber(0)}.`);  // 90

// ===================================================================================

/* 🚀 3. Faça um programa que retorne o maior número de uma lista quando comparados.*/

const findBiggestNumber = (numbers) => {
  let biggestNumber = numbers[0];

  for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] > biggestNumber){
        biggestNumber = numbers[index];
    } 
  }
  return biggestNumber;
}
console.log(`The biggest number is ${findBiggestNumber([75, 90, 8, 127])}.`);  // 127

// ===================================================================================

/* 🚀 4. Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".*/

const findPositiveNumber = (num) => {

  if (num > 0) return 'positive';
  else if (num < 0) return 'negative';
  return 'zero';
}
console.log(`The number typed is ${findPositiveNumber(-10)}.`); // negative
  
// ===================================================================================

/* 🚀 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

- Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
- Um ângulo será considerado inválido se não tiver um valor positivo. */

const isTriangle = (angleA, angleB, angleC) => {
  let sumOfAngles = angleA + angleB + angleC; 

  if(sumOfAngles === 180){
    return true;
  } else if(angleA < 0 || angleB < 0 || angleC < 0){
    return 'invalid';
  } else if(sumOfAngles !== 180 ){
    return false;
  } else {
    return 'It does not apply in any other test';
  }  
}
console.log(isTriangle(60, 60, 70));  // false

// =======================================================================

/* 🚀 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.*/

const playChess = (chessPiece) => {
  let movement = "";

  switch(chessPiece.toLowerCase()){
    case 'rei' :
      movement = 'uma casa apenas para qualquer direção';
      break;
    case 'bispo':
      movement = 'diagonal';
      break;    
    case 'rainha':
      movement = 'diagonal, horizontal e vertical';
      break;
    case 'cavalo':
      movement = 'pular sobre as peças';
      break;
    case 'torre':
      movement = 'horizontal e vertical';
      break;
    case 'peão':
      movement = 'apenas uma casa para frente, no primeiro movimento podem ser duas casas'
      break;
    default:
      movement = 'inválido';
      break;
  }   
  return `Se a peça de xadrez ${chessPiece} for utilizada, o movimento será: ${movement}.`;
} 
console.log(playChess('torre')); // horizontal e vertical

// =====================================================================

/* 🚀 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

>= 90% : A | >= 80% : B | >= 70% : C | >= 60% : D | >= 50% : E | < 50% : F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

const convertGrades = (grade) => {

  if(grade < 0 || grade > 100){
    return 'Invalid';
  } else if(grade >= 90){
    return 'A. Congratulations!';
  } else if(grade >= 80){
    return 'B. Keep it up!';
  } else if(grade >= 70){
    return 'C. Keep working on your score!';
  } else if(grade >= 60){
    return 'D. Maybe next time?';
  } else if(grade >= 50){
    return 'E. How about asking for help?';
  } else if(grade < 50){
    return 'F. Failing is a part of learning!';
  } 
}
console.log(`Your grade is: ${convertGrades('40')}`); // F

// =====================================================================

/* 🚀 8. Escreva um programa que verifique três números e retorne true se pelo menos um dos três for par. Caso contrário, ele retorna false.

Bônus: use somente um if.*/

const checkEvenNumbers = (num1, num2, num3) => {
  if(num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0){
    return true;  
  } 
  return false;
}
console.log(`Is one of the numbers even? ${checkEvenNumbers(4, 8, 9)}.`);  // true

// =====================================================================

/* 🚀 9. Escreva um programa que compare números de um array e retorne true se pelo menos um deles for ímpar. Caso contrário, retorna false. */

const checkOddNumbers = (numbers) => {

  for (let index = 0; index < numbers.length; index += 1) {
    if(numbers[index] % 2 !== 0) return true;  
  } 
  return false;
}
console.log(`Is one of the numbers odd? ${checkOddNumbers([4, 8, 10])}.`);  // true

// =====================================================================

/* 🚀 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

Atente que, sobre o custo do produto, incide um imposto de 20%.

Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

let saleValue = 100;
let costProduct = 40;
let taxOnTheCost = 20;

const totalCostProduct = costProduct + (taxOnTheCost / 100) * costProduct;

const profit = saleValue - totalCostProduct;

const productSold1000 = profit * 1000;

const allPositiveNumbers = (saleValue > 0) && (costProduct > 0) && (taxOnTheCost > 0);

if(allPositiveNumbers){
  if(profit * 1000){
  console.log(`The profit of the sale of 1000 products is ${productSold1000}.`);
    }
} else {
  console.log('Error! Negative number input.')
}

// =====================================================================

/* 🚀 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.*/

// =====================================================================

