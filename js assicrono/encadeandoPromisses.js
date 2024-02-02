// Encadeando múltiplas Promises
// Quando você tem várias operações assíncronas que precisam ser feitas em sequência, é aí que o encadeamento de Promises brilha. Cada .then() pega o resultado da Promise anterior e passa para a próxima.

// Vamos ver um exemplo prático:

let verificarLogin = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Usuário logado'), 1000);
});

let carregarPerfil = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Perfil carregado'), 1000);
});

verificarLogin
    .then((resultado) => {
        console.log(resultado);
        return carregarPerfil;
    })
    .then((resultadoPerfil) => {
        console.log(resultadoPerfil);
    })
    .catch((erro) => {
        console.error(erro);
    });

// Nesse código, primeiro verificamos o login, e depois carregamos o perfil. Cada etapa ocorre sequencialmente.

// Tratamento de erros em cadeias de Promises
// Tratar erros em cadeias de Promises é crucial. Se uma Promise falha, o .catch() é chamado, e ele pega qualquer erro que aconteça em qualquer etapa do encadeamento.

let verificarPagamento = new Promise((resolve, reject) => {
    setTimeout(() => reject('Erro no pagamento!'), 1000);
});

verificarPagamento
    .then((resultado) => {
        console.log('Pagamento verificado');
    })
    .catch((erro) => {
        console.error(erro); // "Erro no pagamento!"
});

// Promise.all e Promise.race
// Agora, vamos falar de duas funções super úteis: Promise.all e Promise.race.

// Promise.all: Executa várias Promises em paralelo e espera todas serem resolvidas.
// Promise.race: Executa várias Promises em paralelo e resolve/rejeita com a primeira que resolver ou rejeitar.
// Exemplo de Promise.all:

Promise.all([verificarLogin, carregarPerfil])
    .then((resultados) => {
        console.log(resultados); // ['Usuário logado', 'Perfil carregado']
    })
    .catch((erro) => {
        console.error(erro);
    });
// Exemplo de Promise.race:

Promise.race([verificarLogin, carregarPerfil])
    .then((resultado) => {
        console.log(resultado); // Retorna o primeiro que resolver
    })
    .catch((erro) => {
        console.error(erro);
    });