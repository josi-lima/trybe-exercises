// ======= *** FUNCTIONS *** =======================================================

/* 🚀 Practice Exercise - Crie uma função que que receba a nota de uma pessoa candidata, de 01 a 100, em um desafio técnico. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. */

// FUNÇÃO ANÔNIMA ----------------------------------

const checkApproval = function (score) {
  if (score > 0) {
    if (score >= 80 && score <= 100) {
      return "Parabéns, você faz parte do grupo das pessoas aprovadas!";
    } else if (score >= 60 && score < 80) {
      return "Você está em nossa lista de espera!";
    } else if (score < 60) {
      return "Infelizmente, você reprovou.";
    } else {
      return "Por favor, insira uma nota válida!";
    }
  } else {
    return "Infelizmente, sua nota foi zero.";
  }
};
console.log(checkApproval(68));

// ===================================================================================

/* 🚀 Practice Exercise - Crie funções para encontrar a área e o perímetro de um retângulo de base 5 e altura 8. */

// ARROW FUNCTION - one line ---------------------------

const findRectangleArea = (base, height) => base * height;
console.log(findRectangleArea(5, 8));

// FUNÇÃO ANÔNIMA ----------------------------------

const findRectanglePerimeter = function (base, height) {
  const perimeter = (base + height) * 2;
  return perimeter;
};
console.log(findRectanglePerimeter(5, 8));

// ===================================================================================

/* 🚀 Practice Exercise (Academia de Lógica) - 1. Descubra a idade mínima

Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e verifique quem é a pessoa mais jovem. Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:

"X é a pessoa mais jovem e possui Y anos de idade."

Segue a idade sugerida de cada pessoa: Marina tem 27 anos, Silvia 18 e Iza 63. */

const checkOldest = function (Marina, Silvia, Iza) {
  if (Marina > Silvia && Marina > Iza) {
    return "Marina é a mais velha";
  } else if (Silvia > Marina && Silvia > Iza) {
    return "Silvia é a mais velha";
  } else {
    return "Iza é a mais velha";
  }
};
console.log(checkOldest(27, 18, 63));

// ====================================================================================

/* 🚀 Practice Exercise (Academia de Lógica) - 2. Taxa Metabólica Basal

Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de TMB (Taxa Metabólica Basal) em seu site, vamos ajudá-la escrevendo um algoritmo. Ele recebe os seguintes dados:

age: número maior que 0
sex: M ou F
weight: Em (kg) com número maior que 0
height: Em (cm) com número maior que 0

A fórmula para homens:
(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5

A fórmula para mulheres:
(altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161

Imprima no terminal o resultado do cálculo no formato:

"A taxa metabólica basal é: x Kcal" */

// FUNÇÃO ANÔNIMA ----------------------------------

const checkTBM = function (age, sex, weight, height) {

  let calculation = parseInt(height * 6.25 + weight * 9.99 - age * 4.92);
  
  if (age > 0 && weight > 0 && height > 0) {
    if (sex === 'F') {
      return `${calculation - 161}`;
    } else if (sex === 'M') {
      return `${calculation - 5}`;
    }
  } // console.log('Please, insert valid information.');
}
console.log(`A taxa metabólica basal é: ${checkTBM(37, 'F', 58.5, 167)} kcal.`);

// =================================================================