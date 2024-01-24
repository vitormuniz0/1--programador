// Usando Spread com Arrays
let numeros = [1, 2, 3];
let maisNumeros = [...numeros, 4, 5, 6];
console.log(maisNumeros); // [1, 2, 3, 4, 5, 6]
// Aqui, usamos o Spread para criar um novo array maisNumeros, que contém todos os elementos de numeros seguidos por 4, 5, 6. É uma maneira elegante e concisa de combinar arrays.

// Usando Spread com Objetos
let pessoa = { nome: 'João', idade: 25 };
let pessoaAtualizada = { ...pessoa, idade: 26 };
console.log(pessoaAtualizada); // { nome: 'João', idade: 26 }

// Espalhando Argumentos
function somar(a, b, c) {
  return a + b + c;
}

let numeross = [1, 2, 3];
console.log(somar(...numeross)); // 6

// ex 1 

let lista1 = ["arroz", "feijão", "carne"]
let lista2 = ["queijo", "macarrão"];
let listaCompleta = [...lista1,...lista2]
console.log(listaCompleta)

// ex 2

let usuario = { nome: "Vitor", email: "teste@gmail.com"}

let adicional = {status: "ativo", ...usuario}

console.log(adicional)

// ex 3  

function listaConvidados(a ,b,c){
    console.log("Lista de convidados:")
    console.log(a)
    console.log(b)
    console.log(c)
}

let convidados = ["Vitor", "João", "Aline"]

listaConvidados(...convidados);


