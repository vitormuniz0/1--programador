class Pilha {
    constructor() {
      this.itens = [];
    }
  
    push(elemento) {
      this.itens.push(elemento);
    }
  
    pop() {
      return this.itens.pop();
    }
  
    topo() {
      return this.itens[this.itens.length - 1];
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

let pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(3);

console.log(pilha.topo()); // 3
console.log(pilha.pop()); // 3
console.log(pilha.topo()); // 2
console.log(pilha.tamanho()); // 2


