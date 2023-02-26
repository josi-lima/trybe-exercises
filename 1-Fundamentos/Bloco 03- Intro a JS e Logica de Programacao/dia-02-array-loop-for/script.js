// ======= *** EXERCISES - DAY 02 (JavaScript: Array & Loop for) *** =============================================

/* 🚀 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];*/ 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 

for (let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
}


/* 🚀 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; */
let result = 0;

for (let index = 0; index < numbers.length; index += 1){
  result += numbers[index];
}
console.log(`Exercício 2: ${result}`)


/* 🚀 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.*/

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}

let media = result / numbers.length;

console.log(`Exercício 2: ${media}`)


/* 🚀 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";*/

if (media > 20) {
  console.log('Valor maior que 20!');  
} else {
  console.log('Valor menor ou igual a 20!');  
}


/* 🚀 5. Utilizando for, descubra qual o maior valor contido no array e imprima-o;*/

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let highestNumber = [0];

for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] > highestNumber){
    highestNumber = numbers[index];
  } 
}
console.log(`The highest number is ${highestNumber}.`)


// 🚀 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let oddNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if(numbers[index] % 2 !== 0){
    oddNumbers = oddNumbers + 1; 
  } 
} 

if (oddNumbers === 0) {
  console.log('No odd numbers found.');
} else {
  console.log(`The amount of odd numbers is ${oddNumbers}.`);
} 
 
// 🚀 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;


// 🚀 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;


// 🚀 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.


