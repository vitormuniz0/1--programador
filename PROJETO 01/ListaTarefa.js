class Tarefa {
    constructor(descricao) {
      this.descricao = descricao;
      this.completa = false;
    }
  
    marcarCompleta() {
      this.completa = true;
    }
  
    get descricaoTarefa() {
      return this.descricao;
    }
}

  class GerenciadorDeTarefas {
    constructor() {
      this.tarefas = [];
    }
  
    adicionarTarefa(descricao) {
      const tarefa = new Tarefa(descricao);
      this.tarefas.push(tarefa);
    }
  
    listarTarefas() {
      this.tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}: ${tarefa.descricaoTarefa} - ${tarefa.completa ? 'Completa' : 'Pendente'}`);
      });
    }

    listarTarefasCompletas() {
        const tarefasCompletas = this.tarefas.filter((tarefa) => tarefa.completa)
        if(tarefasCompletas.length > 0){
            console.log("Tarefas Completas:")
            tarefasCompletas.forEach((tarefa, index) =>{
                console.log(`${index + 1}: ${tarefa.descricaoTarefa}`)
            })
        } else {
            console.log('Nenhuma tarefa completa encontrada.');
        }
    }

    listarTarefasNaoCompletas() {
        const tarefasNaoCompletas = this.tarefas.filter((tarefa) => !tarefa.completa)
        if(tarefasNaoCompletas.length > 0){
            console.log("Tarefas não Completas:")
            tarefasNaoCompletas.forEach((tarefa, index) =>{
                console.log(`${index + 1}: ${tarefa.descricaoTarefa}`)
            })
        } else {
            console.log('Nenhuma tarefa incompleta encontrada.');
        }
    }
  
    removerTarefa(index) {
      this.tarefas.splice(index -1, 1);
    }

    editarDescricao(index , descricao){
        let indiceEditar = index -1;
        if(indiceEditar >= 1 &&  indiceEditar < this.tarefas.length){
            this.tarefas[indiceEditar].descricao = descricao;
        } else{
            console.log('Índice inválido. Não foi possível editar a descrição.');
        }
        
    }

  }

  let gerenciador = new GerenciadorDeTarefas();

gerenciador.adicionarTarefa("Aprender JavaScript");
gerenciador.adicionarTarefa("Praticar codificação");
gerenciador.listarTarefas();

gerenciador.tarefas[0].marcarCompleta()
gerenciador.tarefas[1].marcarCompleta()
gerenciador.listarTarefasCompletas()
gerenciador.listarTarefasNaoCompletas()

