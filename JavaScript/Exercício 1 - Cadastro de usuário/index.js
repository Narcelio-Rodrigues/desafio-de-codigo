/*
Cadastro de Recrutas

Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:
    o primeiro nome
    o sobrenome
    o campo de estudo
    o ano de nascimento
Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).
*/

let primeiroNome = window.prompt("Insira o primeiro nome:")
let sobrenome = window.prompt("Insira o sobrenome:")
let campoDeEstudo = window.prompt("Insira o campo de estudo:")
let anoDeNascimento = window.prompt("Insira o ano de nascimento:")

window.alert(`Cadastro de Recrutas:\n\n Nome: ${primeiroNome} ` + ` ${sobrenome}\n Campo de Estudo: ${campoDeEstudo} \n Idade: ${2025-anoDeNascimento} anos`)