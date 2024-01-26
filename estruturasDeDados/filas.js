// Operações Principais: enqueue (adiciona um item ao final da fila) e dequeue (remove o item do início da fila).

class Fila {
    constructor() {
      this.itens = [];
    }
  
    enqueue(elemento) {
      this.itens.push(elemento);
    }
  
    dequeue() {
      if (this.estaVazia()) {
        return undefined;
      }
      return this.itens.shift();
    }
  
    frente() {
      if (this.estaVazia()) {
        return undefined;
      }
      return this.itens[0];
    }
  
    estaVazia() {
      return this.itens.length === 0;
    }
  
    tamanho() {
      return this.itens.length;
    }
  
    limpar() {
      this.itens = [];
    }
}
/*
let fila = new Fila();
fila.enqueue('A');
fila.enqueue('B');
fila.enqueue('C');

console.log(fila.frente()); // 'A'
console.log(fila.dequeue()); // 'A'
console.log(fila.frente()); // 'B'*/

// Exemplo Prático: Controle de Processos
// Filas são ideais para controlar processos em ordem de chegada. Imagine uma fila de impressão, onde os documentos são impressos na ordem em que são enviados.

function gerenciarImpressao(documentos) {
    let filaImpressao = new Fila();
    documentos.forEach(doc => filaImpressao.enqueue(doc));
  
    while (!filaImpressao.estaVazia()) {
      let documentoAtual = filaImpressao.dequeue();
      console.log(`Imprimindo documento: ${documentoAtual}`);
    }
}
  
gerenciarImpressao(['Doc1', 'Doc2', 'Doc3']);