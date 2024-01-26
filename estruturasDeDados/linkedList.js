// Uma lista ligada é uma coleção sequencial de elementos, onde cada elemento é conectado ao próximo através de "ligações" ou "ponteiros". Ao contrário dos arrays, os elementos em uma lista ligada não são armazenados em posições de memória contíguas.

// Características das Listas Ligadas
// Elementos (Nós/Nodes): Cada elemento da lista é um nó, contendo dados e um ponteiro para o próximo nó.
// Flexibilidade: Permite inserção e remoção de elementos sem realocação ou reorganização da estrutura de dados inteira.
// Tipos: Pode ser simplesmente ligada (cada nó aponta para o próximo) ou duplamente ligada (cada nó aponta para o próximo e para o anterior).

class Node {
    constructor(dado) {
      this.dado = dado;
      this.proximo = null;
    }
}

class ListaLigada {
    constructor() {
      this.cabeca = null;
    }
  
    inserirNoInicio(dado) {
      let novoNode = new Node(dado);
      novoNode.proximo = this.cabeca;
      this.cabeca = novoNode;
    }
  
    exibirLista() {
      let atual = this.cabeca;
      while (atual) {
        console.log(atual.dado);
        atual = atual.proximo;
      }
    }
  
    // Outras operações como inserção no final, busca, remoção etc.
}

let lista = new ListaLigada();
lista.inserirNoInicio(1);
lista.inserirNoInicio(2);
lista.inserirNoInicio(3);

lista.exibirLista(); // Exibe 3, 2, 1

// Exemplo Prático: Inversão de Lista
// Listas ligadas são ideais para operações como inversão de ordem, que pode ser feita de maneira eficiente.

ListaLigada.prototype.inverter = function() {
    let atual = this.cabeca;
    let anterior = null;
    let temporario = null;
  
    while (atual) {
      temporario = atual.proximo;
      atual.proximo = anterior;
      anterior = atual;
      atual = temporario;
    }
  
    this.cabeca = anterior;
};
  
// Uso
lista.inverter();
lista.exibirLista(); // Exibe 1, 2, 3 após inversão