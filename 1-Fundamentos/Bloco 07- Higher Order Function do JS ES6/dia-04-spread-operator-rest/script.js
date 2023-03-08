// ======= *** JavaScript ES6 (Section 7.4) *** ===============================

// ---------- Examples ------------------------

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

console.log(`Next languages I'm going to learn: ${first}, ${second} and ${third}.`); 
// Next languages I'm going to learn: German, Japanese and Dutch.

// ---- OR without spread operator --------------------------------

console.log(`Next languages I'm going to learn: ${nextLanguagesToLearn.first}, ${nextLanguagesToLearn.second} and ${nextLanguagesToLearn.third}.`); 

// =================================================

