/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustível do carro por KM;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

 Imprima no console o valor que será gasto para realizar esta viagem.
*/

let tipoCombustivel = 'Gasolina'
let precoEtanol = 4.13
let precoGasolina = 6.14
let kmPorLitros = 12;
let distanciaEmKm = 100;


let litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Gasolina') {
    valorGasto = litrosConsumidos * precoGasolina
} else {
    valorGasto = litrosConsumidos * precoEtanol
}

console.log(`O valor da viagem é: R$ ${valorGasto.toFixed(2)}`);