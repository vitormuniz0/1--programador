// O Que São Grafos?
// Um grafo é uma coleção de nós (ou vértices) e arestas que conectam esses nós. É uma maneira poderosa de representar e trabalhar com relações entre objetos.

// Características dos Grafos
// Vértices (Nós): Os pontos de um grafo.
// Arestas: As linhas que conectam os vértices.
// Direcionados vs Não Direcionados: Em grafos direcionados, as arestas têm uma direção. Em grafos não direcionados, não.
// Ponderados vs Não Ponderados: Grafos ponderados têm valores associados às arestas.

class Grafo {
    constructor() {
      this.vertices = {};
    }
  
    adicionarVertice(vertice) {
      this.vertices[vertice] = [];
    }
  
    adicionarAresta(vertice1, vertice2) {
      this.vertices[vertice1].push(vertice2);
      this.vertices[vertice2].push(vertice1); // Para grafos não direcionados
    }
  
    // Métodos adicionais como exibir grafo, busca, etc.
}

let grafo = new Grafo();
grafo.adicionarVertice('A');
grafo.adicionarVertice('B');
grafo.adicionarVertice('C');

grafo.adicionarAresta('A', 'B');
grafo.adicionarAresta('B', 'C');
grafo.adicionarAresta('C', 'A');

// O grafo agora tem 3 vértices conectados entre si.