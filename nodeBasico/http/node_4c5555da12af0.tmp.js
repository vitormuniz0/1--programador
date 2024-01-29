import http from 'http';

const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'Tex/html'})   //res.writeHead: Define o status da resposta e os cabeçalhos. Aqui, estamos enviando um status 200 (OK) e indicando que o conteúdo é HTML.
    res.end('<h1>Olá, mundo Node.js!</h1>'); // res.end: Enviamos a resposta ao cliente. Este é o conteúdo que o navegador irá renderizar.
})

server.listen(4000, () => {
    console.log('Servidor rodando em <http://localhost:4000>');
  });

//server.listen: Inicia o servidor na porta especificada (3000, neste caso). O callback é chamado quando o servidor começa a ouvir solicitações.
