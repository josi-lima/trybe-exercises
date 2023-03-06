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

console.log(sortAges(employees));

// b) Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

const sortAgesLess = (arr) => arr.sort((personA, personB) => personB.age - personA.age);

console.log(sortAges(employees));


// ===================================================

