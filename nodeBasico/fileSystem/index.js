import fs from 'fs';

fs.readFile('novoArquivo.txt', 'utf8', (erro, dados) => {    //leitura de arquivos utiliza fs.readFile
    if (erro) {
      console.error("Erro ao ler o arquivo", erro);
      return;
    }
    console.log("Conteúdo do arquivo:", dados);
});

// --------------------------------------------------------------------------------------

// escrita em arquivos utilizamos o metodo fs.writefile

const conteudo = 'Olá, Node.js!';
fs.writeFile('novoArquivo.txt', conteudo, erro => {
  if (erro) {
    console.error("Erro ao escrever no arquivo", erro);
    return;
  }
  console.log("Arquivo salvo com sucesso!");
});

// Criando Diretórios
// Para criar um novo diretório, usamos fs.mkdir.

fs.mkdir('meuDiretorio', erro => {
  if (erro) {
    console.error("Erro ao criar o diretório", erro);
    return;
  }
  console.log("Diretório criado com sucesso!");
});


// Lendo Diretórios
// Para ler o conteúdo de um diretório (listar arquivos e subdiretórios), usamos fs.readdir.

fs.readdir('meuDiretorio', (erro, arquivos) => {
  if (erro) {
    console.error("Erro ao ler o diretório", erro);
    return;
  }
  console.log("Conteúdo do diretório:", arquivos);
});