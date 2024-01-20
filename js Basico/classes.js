/*class Pessoa {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }                                             //CRIANDO UMA CLASSE//

    falar() {
        console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

let vitor = new Pessoa('Vitor' , 20);

vitor.falar();*/

                                               //HERANÇA//
/*class Estudante extends Pessoa {
    constructor(nome, idade, curso){
        super(nome,idade); //CHAMA O CONSTRUTOR DE CLASSE PAI , PASSA OS DADOS PARA O CONSTRUTOR DE CLASSE PESSOA
        this.curso = curso;
    }

    estudar(){
        console.log(`Estudando ${this.curso}`)
    }
}
let vitor = new Estudante('Vitor' , 20, 'ADS');

vitor.falar();
vitor.estudar();
*/

                                               //PROPRIEDADES PRIVADAS //                            

//  A propriedade #saldo é privada. Isso significa que ela só pode ser acessada ou modificada dentro da classe ContaBancaria.

class ContaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    this.#saldo += valor;
  }

  getSaldo() {
    return this.#saldo;
  }

  sacar(valor){
    if(this.#saldo >= valor){
        this.#saldo -= valor
        console.log("SACOU!")
    } else {
        console.log("Valor acima do Saldo")
    }
  }
}                                     

let conta = new ContaBancaria(500);

conta.depositar(300)
console.log(conta.getSaldo())
console.log("-------------")
conta.sacar(4000)
console.log(conta.getSaldo())


