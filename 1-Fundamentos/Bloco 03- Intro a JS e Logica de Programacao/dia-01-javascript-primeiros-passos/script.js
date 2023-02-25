// ======= *** FUNCTIONS - Conditions *** =============================================

/* 🚀 Practice Exercise - Crie uma função dinâmica que que receba a nota de uma pessoa candidata, de 01 a 100, em um desafio técnico. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. */

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
console.log(checkApproval(68)); // Você está em nossa lista de espera!

// ===================================================================================

/* 🚀 Practice Exercise - Crie funções dinâmicas para encontrar a área e o perímetro de um retângulo de base 5 e altura 8. */

// ARROW FUNCTION - one line ---------------------------

const findRectangleArea = (base, height) => base * height;
console.log(findRectangleArea(5, 8)); // 40

// FUNÇÃO ANÔNIMA ----------------------------------

const findRectanglePerimeter = function (base, height) {
  const perimeter = (base + height) * 2;
  return perimeter;
};
console.log(findRectanglePerimeter(5, 8)); // 26

// ===================================================================================

/* 🚀 Practice Exercise - Crie uma função dinâmica chamada “currentHour”, que receba um número aleatório entre 4 e 24 de sua escolha, para representar as horas do dia, e imprima uma mensagem específica de acordo com as horas do dia.*/

const currentHour = function (hour) {
  let message = "";

  if (hour >= 4 && hour <= 24) {
    if (hour >= 22) {
      return (message = "Não deveríamos comer nada, é hora de dormiir");
    }
    if (hour >= 18 && hour <= 22) {
      return (message = "Rango da noite, vamos jantar :D");
    }
    if (hour >= 14 && hour < 18) {
      return (message = "Vamos fazer um bolo pro café da tarde?");
    }
    if (hour >= 11 && hour < 14) {
      return (message = "Hora do almoço!!!");
    }
    if (hour >= 4 && hour < 11) {
      return (message = "Hmmm, cheiro de café recém-passado!!!");
    }
  }
  return "Por favor, digite um número entre 4 e 24 de sua escolha.";
};
console.log(currentHour(14)); // Vamos fazer um bolo pro café da tarde?

// ===================================================================================

/* 🚀 Practice Exercise - Crie um algoritmo que receba um mês do ano aleatório e verifique à qual estação do ano aquele mês corresponde. Imprima no terminal uma mensagem informando a estação do ano com a seguinte mensagem: 
"In the month of X, the season of the year is Y." */

// FUNÇÃO ANÔNIMA ----------------------------------

function checkSeason(month) {
  let seasonOfTheYear = "";

  switch (month) {
    case "January":
    case "February":
    case "March":
      seasonOfTheYear = "Summer";
      break;
    case "April":
    case "May":
    case "June":
      seasonOfTheYear = "Fall";
      break;
    case "July":
    case "August":
    case "September":
      seasonOfTheYear = "Winter";
      break;
    case "October":
    case "November":
    case "December":
      seasonOfTheYear = "Spring";
  }
  return `In the month of ${month}, the season of the year is ${seasonOfTheYear}.`;
}
console.log(checkSeason("January")); // Summer

// =======================================================================

/* 🚀 Practice Exercise - Crie um algoritmo que receba um dia da semana aleatório e verifique se é um dia de semana ou final de semana. Imprima uma mensagem específica de acordo com o dia.*/

// FUNÇÃO ANÔNIMA ----------------------------------

const checkDays = function (day) {
  const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  for (let index = 0; index < daysOfTheWeek.length; index += 1) {
    if ((day === "Saturday") & (day === "Sunday")) {
      return `Today is ${day}! That's the weekend!! Uhhh`;
    }
    return `Today is ${day}! Oh, no! You gotta study!`;
  }
};
console.log(checkDays("Saturday"));

// =====================================================================

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property + ' = ' + object[property]);
}