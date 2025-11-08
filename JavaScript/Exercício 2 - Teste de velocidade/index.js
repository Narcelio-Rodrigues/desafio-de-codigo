/*
Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)
*/
let veiculo1 = prompt("Informe o nome do primeiro veiculo:")
let velocidade1 = parseFloat(prompt("Informe a velocidade do primeiro veiculo:"))

let veiculo2 = prompt("Informe o nome do segundo veiculo:")
let velocidade2 = parseFloat(prompt("Informe a velocidade do segundo veiculo:"))

if(velocidade1 > velocidade2) {
    alert(`${veiculo1} é mais rápido do que ${veiculo2}`)
} else if(velocidade2 > velocidade1) {
    alert(`${veiculo2} é mais rápido do que ${veiculo1}`)
} else {
    alert(`${veiculo1} e ${veiculo2} possuem velocidades iguais.`)
}