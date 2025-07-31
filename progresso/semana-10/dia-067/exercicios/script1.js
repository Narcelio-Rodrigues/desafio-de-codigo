/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let valorOriginal = 100;
let condicao = 'Duas vezes'
let percentual = 0
let mensagem = ''

function escolherCondicao(condicaoSelecionada) {
    if (condicaoSelecionada === 'Débito') {
        // Débito
        percentual = -10
        mensagem = 'do desconto'
    } else if (condicaoSelecionada === 'Dinheiro' || condicaoSelecionada === 'PIX') {
        // Dinheiro ou PIX
        percentual = -15
        mensagem = 'do desconto'
    } else if (condicaoSelecionada === 'Duas vezes'){
        // Duas vezes
        percentual = 0
        mensagem = ''
    } else {
        // Acima de duas vezes
        percentual = +10
        mensagem = 'do acréscimo'
    }
}

function calcularAjuste() {
    let ajuste = (valorOriginal * percentual / 100)
    let precoFinal = valorOriginal + ajuste
    return {ajuste, precoFinal}
}

escolherCondicao(condicao);
const {ajuste, precoFinal} = calcularAjuste();

console.log(`Valor do Produto: ${valorOriginal.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`)

if (percentual !== 0) {
    console.log(`Valor ${mensagem}: ${Math.abs(ajuste).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
} else {
    console.log(`Não há desconto nem acréscimo.`);
}

console.log(`Valor a ser pago: ${precoFinal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)