//let meuSet = new Set();

/*meuSet.add(2);
meuSet.add(3);
meuSet.add(4);
*/


//console.log(meuSet.has(2));  // Verificando a presença de valores (Se o valor existir retorna(true));

//console.log(meuSet.size); //VERIFICANDO TAMAMHO DO SET 

/*for (let valor of meuSet){
    console.log(valor);              //DANDO UM ROLE PELO SET (MOSTRANDO TUDO QUE TEM DENTRO DELE )
}*/

//meuSet.delete(1); // Tchau, 1! (ELIMINA SÓ O VALOR CITADO)

//meuSet.clear();   // Limpou tudo!  (ELIMINA TODOS OS VALORES EXISTENTES)

// ------------------------- EXEMPLO ---------------------------

let numeros = [2, 3, 4, 2, 5, 4,7];

let numeroUnicos = new Set(numeros);

console.log([...numeroUnicos])
