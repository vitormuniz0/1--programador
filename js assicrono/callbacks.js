// O que são Callbacks
// Primeiramente, o que raios é um Callback? Simplificando, é uma função que você passa como argumento para outra função e que será executada depois. É como se você pedisse pra um amigo comprar pão e ele te ligasse quando voltasse, sacou? A ligação é o callback, que acontece depois da compra é finalizada.

function buscaDados(callback) {
    // Simulando busca de dados
    setTimeout(() => {
        callback('Dados encontrados!');
    }, 2000);
}

buscaDados((dados) => {
    console.log(dados); // Será executado após 2 segundos
});

// -------------------------------------------------------------------------------------------

function buscarUsuario(callback) {
    setTimeout(() => {
        callback({ id: 1, nome: 'João' });
    }, 1000);
}

function buscarPedidos(usuario, callback) {
    setTimeout(() => {
        callback(['Pedido 1', 'Pedido 2']);
    }, 1000);
}

buscarUsuario((usuario) => {
    buscarPedidos(usuario, (pedidos) => {
        console.log(pedidos); // Callback dentro de callback
    });
});


// outro exemplo 

function soma (a, b, callback){
    let result = a + b
    setTimeout(()=>{
        callback(result)
    },2000)
    
}

function multiplicacao (a, b, callback){
    let result = a * b
    setTimeout(()=>{-
        callback(result)
    },1000)
}

function mostrar(num){
    console.log("A operação resulta em: " + num)
}


soma(2,2,mostrar)

multiplicacao(3,3,mostrar)

// outro exemplo 

function multiplicacao (a, b){
    let result = a * b
    return result
    
}

function somar (a,callback){
    setTimeout(()=>{
        let result = a + callback();
        console.log(result)
    },2000)
    
}
let multiplicacaaoResult = multiplicacao(2,2)

somar(2,() => multiplicacaaoResult)  //passando a funcao que a var multiplicacaoResult recebe

