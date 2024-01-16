
/*let livros = new Map;                           //CRIANDO O MAP

livros.set("livro1" , "aaaa")
livros.set("livro2" , "bbbb")                     // CRIANDO CHAVES E DANDO VALORES
livros.set("livro3" , "cccc")  */

//console.log(livros.get("livro1"))

/*for (let [chave, valor] of livros){                   // FOR OF DO MAP , MOSTRARA TODAS AS CHAVES COM VALORES
    console.log(`${chave}: ${valor}`)
}

 */

//console.log(livros.size)                          //VENDO QUANTAS CHAVES TEM NO MAP
 
//console.log(livros.delete("livro2"))                    //DELETANDO CHAVE

//console.log(livros.has("livro3"))                           //VERIFICANDO SE A CHAVE EXISTE


let colecao = new Map;

colecao.set("String" , "aaaaa")
colecao.set({Object : true}, "vitor: pessoa")
colecao.set(20, "idade")

for (let [chave, valor] of colecao){                   // FOR OF DO MAP , MOSTRARA TODAS AS CHAVES COM VALORES
    console.log(`${chave}: ${valor}`)
}