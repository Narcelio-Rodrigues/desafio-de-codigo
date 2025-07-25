/*
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura mostre sua condição de acordo coma a tabela abaixo.

IMC em adultos. Condição:
 - Abaixo de 18.5 Abaixo do peso;
 - Entre 18.5 e 25 Peso normal;
 - Entre 25 e 30 Acima do peso;
 - Entre 30 e 40 Obeso;
 - Acima de 40 Obsesidade Grave;
*/

let peso = 55
let altura = 159
let classificacao;
let IMC = peso / (altura * altura)


if (IMC < 18.5) {
    classificacao = 'Abaixo do peso'
} else if (IMC > 18.5 && IMC < 25) {
    classificacao = 'Peso normal'
} else if (IMC > 25 && IMC < 30) {
    classificacao = 'Acima do peso'
} else if (IMC > 30 && IMC < 40) {
    classificacao = 'Obeso'
} else {
    classificacao = 'Obesidade Grave'
}

console.log(`O valor do IMC é ${IMC}. Classificado como ${classificacao}`)