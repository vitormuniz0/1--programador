//   FILA ------------------------------------------
class Fila {
    constructor() {
      this.tarefas = [];
    }
  
    enfileirar(tarefa) {
      this.tarefas.push(tarefa);
    }
  
    desenfileirar() {
      if (this.tarefas.length === 0) {
        return "Fila vazia!";
      }
      return this.tarefas.shift();
    }
  
    visualizarProxima() {
      return this.tarefas[0];
    }
}
  
  let filaDeTarefas = new Fila();
  filaDeTarefas.enfileirar("Enviar e-mail");
  filaDeTarefas.enfileirar("Corrigir bug");
  filaDeTarefas.enfileirar("Estudar Programação")
  console.log(filaDeTarefas.desenfileirar()); // Envia 'Enviar e-mail'

// PILHAS -----------------------------------

class Pilha {
    constructor() {
      this.paginas = [];
    }
  
    visitar(pagina) {
      this.paginas.push(pagina);
    }
  
    voltar() {
      if (this.paginas.length <= 1) {
        return "Início do histórico";
      }
      this.paginas.pop();
      return this.paginas[this.paginas.length - 1];
    }
  }
  
  let historico = new Pilha();
  historico.visitar("Página Inicial");
  historico.visitar("Artigo");
  historico.visitar("Sobre nós");
  console.log(historico.voltar()); // Retorna à 'Página Inicial'



// ARMAZENAMENTO DE DADOS COM ÁRVORES --------------

