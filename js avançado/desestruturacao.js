// Desestruturação de Arrays
let numeros = [1, 2, 3];
let [primeiro, segundo, terceiro] = numeros;
console.log(primeiro, segundo, terceiro); // 1 2 3
// Aqui, criamos um array numeros e, em seguida, usamos a desestruturação para criar três novas variáveis, cada uma recebendo um elemento do array. É uma maneira rápida de acessar itens individuais de um array.

// Desestruturação de Objetos
let pessoa = { nome: 'João', idade: 25 };
let { nome, idade } = pessoa;
console.log(nome, idade); // João 25
// Neste exemplo, extraímos as propriedades nome e idade do objeto pessoa para duas novas variáveis. Isso simplifica muito o acesso a propriedades específicas de um objeto.

// Em Funções
function exibirInfo({ nome, idade }) {
  console.log(`Nome: ${nome}, Idade: ${idade}`);
}

exibirInfo(pessoa); // Nome: João, Idade: 25
// Ao usar a desestruturação em parâmetros de função, tornamos o código mais limpo e direto, evitando a necessidade de acessar as propriedades do objeto dentro da função.

// Com Arrays Aninhados
let cores = [["vermelho", "azul"], ["verde", "amarelo"]];
let [[primaria], [secundaria]] = cores;
console.log(primaria, secundaria); // ["vermelho", "azul"] ["verde", "amarelo"]
// Aqui, desestruturamos um array de arrays. Isso mostra como a desestruturação pode ser adaptada para estruturas de dados mais complexas.

// Valores Padrão
let [a = 1, b = 2] = [3];
console.log(a, b); // 3 2
// Neste exemplo, definimos valores padrão para a e b. a recebe o valor do array, enquanto b usa o valor padrão, pois o array não tem um segundo elemento.

// Trocando Valores de Variáveis
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1
// A desestruturação também pode ser usada para trocar valores entre variáveis de forma eficiente, sem a necessidade de uma variável temporária.
