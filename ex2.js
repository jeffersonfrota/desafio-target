function contarLetraA(str) {
  // Converter a string para minúsculas para facilitar a contagem
  let lowerStr = str.toLowerCase();
  let count = 0;

  // Usar uma expressão regular para encontrar todas as variantes da letra 'a'
  let regex = /[aàáãâ]/g;
  let matches = lowerStr.match(regex);

  // Contar as ocorrências
  if (matches) {
    count = matches.length;
  }

  // Exibir o resultado
  if (count > 0) {
    console.log(`A letra 'a' aparece ${count} vez(es) na string: "${str}"`);
  } else {
    console.log(`A letra 'a' não foi encontrada na string: "${str}"`);
  }
}

// Função que gera um índice aleatório para escolher uma string do array
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}

// Array com algumas strings
let frases = [
  "Aprendendo a programar com JavaScript!",
  "A prática leva à perfeição.",
  "Vamos construir algo incrível hoje.",
  "A tecnologia está mudando o mundo.",
  "Nada é impossível com esforço.",
  "Oi, quero emprego! ;)"
];

// Escolher uma string aleatória do array
let indexAleatorio = getRandomIndex(frases.length);
let fraseEscolhida = frases[indexAleatorio];

// Contar as ocorrências da letra 'a' na string escolhida
contarLetraA(fraseEscolhida);
