import express from "express";
const app = express();

app.listen(3000, () => {
    console.log('Servidor rodando em <http://localhost:3000>');   //iniciando servidor
});

app.use(express.json());

const receitas = [];


app.get('/receitas/:nomeReceita', (req, res) => {   // RECEITAS POR ID
  const receita = receitas.find(x => x.nomeReceita == req.params.nomeReceita); //UTILIZANDO O METODOV DE ARRAY PARA PEGAR A RECEITA PELO ID IGUAL AO DO PARAMETRO PASSADO
  res.status(200).send(receita);    //BUSCANDO DENTRO DO ARRAY DE RECEITAS
  console.log("Buscando receita" , req.params.nomeReceita)
});

app.get('/receitas', (req, res) => {
  res.status(200).send({receitas:receitas}); //BUSCA TODAS RECEITAS
  console.log("Buscando todas as receitas")
});

app.post('/receitas', (req, res) => {
  console.log(req.body)          
  receitas.push(req.body)                    //CRIANDO RECEITA
  res.status(200).send('Receita Criada');
  console.log("Criou uma receita")
});

app.delete('/receitas/:id', (req,res) => {
    const receita = receitas.find(x => x.nomeReceita == req.params.nomeReceita);
    const receitaId = receitas.indexOf(receita);             //EXCLUINDO RECEITA
    receitas.splice(receitaId, 1);
    res.status(200).send("Receita excluida")
    console.log("Receita excluida ", req.params.nomeReceita)
})



