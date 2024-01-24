// Sintaxe Básica
let somar = (a, b) => a + b;
console.log(somar(2, 3)); // 5
// Aqui, somar é uma Arrow Function que recebe dois parâmetros a e b e retorna a soma deles. Note que não usamos a palavra-chave function e o retorno é implícito.

// Funções Sem Parâmetros
let saudar = () => console.log("Olá, mundo!");
saudar(); // Olá, mundo!
// Se a função não tem parâmetros, ainda precisamos de parênteses vazios.

// Funções com Corpo de Bloco
let multiplicar = (a, b) => {
  let resultado = a * b;
  return resultado;
};
console.log(multiplicar(2, 4)); // 8
// Para funções com mais de uma expressão, usamos chaves e a declaração return.

// this nas Arrow Functions
function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa(); // Incrementa a idade a cada segundo

// Em Arrow Functions, this é léxico, ou seja, refere-se ao contexto no qual a função foi criada, ao contrário das funções tradicionais.

// Em Métodos de Array
let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map(numero => numero * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

// Arrow Functions são ótimas para operações em arrays, como map, filter e reduce.

// ex 1 

let soma = (a,b) => {
    return a + b;
}

console.log(soma(2,3));

// ex 2 

let saudacao = (nome) =>{
    console.log("Olá " + nome + ", Como você está?")
}

saudacao("Vitor");

// ex 3 

let contador = 0;
const intervalo = setInterval(() => {
    console.log(contador);
    contador ++;

    if(contador > 10){
        clearInterval(intervalo);
        console.log("CONTADOR FINALIZADO")
    }    
}, 1000);

// EX 4 

let numeroos = [2,3,4,5,6,7,8,9];

let numerosPares = numeroos.filter(num => num % 2 == 0)

console.log(numerosPares)

// ex 5 

let temp = (graus) =>{
    let mult = graus * 1.8;
    return resultado = mult + 32; 
}

console.log(temp(4))

// ex 6 

let alfabeto = ["A", "T", "B","H","C","G","X"];

let ordenacao = ([...alfabeto]) =>{
    return alfabeto.sort();
}

console.log(ordenacao(alfabeto))-

