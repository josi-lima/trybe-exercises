// ======= *** HIGHER ORDER FUNCTIONS (Section 7.1) *** ===============================

// =================== .forEach() ==============================

/*🚀 1. Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!. */

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

emailListInData.forEach(email => console.log(`O email ${email} está cadastrado em nosso banco de dados!`));

// ====================  .find()  ================================

/*🚀 2. Utilize o método find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista. */

const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyNumbers = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(`O primeiro número encontrado do array que é divisível por 3 e 5 é ${verifyNumbers}.`);

// ---------------------------------------------

/*🚀 3. Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista. */

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const countLetters = names.find((name) => name.length === 5);
console.log(`O primeiro nome encontrado com cinco letras é ${countLetters}.`);

// ---------------------------------------------

/*🚀 4. Utilize o find para encontrar a música com id igual a '31031685', caso ela exista. */

const songs = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findSong = songs.find((song) => song.id === '31031685');
// console.log(`A música com id igual a '31031685' encontrada é ${findSong}.`);
console.log(findSong);

// =================== .some() ==============================

/* 🚀 5. Você ficou responsável por conferir a lista de pessoas convidadas de uma festa de casamento e precisa verificar se o nome da pessoa está ou não na lista. Para isso, você deve utilizar o código abaixo e desenvolver sua lógica a partir dele:

O nome das pessoas convidadas está salvo em um array chamado guests.

A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, e name, que é o nome a ser verificado na lista de convidados (array guests).

Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false. */

const guests = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((guest) => guest === name);
};

console.log(hasName(guests, 'Ana'));
console.log(hasName(guests, 'Pedro'));

// 🚀 6. =================== .every() ==============================

/* Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade. Você deve utilizar o array people e desenvolver a sua lógica a partir dele. Para isso: crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada.

Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. */

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (array, minimumAge) => {
  return array.every((person) => person.age >= minimumAge);
}
console.log(verifyAges(people, 18)); // false
console.log(verifyAges(people, 10));  // true

// =================================================================