const pessoa = {
    nome: 'Narcelio',
    idade: 25,
    descrever: function name() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

pessoa.altura = 1.60
// delete pessoa.idade;
// console.log(pessoa.nome)
// console.log(pessoa.idade)
// console.log(pessoa)
pessoa.descrever()