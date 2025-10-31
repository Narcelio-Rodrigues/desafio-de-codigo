//Exemplo 1
if (6 === 6) {
    console.log("Verdadeiro")
}

// Exemplo 2
if (6 !== 6) {
    console.log("Verdadeiro")
} else {
    console.log("Falso")
}

// Exemplo 3
const idade = prompt("Informe a sua idade:")

if (idade > 8) {
    alert("Você é maior de idade")
} else if (idade > 12) {
    alert("Você é menor de idade")
} else if (idade > 4) {
    alert("Você é criança")
} else {
    alert("...")
}

// Exemplo 4
console.log("--------------------------")
const idadePessoa = 2;

// 0 a 12 anos -> infância
// 13 a 17 anos -> adolescência
// 18 a 25 anos -> jovem adulto
// 26 a 60 anos -> adulto
// mais que 60 anos -> idoso

if (idadePessoa >= 0 && idadePessoa <= 12) {
    console.log("Infância");
} else if (idadePessoa >= 13 && idadePessoa <= 17) {
    console.log("Adolescência");
} else if (idadePessoa >= 18 && idadePessoa <= 25) {
    console.log("Jovem adulto");
} else if (idadePessoa >= 26 && idadePessoa <= 60) {
    console.log("Adulto");
} else {
    console.log("Idoso")
}

// Exemplo 5
const idadeMarta = 16;
const maioridade = 18;

if (idadeMarta >= 18) {
    console.log("Marta pode dirigir");
} else {
    const anosFaltantes = maioridade - idadeMarta;
    console.log("Marta NÃO pode dirigir");
    console.log(`Faltam ${anosFaltantes} anos para Marta poder dirigir.`);
}

// Operadores Ternários
//Exemplo 1
const resultado = (10 === "10") ? "Verdadeiro" : "Falso";
console.log(res)

//Exemplo 2
const idadeMaria = 16;
const maiorIdade = 18;
idadeMaria >= maiorIdade ? console.log("Maria pode dirigir") : console.log("Maria NÃO PODE dirigir");