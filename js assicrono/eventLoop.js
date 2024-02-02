// Call Stack: É onde as funções são colocadas para serem executadas. Quando você chama uma função, ela entra na pilha. Executou? Sai da pilha.
// Callback Queue: Aqui ficam as callbacks (funções de retorno) das operações assíncronas, esperando a vez de serem chamadas.
// Event Loop: O Event Loop checa a Call Stack. Se tá vazia, ele pega a primeira função da Callback Queue e manda pra Call Stack.

console.log('Início');

setTimeout(() => {
    console.log('Processamento assíncrono');
}, 2000); //esse 2000 quer dizer 2 segundos 

console.log('Fim');

// Nesse código:

// console.log('Início') entra na Call Stack, roda e sai.
// setTimeout entra, mas como é assíncrono, sua callback (console.log('Processamento assíncrono')) vai pra Callback Queue.
// console.log('Fim') entra e sai da Call Stack.
// Após 2 segundos, o Event Loop move a callback do setTimeout pra Call Stack, e aí roda.


