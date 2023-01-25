// ======= *** FUNCTIONS *** =============================================

/* 🚀 Practice Exercise - 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
"A soma total de 1 a 50 é:__" */

// FUNÇÃO ANÔNIMA ----------------------------------

const sumNumbers = function(n) {
  let sum = 0;
  for (let index = 0; index <= n; index += 1) {
    sum += index;
  } return sum;
}
console.log(`A soma total de 1 a 50 é ${sumNumbers(50)}.`);

// ARROW FUNCTION - -------------------------------- to be continued!!!