 /*let carro = {
    marca : "fiat",
    modelo: "toro",           // CRIANDO OBJETO
    ano: 2024
} */


/*for (let chave in carro){
    console.log(`${chave}: ${carro[chave]}`)       //  LOOP FOR IN
}*/

//carro.cor = "vermelho";


/*let calculadora = {
    num1 : 3,                                        // FUNÇÕES DENTRO DE OBJETOS
    num2 : 5,
    somar : function() {
        console.log(this.num1 + this.num2);
    }
    
}

calculadora.somar();*/


let livro = {
    autor: "vitor",                            
    titulo: "FUTURO DEV"
}

console.log(Object.keys(livro));                //metodos avançados de objetos
console.log(Object.values(livro));

/*

console.log(livro);

let outroLivro = livro;
outroLivro.autor = "josé";                        //referencias de objeto


console.log(outroLivro);
console.log(livro); */