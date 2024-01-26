// O Que São Árvores?
// Uma árvore é uma estrutura de dados que simula uma hierarquia em forma de árvore, com um nó raiz e nós filhos. Cada nó na árvore pode ter zero ou mais nós filhos.

// Características das Árvores
// Nó Raiz: O nó no topo da árvore.
// Nó Filho: Nós conectados a outro nó acima.
// Folhas: Nós sem filhos.
// Altura: Comprimento do caminho mais longo da raiz até a folha mais distante.

// Tipos de Árvores
// Árvores Binárias: Cada nó tem no máximo dois filhos.
// Árvores de Busca Binária (BST): Uma árvore binária onde cada nó à esquerda é menor que o nó pai e cada nó à direita é maior.

// Vamos implementar uma Árvore Binária de Busca (BST) básica.

class No {
    constructor(dado) {
      this.dado = dado;
      this.esquerda = null;
      this.direita = null;
    }
}

class ArvoreBinariaDeBusca {
    constructor() {
      this.raiz = null;
    }
  
    inserir(dado) {
      let novoNo = new No(dado);
  
      if (this.raiz === null) {
        this.raiz = novoNo;
      } else {
        this.inserirNo(this.raiz, novoNo);
      }
    }
  
    inserirNo(no, novoNo) {
      if (novoNo.dado < no.dado) {
        if (no.esquerda === null) {
          no.esquerda = novoNo;
        } else {
          this.inserirNo(no.esquerda, novoNo);
        }
      } else {
        if (no.direita === null) {
          no.direita = novoNo;
        } else {
          this.inserirNo(no.direita, novoNo);
        }
      }
    }
  
    // Métodos adicionais como busca, remoção, percurso (in-order, pre-order, post-order)...
}

let arvore = new ArvoreBinariaDeBusca();
arvore.inserir(15);
arvore.inserir(10);
arvore.inserir(20);
arvore.inserir(8);
arvore.inserir(12);

// A árvore agora contém esses valores em uma estrutura organizada.

// Exemplo Prático: Busca em Árvore
// Árvores de busca binária são excelentes para operações de busca eficientes.

ArvoreBinariaDeBusca.prototype.buscar = function(dado) {
    return this.buscarNo(this.raiz, dado);
  };
  
  ArvoreBinariaDeBusca.prototype.buscarNo = function(no, dado) {
    if (no === null) {
      return false;
    }
    if (dado < no.dado) {
      return this.buscarNo(no.esquerda, dado);
    } else if (dado > no.dado) {
      return this.buscarNo(no.direita, dado);
    } else {
      return true;
    }
};
  
console.log(arvore.buscar(10)); // true
console.log(arvore.buscar(99)); // false