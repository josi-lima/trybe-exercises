// 💡 Desafio 1 - Crie a função compareTrue -----------------

const compareTrue = (arg1, arg2) => {
  if (arg1 && arg2) return true;
  return false;
};
console.log(compareTrue(true, true));  // true

// =================================================================

// 💡 Desafio 2 - Crie a função splitSentence -------------------

const splitSentence = (phrase) => phrase.split(' ');
console.log(splitSentence('you gotta leave'));  // ['you', 'gotta', 'leave']

// =================================================================

// 💡 Desafio 3 - Crie a função concatName -----------------------
const concatName = (names) => {
  return names.at(-1), names[0];
}
console.log(concatName(['My Mom', 'My Dad', 'Frida Kahlo', 'Anne Frank', 'Florbela Espanca']));  // Florbela Espanca, My Mom

// =================================================================

// 💡 Desafio 4 - Crie a função footballPoints --------------------
const footballPoints = function (wins, ties) {
  let gamesResult = wins * 3 + ties;
  return gamesResult;
}
console.log(footballPoints(3, 3));  // 12

// =================================================================

// 💡 Desafio 5 - Crie a função highestCount ---------------------
const highestCount = function (nums) {
  let maxNumber = nums[0];
  let counter = 0;
  for (let index in nums) {
    if (nums[index] !== maxNumber && nums[index] > maxNumber) {
      maxNumber = nums[index];
      counter = 1;
    } else if (nums[index] === maxNumber) {
      counter += 1;
    }
  } return counter;
}
console.log(highestCount([2, 8, 7, 5, 8]));  // 2

// =================================================================

// 💡 Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas -----------------

const calcTriangleArea = (base, height) => (base * height) / 2;
console.log(calcTriangleArea(10, 15));  // 75

const calcRectangleArea = (base, height) => base * height;
console.log(calcRectangleArea(10, 15));  // 150

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida.';
}
console.log(calcAllAreas(10, 15, 'triângulo'));  // O valor da área do triângulo é de: 75

// =================================================================

// 💡 Desafio 7 - Crie a função catAndMouse -----------------

const catAndMouse = function (mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
};
console.log(catAndMouse(5, 4, 2));  // cat1

// =================================================================

// 🚀 Desafio 8 - Crie a função fizzBuzz ----------------------

const fizzBuzz = function (numbers) {
  const message = numbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return 'bug!';
  }); return message;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));  // ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']

// =================================================================

// 💡 Desafio 9 - Crie a função encode e a função decode ============================================
// Reference: https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call

const encode = function (string) {
  const chars = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  string = string.replace(/[aeiou]/g, (m) => chars[m]);
  return string;
};
console.log(encode('hi there!')); // h3 th2r2!

const decode = function (string) {
  const chars = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  string = string.replace(/[12345]/g, (m) => chars[m]);
  return string;
};
console.log(decode('h3 th2r2!'));  // hi there!

// =================================================================

// 💡 Desafio 10 - Crie a função techList ---------------------------

const techList = function (techs, names) {
  techs.sort();
  let result = [];
  if (techs.length === 0) {
    return [];
  }
  for (let index = 0; index < techs.length; index += 1) {
    result.push({ tech: techs[index], name: names });
  }
  return result;
}
console.table(techList(['React', 'Jest', 'HTML', 'Jest', 'CSS', 'JavaScript'], 'Josie'));
/*
┌─────────┬──────────────┬─────────┐
│ (index) │     tech     │  name   │
├─────────┼──────────────┼─────────┤
│    0    │    'CSS'     │ 'Josie' │
│    1    │    'HTML'    │ 'Josie' │
│    2    │ 'JavaScript' │ 'Josie' │
│    3    │    'Jest'    │ 'Josie' │
│    4    │    'Jest'    │ 'Josie' │
│    5    │   'React'    │ 'Josie' │
└─────────┴──────────────┴─────────┘ */
// =================================================================

// 🌱 Desafio 11 - Crie a função generatePhoneNumber --------------------------

const generatePhoneNumber = (arrayNumbers) => {
  let error = 'não é possível gerar um número de telefone com esses valores';
  let phoneNumbers = arrayNumbers.join('');
  let ddd = phoneNumbers.substring(0, 2);
  let firstFiveNumbers = phoneNumbers.substring(2, 7);
  let lastFourNumbers = phoneNumbers.substring(7, 11);

  if (arrayNumbers.length !== 11) return 'Array com tamanho incorreto.';
  if ((arrayNumbers.some((p) => (p > 9))) || (arrayNumbers.some((p) => (p < 0)))) {
    return error;
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let count = 0;
    for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
      if (arrayNumbers[index] === arrayNumbers[index2]) count += 1;
    }
    if (count > 2) return error;
  }
  return `(${ddd}) ${firstFiveNumbers}-${lastFourNumbers}`;
};

// =================================================================

// 🌱 Desafio 12 -  Crie a função triangleCheck ---------------------

const triangleCheck = (a, b, c) => {
  if ((a > Math.abs(b + c))) return false;
  if ((b > Math.abs(a + c))) return false;
  if ((c > Math.abs(a + b))) return false;
  return true;
};
console.log(triangleCheck(150, 40, 60));  // false

// =================================================================

// 🌱 Desafio 13 - Crie a função hydrate -------------------------------

const hydrate = function (drinks) {
  let quantity = /\d+/g;
  let drinksQuantity = drinks.match(quantity);
  let result = 0;

  for (let index = 0; index < drinksQuantity.length; index += 1) {
    result += parseFloat(drinksQuantity[index]);
  }
  if (result > 1 && result <= 9) {
    return `${result} copos de água`;
  } if (result === 1) {
    return `${result} copo de água`;
  }
};
console.log(hydrate('1 cerveja, 2 vinhos, 4 batidas'));  // 7 copos de água


// =================================================================