// ======= *** HIGHER ORDER FUNCTIONS (Section 7.2) *** ===============================

// =================== .sort() ==============================

/*🚀 1. A nova tarefa do seu time de desenvolvimento é organizar o sistema de pessoas colaboradoras de uma rede de mercados. Para isso:

a) Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente. */

const employees = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const sortAgesPlus = (arr) => {
  return arr.sort((personA, personB) => personA.age - personB.age);
}
console.log(sortAgesPlus(employees));

// b) Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

const sortAgesLess = (arr) => arr.sort((personA, personB) => personB.age - personA.age);
console.log(sortAgesLess(employees));

// =============== Spread operator ======================================

const greatestFoodsEver = {
  sweet: 'rice pudding',
  salty: 'lasagna',
  beverage: 'chocolate milk',
};

console.log(...Object.keys(greatestFoodsEver));  // sweet salty beverage
console.log(...Object.values(greatestFoodsEver));  // rice pudding lasagna chocolate milk
console.log(...Object.entries(greatestFoodsEver)); // [ 'sweet', 'rice pudding' ] [ 'salty', 'lasagna' ] [ 'beverage', 'chocolate milk' ]

// =============== Object Destructuring ==================================

const nextLanguagesToLearn = {
  first: 'German',
  second: 'Japanese',
  third: 'Dutch'
}

const { first, second, third } = nextLanguagesToLearn;

console.log(`Next languages to learn: ${first}, ${second} and ${third}.`); 
// Next languages to learn: German, Japanese and Dutch.

// ---- OR without spread operator --------------------------------

console.log(`Next languages to learn: ${nextLanguagesToLearn.first}, ${nextLanguagesToLearn.second} and ${nextLanguagesToLearn.third}.`); 

// =============== .reduce() ==================================

const concatWord = ['l', 'o', 'v', 'e'].reduce((a, b) => a + b);
console.log(`The word is: ${concatWord}.`);

