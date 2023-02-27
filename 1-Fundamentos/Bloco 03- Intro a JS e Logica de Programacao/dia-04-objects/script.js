// ============================== Exercises - OBJECTS (Section 3.4) ===========================

// ========== Example - Objects =================

let conta = {
  agencia: '0000',
  banco: {
    cod: '012',
    id: 4,
    nome: 'TrybeBank',
  },
};
console.log(conta.banco.nome);

// ============ More examples =============================================

let coolestTvShow = {
  name: 'Friends',
  genre: 'adult comedy',
  author: 'David Crane and Marta Kauffman',
  favoriteCharacter: 'Joey',
  quote: 'I will be there for you!',
  seasons: 10,
};

for (let key in coolestTvShow) {
console.log(key); // only key
}

console.log('');

for (let key in coolestTvShow) {
  console.log(coolestTvShow[key]); // only value
}

console.log('');

for (let key in coolestTvShow) {
  console.log(`${key}: ${coolestTvShow[key]}`); // key and value
}

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

// Acesse as chaves name, lastName e age por meio da sintaxe meuObjeto.chave e interpole as informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

console.log(`A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade.`);

// -----------------------------------------------------

// Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

// player['bestInTheWorld'].length; 

let numberOfWins = player.bestInTheWorld;  
console.log(`A jogadora ${player.name} ${player.lastName} foi eleita a melhor do mundo por ${numberOfWins.length} vezes.`);

// -----------------------------------------------------

// Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

let goldenMedals = player.medals.golden;
let silverMedals = player.medals.silver;

console.log(`A jogadora possui ${goldenMedals} medalhas de ouro e ${silverMedals} medalhas de prata.`);

// =====================================================================================================

// 🍩 2. Após ter estudado diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {};

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(student, 'nome', 'Josiane de Lima');
addProperty(student, 'email', 'teacher.josi@yahoo.com');
addProperty(student, 'phoneNumber', '51 98300-3119');
addProperty(student, 'github', 'github.com/josi-lima');
addProperty(student, 'linkedIn', 'linkedin.com/josiane-lima-coding');

console.log(student);

// ============================== Exercises - FOR IN  vs. FOR OF (Section 3.4) =========================

/* 🍫 3. Com base no objeto a seguir, utilize for/in e imprima no console a mensagem 'Olá, xxxxx!' para cada nome, substituindo o xxxxx pelo nome em questão. */

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
}; 

for (let person in names) {
  console.log(`Olá, ${names[person]}!`); // Olá, João! Olá, Maria! Olá, Jorge!
}

// -----------------------------------------------------

// Agora, usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores do seguinte objeto.

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(`${key}: ${car[key]}`); 
}


