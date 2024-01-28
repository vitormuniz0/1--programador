export class Atividade {
    constructor(descricao){
        this.descricao = descricao;
    }
}

export class gerenciadorDeAtividade{
    constructor(){
        this.atividades = [];
    }

    adicionarTarefa(descricao){
        const tarefa = new Atividade(descricao);
        this.atividades.push(tarefa)
    }

    excluirTarefa(index){
        this.atividades.splice(index -1,1)
    }

    listarTarefa(){
        this.atividades.forEach((Atividade,index) =>{
            console.log(`${index + 1} : ${Atividade.descricao}`)
        })
    }
}