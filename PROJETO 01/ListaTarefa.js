class Tarefa {                                             //CLASSE DE TAREFA INDIVIDUAL 
    constructor(descricao,data,prioridade) {               // CADA TAREFA TEM SUA DESCRIÇÃO, SUA DATA , PRIORIDADE E STATUS(COMPLETA,OU NÃO)
      this.descricao = descricao;
      this.data = data;
      this.prioridade = prioridade;
      this.completa = false;
    }
  
    marcarCompleta() {
      this.completa = true;                  //CHAMAR ESSE METODO PARA TORNAR A CLASSE COMO CONCLUIDA
    }
  
    get descricaoTarefa() {
      return this.descricao;                 
    }
}

  class GerenciadorDeTarefas {               //CLASSE PARA GERENCIAR AS TAREFAS (O QUE FAZER COM AS TAREFAS COMO CRIAR , EXCLUIR, EDITAR)
    constructor() {
      this.tarefas = [];                                      //AQUI AS TAREFAS SÃO ARMAZENADAS DENTRO DO ARRAY
    } 
  
    adicionarTarefa(descricao,data,prioridade) {                              // MÉTODO PARA ADICIONAR TAREFAS
      const tarefa = new Tarefa(descricao,data,prioridade);                 // CRIANDO UMA NOVA TAREFA ATRAVES DA CLASSE TAREFA
      this.tarefas.push(tarefa);                                           // DANDO UM PUSH DA NOVA TAREFA PARA O ARRAY TAREFA
    }
  
    listarTarefas() {                                                       // LISTANDO TODAS AS TAREFAS E MOSTRANDO TODAS INFORMAÇÕES CONTIDAS NELAS 
      this.tarefas.forEach((tarefa, index) => {
        console.log(`${index + 1}: ${tarefa.descricaoTarefa} | Situação: ${tarefa.completa ? 'Completa' : 'Pendente'} | Criada em: ${tarefa.data} | Prioridade: ${tarefa.prioridade}`);
      });
    }

    listarTarefasCompletas() {
        const tarefasCompletas = this.tarefas.filter((tarefa) => tarefa.completa)
        if(tarefasCompletas.length > 0){                                               //LISTANDO TAREFAS QUE JÁ FORAM CONCLUIDAS ATRÁVES DO METODO FILTER
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
        if(tarefasNaoCompletas.length > 0){                                         //LISTANDO TAREFAS QUE AINDA NÃO FORAM CONCLUIDAS ATRÁVES DO METODO FILTER
            console.log("Tarefas não Completas:")
            tarefasNaoCompletas.forEach((tarefa, index) =>{
                console.log(`${index + 1}: ${tarefa.descricaoTarefa}`)
            })
        } else {
            console.log('Nenhuma tarefa incompleta encontrada.');
        }
    }

    listarPrioridadeAlta(){
      const prioridadeAlta = this.tarefas.filter((tarefa) => tarefa.prioridade == "Alta")
      if(prioridadeAlta.length > 0 ){                                                    //LISTANDO TAREFAS COM PRIORIDADES ALTA
        console.log("Tarefas com Prioridade Alta:")                   
        prioridadeAlta.forEach((tarefa, index) =>{
          console.log(`${index +1}: ${tarefa.descricaoTarefa} | Situação: ${tarefa.completa}`)
        })
      } else {
        console.log("Nenhuma tarefa com Prioridade Alta Encontrada!")
      }
    }

    listarPrioridadeMedia(){
      const prioridadeMedia = this.tarefas.filter((tarefa) => tarefa.prioridade == "Média")
      if(prioridadeMedia.length > 0 ){
        console.log("Tarefas com Prioridade Média:")                              //LISTANDO TAREFAS COM PRIORIDADES MÉDIA
        prioridadeMedia.forEach((tarefa, index) =>{
          console.log(`${index +1}: ${tarefa.descricaoTarefa} | Situação: ${tarefa.completa}`)
        })
      } else {
        console.log("Nenhuma tarefa com Prioridade Média Encontrada!")
      }
    }

    listarPrioridadeBaixa(){
      const prioridadeBaixa = this.tarefas.filter((tarefa) => tarefa.prioridade == "Baixa")
      if(prioridadeBaixa.length > 0 ){
        console.log("Tarefas com Prioridade Baixa:")                      //LISTANDO TAREFAS COM PRIORIDADES BAIXA
        prioridadeBaixa.forEach((tarefa, index) =>{
          console.log(`${index +1}: ${tarefa.descricaoTarefa} | Situação: ${tarefa.completa}`)
        })
      } else {
        console.log("Nenhuma tarefa com Prioridade Baixa Encontrada!")
      }
    }
  
    removerTarefa(index) {
      this.tarefas.splice(index -1, 1);                             // REMOVER ALGUMA TAREFA
    }

    editarDescricao(index , descricao){
        let indiceEditar = index -1;
        if(indiceEditar >= 1 &&  indiceEditar < this.tarefas.length){         // EDITAR DESCRIÇÃO DA TAREFA
            this.tarefas[indiceEditar].descricao = descricao;
        } else{
            console.log('Índice inválido. Não foi possível editar a descrição.');
        }
        
    }

  }
let gerenciador = new GerenciadorDeTarefas();

gerenciador.adicionarTarefa("Aprender JavaScript", "21-04-2024", "Alta");
gerenciador.adicionarTarefa("Praticar codificação", "22-01-2024", "Média");
gerenciador.adicionarTarefa("Descansar", "22-01-2024", "Baixa");
gerenciador.listarTarefas();
gerenciador.listarPrioridadeAlta();
gerenciador.listarPrioridadeMedia();
gerenciador.listarPrioridadeBaixa();

/*gerenciador.tarefas[0].marcarCompleta()
gerenciador.tarefas[1].marcarCompleta()
gerenciador.listarTarefasCompletas()
gerenciador.listarTarefasNaoCompletas()*/

