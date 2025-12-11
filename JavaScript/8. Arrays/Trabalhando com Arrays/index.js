const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)


// Adiciona elemento no final do array e devolve o tamanho do array
// push
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)


// Adiciona elemento no início do array e devolve o tamanho do array
// unshift
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)


// Remove elemento no final do array e devolve ele
// pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)


// Remove elemento no começo do array e devolve ele
// shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)


//Pesquisar por um Elemento
//Verificar se um elemento existe no Array
//incluides
const inclui = arr.includes("Gandalf")
console.log(inclui)


//indexOf
const indice = arr.indexOf("Gandalf")
console.log(indice)


//Cortar
//slice
const hobbits = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)


// Concatenar
// concat
const sociedade = hobbits.concat(outros, "Banana")
console.log(sociedade)


//Substituindo Elementos
//splice
//Devolve o elemento removido
const elementosRemovidos = sociedade.splice(indice, 2, "abacaxi", "morango")
console.log(sociedade)
console.log(elementosRemovidos)


// Iterar sobre os Elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice)
}