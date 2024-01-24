// Estrutura Básica do JSON
{
  "nome": "João",
  "idade": 25,
  "interesses": ["programação", "jogos"],
  "ativo": true
}
// Este é um exemplo de como um objeto JSON pode parecer. É muito semelhante aos objetos JavaScript, mas com algumas diferenças, como todas as chaves e strings precisam estar entre aspas duplas.

// Convertendo Objeto para JSON
let pessoa = {
  nome: "Ana",
  idade: 30,
  interesses: ["leitura", "viagens"]
};

let json = JSON.stringify(pessoa);
console.log(json); // {"nome":"Ana","idade":30,"interesses":["leitura","viagens"]}
// JSON.stringify() converte um objeto JavaScript em uma string JSON. Isso é útil quando você precisa enviar dados para um servidor ou salvá-los de maneira formatada.

// Convertendo JSON para Objeto
let json = '{"nome":"Carlos","idade":28}';
let pessoa = JSON.parse(json);
console.log(pessoa.nome); // Carlos
// JSON.parse() faz o inverso, transformando uma string JSON em um objeto JavaScript. Essencial para receber e trabalhar com dados de um servidor ou API.



