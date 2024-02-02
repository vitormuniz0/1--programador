// Pra começar, Promises são como os "compromissos" do código. Elas garantem que algo vai acontecer, seja bom ou ruim. Você cria uma Promise e ela te promete um resultado futuro. Ela pode acabar sendo "resolvida" (sucesso) ou "rejeitada" (falha).

let promessaDeEstudo = new Promise((resolve, reject) => {
    let estudou = false; // Troca isso pra false e vê o que rola

    if (estudou) {
        resolve('Passou no exame! 🎉');
    } else {
        reject('Não passou. 😞 Precisa estudar mais!');
    }
});

promessaDeEstudo
    .then((resultado) => {
        console.log(resultado); // Lida com o sucesso
    })
    .catch((erro) => {
        console.log(erro); // Lida com o fracasso
    });


//     Tratamento de erros com Promises
// Tratar erros com Promises é crucial. É como ter um seguro: se tudo der errado, você tá coberto.

function verificarDados(dados) {
    return new Promise((resolve, reject) => {
        if (dados.sãoValidos) {
            resolve('Dados válidos! 👍');
        } else {
            reject('Dados inválidos! 👎');
        }
    });
}

verificarDados({ sãoValidos: false })
    .then((resposta) => {
        console.log(resposta);
    })
    .catch((erro) => {
        console.error(erro);
    });