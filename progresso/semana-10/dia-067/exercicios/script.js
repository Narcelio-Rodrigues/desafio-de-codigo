function escreverNome(nome){
    return 'Meu nome é ' + nome
}

// escreverNome('Narcelio');

function verificarIdade(idade){
    if (idade < 18) {
        return 'Menor de idade'
    } else {
        return 'Maior de idade'
    }
}

// verificarIdade(23);

console.log(escreverNome('Narcélio') + '\n' + verificarIdade(23))

