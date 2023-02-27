// ============================== Exercises - OBJECTS (Section 3.4) ===========================

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};
console.log(conta.banco.nome);

// =================================================================================

/* 🍫 1. Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 }; */

const player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  }
}

// -----------------------------------------------------

// Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo.

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// -----------------------------------------------------

// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e concatene as informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`);

// -----------------------------------------------------

// Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

let numberOfWins = player.bestInTheWorld;
console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${numberOfWins.length} vezes.`);

// -----------------------------------------------------

// Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

let goldenMedals = player.medals.golden;
let silverMedals = player.medals.silver;

console.log(`A jogadora possui ${goldenMedals} medalhas de ouro e ${silverMedals} medalhas de prata.`);

// =================================================================================

/* 🍩 2. */
