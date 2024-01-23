let saudacao = "Olá"

saudacao[0] = 'A'

// imutáveis

console.log(saudacao)

// As strings são imutáveis. Isso significa que, uma vez criada, você não pode alterar um caractere individualmente. Tentar fazer isso não vai gerar um erro, mas também não vai mudar a string.

// Método slice()
let frase = "Aprendendo JavaScript em 2024!";
let ano = frase.slice(-5);
console.log(ano); // 2023!
// slice() corta e retorna uma parte da string. Aqui, -5 significa que estamos começando do quinto caractere a contar do fim.


// Método replace()
let novaFrase = frase.replace("2023", "2024");
console.log(novaFrase); // Aprendendo JavaScript em 2024!
// replace() substitui um trecho da string por outro. Neste exemplo, substituímos "2023" por "2024".


// Método toUpperCase() e toLowerCase()
let grito = "olá".toUpperCase();
console.log(grito); // OLÁ

// let sussurro = "OI".toLowerCase();
console.log(sussurro); // oi
// Estes métodos transformam a string em maiúsculas ou minúsculas, respectivamente.

// Método trim()
let textoComEspacos = "   Olá, mundo!   ";
let textoSemEspacos = textoComEspacos.trim();
console.log(textoSemEspacos); // Olá, mundo!
// trim() remove espaços em branco do início e do fim da string.

//       -------------------------   Strings e Caracteres Especiais

// Quebras de Linha e Tabulações
let poema = "Roses are red,\nViolets are blue.";
console.log(poema);
// Roses are red,
// Violets are blue.
// \n cria uma nova linha. É útil para formatar textos longos ou poesia.

// Caracteres de Escape
let citação = "Ela disse: \"JavaScript é incrível!\"";
console.log(citação); // Ela disse: "JavaScript é incrível!"
// Usamos a barra invertida \ para incluir aspas dentro de uma string sem encerrar a string.

// Template Literals
// Template literals são uma maneira mais poderosa e flexível de trabalhar com strings.

let produto = "Node.js";
let versao = "v14.17.0";
let descricao = `Estudando ${produto} na versão ${versao}`;
console.log(descricao); // Estudando Node.js na versão v14.17.0
// Aqui, usamos acentos graves (```) e ${} para inserir variáveis e expressões dentro da string. Isso torna a concatenação mais fácil e legível.

// ex 01

let nome = "Vitor";
let tipoEvento = "Aniversário";
let data = "04:08:2003"

let convite = console.log("Olá " + nome + " Você está convidado para o meu " + tipoEvento + " no dia " + data);

// ex 2

let frasee = "Programação é para inteligentes";
let novaFrasee = frasee.replace("inteligentes","esforçados")
console.log(novaFrasee)

// ex 3 

let comentario = "    amei    ";
let textoLimpo = comentario.trim();
console.log(textoLimpo)

// ex 4 

let mensagemAmigo = console.log("Olá meu Amigo \nTudo bem com vc? \nAté a proxima")

// ex 5 

let citacao = console.log("Eu msm disse: \"So sei que nada sei!\"")