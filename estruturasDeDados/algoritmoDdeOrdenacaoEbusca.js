// 1. Bubble Sort
// O Bubble Sort é um algoritmo simples que compara e troca elementos adjacentes se estiverem na ordem errada. Este processo se repete até que o array esteja ordenado.

// Implementação do Bubble Sort

function bubbleSort(array) {
    let tamanho = array.length;
    for (let i = 0; i < tamanho - 1; i++) {
      for (let j = 0; j < tamanho - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
}
// Explicação do Código
// O Bubble Sort percorre o array, comparando elementos adjacentes e os trocando se estiverem na ordem incorreta.
// A cada passagem, o maior elemento "borbulha" para o final do array.
// O processo se repete, diminuindo a parte não ordenada do array a cada passagem.

// 2. Quick Sort
// Quick Sort é um algoritmo de divisão e conquista, mais eficiente que o Bubble Sort. Ele particiona o array escolhendo um elemento como pivô e movendo todos menores para a esquerda e maiores para a direita do pivô, e depois ordena as sub-partes.

// Implementação do Quick Sort
function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivô = array[0];
  let esquerda = array.filter((x) => x < pivô);
  let direita = array.filter((x) => x > pivô);
  return [...quickSort(esquerda), pivô, ...quickSort(direita)];
}
// Explicação do Código
// O Quick Sort escolhe um elemento como pivô (aqui, o primeiro elemento do array).
// Divide o array em duas partes: elementos menores e maiores que o pivô.
// Recursivamente aplica a mesma lógica às duas partes.


// 1. Busca Linear
// A busca linear verifica cada elemento do array até encontrar o elemento desejado.

// Implementação da Busca Linear
function buscaLinear(array, elemento) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return i; // Retorna o índice do elemento
    }
  }
  return -1; // Retorna -1 se não encontrar
}

// 2. Busca Binária
// A busca binária é mais eficiente em arrays ordenados, dividindo o array pela metade a cada passo.

// Implementação da Busca Binária
function buscaBinaria(array, elemento) {
  let inicio = 0;
  let fim = array.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (array[meio] === elemento) {
      return meio; // Encontrou o elemento
    }
    if (array[meio] < elemento) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  return -1; // Elemento não encontrado
}