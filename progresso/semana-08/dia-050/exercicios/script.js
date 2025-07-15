/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combusível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;
 */

let precoCombustivel = 5.80;
let kmPorLitros = 12;
let distanciaEmKm = 100;

let litrosConsumidos = distanciaEmKm / kmPorLitros;
let valorGasto = litrosConsumidos * precoCombustivel;
console.log(`O valor da viagem é: R$ ${valorGasto.toFixed(2)}`);