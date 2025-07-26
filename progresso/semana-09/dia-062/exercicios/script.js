/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let valorOriginal = 100;
let condicao = 'Dinheiro'
let percentual;
let precoFinal;
let desconto; 

if (condicao === 'Débito') {
    // Débito
    percentual = 10
    desconto = (valorOriginal * percentual / 100)
    precoFinal = valorOriginal - desconto
    console.log(`O valor do desconto foi ${desconto.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
} else if (condicao === 'Dinheiro' || condicao === 'PIX') {
    // Dinheiro ou PIX
    percentual = 15
    desconto = (valorOriginal * percentual / 100)
    precoFinal = valorOriginal - desconto
    console.log(`O valor do desconto foi ${desconto.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
} else if (condicao === 'Duas vezes'){
    // Duas vezes
    percentual = 0
    desconto = (valorOriginal * percentual / 100)
    precoFinal = valorOriginal - desconto
    console.log(`O valor do desconto foi ${desconto.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
} else {
    // Acima de duas vezes
    percentual = 10
    desconto = (valorOriginal * percentual / 100)
    precoFinal = valorOriginal + desconto
    console.log(`O valor do acréscimo foi ${desconto.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)
}

console.log(`O valor a ser pago é ${precoFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)