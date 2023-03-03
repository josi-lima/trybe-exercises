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
