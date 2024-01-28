import { gerenciadorDeAtividade } from "./tarefa.js";

let atividade = new gerenciadorDeAtividade;

atividade.adicionarTarefa("Estudar")
atividade.adicionarTarefa("Trabalhar")
atividade.listarTarefa();
atividade.excluirTarefa(1)
atividade.listarTarefa();