// 💡 Desafio 1
function compareTrue(arg1, arg2) {
  return arg1 && arg2 ? 'true' : 'false';
}
console.log(compareTrue(true, true));  // true

// =================================================================

// 🚀 Desafio 2
function splitSentence(phrase) {
  return phrase.split(' ');
}
console.log(splitSentence('you gotta leave'));  // ['you', 'gotta', 'leave']
// =================================================================

// 💡 Desafio 3
function concatName(names) {
  const lastItem = names.at(-1);
  const firstItem = names[0];
  return `${lastItem}, ${firstItem}`;
}
console.log(concatName(['My Mom', 'My Dad', 'Frida Kahlo', 'Anne Frank', 'Florbela Espanca']));  // Florbela Espanca, My Mom

// =================================================================

// 🚀 Desafio 4
function footballPoints(wins, ties) {
  let gamesResult = wins * 3 + ties;
  return gamesResult;
}
console.log(footballPoints(3, 3));  // 12

// =================================================================

// 💡 Desafio 5
function highestCount(nums) {
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

// 🚀 Desafio 6

function calcTriangleArea(base1, height1) {
// seu código aqui
}

function calcRectangleArea(base2, height2) {
// seu código aqui
}

function calcAllAreas(base3, height3, form) {
// seu código aqui
}

// =================================================================

// 💡 Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(5, 4, 2));  // cat1

// =================================================================

// 🚀 Desafio 8

function fizzBuzz(numbers) {
  const message = numbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return 'bug!';
  }); return message;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));  // ['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']

// =================================================================

// 💡 Desafio 9

function encode(string) {
  const chars = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  string = string.replace(/[aeiou]/g, m => chars[m]);
  return string;
}
console.log(encode('hi there!'));  // h3 th2r2!

function decode(string) {
  const chars = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  string = string.replace(/[12345]/g, m => chars[m]);
  return string;
}
console.log(decode('h3 th2r2!'));  // hi there!

// Reference: https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call

// =================================================================

// Desafio 10
function techList(techs, names) {
  techs.sort();
  let result = [];
  if (techs.length === 0) {
    return 'Vazio!';
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

// 🌱 Desafio 11
function generatePhoneNumber(arrayNumbers) {

  let error = 'não é possível gerar um número de telefone com esses valores';
  let phoneNumbers = arrayNumbers.join('');
  let ddd = phoneNumbers.substring(0, 2);
  let firstFiveNumbers = phoneNumbers.substring(2, 7);
  let lastFourNumbers = phoneNumbers.substring(7, 11);
  
  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } 
  if ((arrayNumbers.some(p => p > 9)) || (arrayNumbers.some(p => p < 0))) {
    return error;
  }
  for (let index = 0; index < arrayNumbers.length; index += 1 ) {
    let result = arrayNumbers[index];
    let count = 0;
    for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
      if(result === arrayNumbers[index2]){
        count += 1;
    }
  }
    if (count > 2) {
      return error;
    }
}
  let phoneNumber = '('.concat(ddd + ')' + ' ' + firstFiveNumbers + '-' + lastFourNumbers);
  return phoneNumber;
}

// =================================================================

// 🌱 Desafio 12
function triangleCheck(a, b, c) {
  if (a > b + c || b > a + c || (c > a + b && a > Math.abs(b + c))
  || (b > Math.abs(a + c)) || (c > Math.abs(a + b))
  ) {
    return false;
  }
  return true;
}

// =================================================================

// 🌱 Desafio 13
function hydrate() {
  // seu código aqui
}

// =================================================================