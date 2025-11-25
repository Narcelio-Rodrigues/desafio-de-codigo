for (let indice = 0; indice <= 10; indice++) {
    alert("Indice = " + indice)
}

//

let indice = 0

for (
    alert("Inicializando o for");
    indice <= 10;
    alert("Finalizando um bloco de repetição")
) {
    alert("Indice = " + indice)
    indice++
}

//

let nome = "Narcelio"

for (let indice = 0; indice < nome.length; indice++) {
    console.log(nome[indice])
}

//

let sobrenome = "Rodrigues"

for (let indice = 0; indice < sobrenome.length; indice++) {
    console.log(indice, sobrenome[indice])
}

//

for(let dia = 1; dia <= 30; dia++) {
    console.log("Dia " + dia);
}