// ======= *** FUNCTIONS *** =======================================================

/* 🚀 Practice Exercise - Crie uma função que que receba a nota de uma pessoa candidata, de 01 a 100, em um desafio técnico. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. */

// FUNÇÃO ANÔNIMA ----------------------------------

const checkApproval = function (score) {
  if (score > 0) {
    if (score >= 80 && score <= 100) {
      return 'Parabéns, você faz parte do grupo das pessoas aprovadas!';
    } else if (score >= 60 && score < 80) {
      return 'Você está em nossa lista de espera!';
    } else if (score < 60) {
      return 'Infelizmente, você reprovou.';
    } else {
      return 'Por favor, insira uma nota válida!';
    }
  } else {
    return 'Infelizmente, sua nota foi zero.';
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
}
console.log(findRectanglePerimeter(5, 8));
