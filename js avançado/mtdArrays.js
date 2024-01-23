/* let frutas = ["banana", "maçã", "manga"];
console.log(frutas) 

frutas.push("uva")  // PUSH ADICIONA O ELEMENTO NO FINAL DO ARRAY

frutas.push('limão')

frutas.pop()           //POP ELIMINA O ULTIMO ELEMENTO DO ARRAYS

frutas.shift() // ELIMINA O PRIMEIRO ELEMENTO DO ARRAY

frutas.unshift() // ADICIONAR UM ELEMNTO POR PRIMEIRO NO ARRAY (NO COMEÇO)

let pedaco = frutas.slice(1, 3); // Pega elementos de índice 1 a 2 SLICE

numeros.splice(1, 0, 2); // No índice 1, não remove nada, mas adiciona o 2  splice() é o canivete suíço dos arrays. Remove, adiciona, substitui... faz de tudo um pouco.

numeros.forEach((numero) => {
    console.log(numero); // Mostra cada número         //forEach() passa por cada elemento do array. É ótimo pra fazer alguma coisa com cada item.
});

let dobro = numeros.map(num => num * 2); // Duplica cada número //map() é parecido com forEach(), mas cria um novo array com os resultados.

let maioresQueUm = numeros.filter(num => num > 1); // Só números maiores que 1 // filter() cria um novo array só com elementos que passam em um teste.

let soma = numeros.reduce((total, num) => total + num, 0); // Soma todos // reduce() acumula valores. É meio complexo, mas super útil.

let tres = numeros.find(num => num === 3); // Acha o número 3 // find() retorna o primeiro elemento que passa no teste.
let indiceDeTres = numeros.findIndex(num => num === 3); // Acha o índice do 3 // findIndex() retorna o índice desse elemento.

numeros.sort(); // Ordena os números // sort() ordena os elementos. Cuidado, pois ele altera o array original!

let maisNumeros = numeros.concat([4, 5]); // Junta com [4, 5] // concat() junta dois arrays em um novo. */

//////// Ex 1 ///// 

let hobies = [];

hobies.push("Caminhar", "Comer" , "Estudar")
hobies.pop();

hobies.forEach((hobies) => {
    console.log(hobies);
})

///////// Ex 2 //////

const fila = [];

fila.unshift("Vitor", "José" , "Pedro" , "Maria");

fila.shift();

fila.forEach((fila) => {
    console.log("Restantes na fila: ", fila)
})


/// Ex 3 ////////////

const frutas = ["fruta1",  "fruta2", "fruta3", "fruta4", "fruta5", "fruta6"]

console.log(frutas)

const pedaco = frutas.slice(2,5).concat(["frutaB","frutaC"])

console.log(pedaco)

//// ex 4 /////////


const music = ["msc1", "msc2", "msc3", "msc4", "msc5"];

console.log(music);

music.splice(2,1,"mscA")    //substituindo a 3 musica por outra ORDEM CERTA (POSICAO/INDICE, QUANTOS DESEJA EXCLUIR, QUANTOS E OQ DESEJAR ADICIONAR)

console.log(music)

music.splice(1, 0 , "musicB") //adicionado outra sem excluir nenhuma

console.log(music)

/////////// ex 5 //////////

let notas = [6 , 7, 8]

let somaNota = notas.reduce((total , nota) => total + nota,0); 

let medias = somaNota / notas.length;

const arrayMedia = [medias]

const acimaDamedia = arrayMedia.filter(num => num >= 7)

console.log(medias)

console.log(acimaDamedia) 

// EX 6 

let saborSorvete = ["chocolate", "morango", "creme", "baunilha"];

let chocolate = saborSorvete.find( sabor => sabor  === "chocolate");

let indiceSabor = saborSorvete.findIndex( sabor => sabor === "chocolate");

if(chocolate !== undefined){
    console.log("Sabor ",chocolate , " na posição " ,indiceSabor + 1)
} else{
    console.log("Não encontrou")
}

let 



