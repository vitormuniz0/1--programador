
/*let livros = new Map;                           //CRIANDO O MAP

livros.set("livro1" , "aaaa")                      // ADICIONANDO ELEMENTOS
livros.set("livro2" , "bbbb")                     // CRIANDO CHAVES E DANDO VALORES
livros.set("livro3" , "cccc")  */                           // (CHAVE,VALOR)

//console.log(livros.get("livro1"))

/*for (let [chave, valor] of livros){                   // FOR OF DO MAP , MOSTRARA TODAS AS CHAVES COM VALORES
    console.log(`${chave}: ${valor}`)
}

 */

//console.log(livros.size)                          //VENDO QUANTAS CHAVES TEM NO MAP
 
//console.log(livros.delete("livro2"))                    //DELETANDO CHAVE

//console.log(livros.has("livro3"))                           //VERIFICANDO SE A CHAVE EXISTE

// console.log(mepMap.get("chave2"));     // PEGANDO O VALOR ASSOCIADO A CHAVE

//  -------------------------------------------CONVERSÃO ----------------------------------------------------------

/*let mapParaObjeto = Object.fromEntries(meuMap);       //CONVERTENDO DE MAP PARA OBJETO
console.log(mapParaObjeto); // { chave1: 'valor1' }*/

/*let chavesArray = [...meuMap.keys()];
console.log(chavesArray); // ['chave1']*/   // CONVERTENDO DE MAP PARA ARRAY   (USANDO SPREAD(`...`))

let colecao = new Map;

colecao.set("String" , "aaaaa")
colecao.set({Object : true}, "vitor: pessoa")
colecao.set(20, "idade")

for (let [chave, valor] of colecao){                   // FOR OF DO MAP , MOSTRARA TODAS AS CHAVES COM VALORES
    console.log(`${chave}: ${valor}`)
}