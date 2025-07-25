/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let valorOriginal = 100;
let condicao = 'Débito'
let percentual = 10
let precoFinal;
let desconto = (valorOriginal * percentual / 100) 

if (condicao === 'Débito') {
    precoFinal = valorOriginal - desconto
}

console.log(precoFinal)