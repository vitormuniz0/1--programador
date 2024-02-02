async function buscarPiadaChuckNorris() {
    try {
        let response = await fetch('https://api.chucknorris.io/jokes/random');
        let piada = await response.json();
        console.log('Piada do Chuck Norris:', piada.value);
    } catch (error) {
        console.error('Erro ao buscar a piada:', error);
    }
}

buscarPiadaChuckNorris();


// Usando Async/Await para requisições AJAX
// Async/Await é uma forma mais elegante de lidar com Promises, deixando o código com uma aparência síncrona, mas funcionando de forma assíncrona.

// Agora, o mesmo exemplo com Async/Await:

async function buscarPost() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Erro na requisição:', error);
    }
}

buscarPost();