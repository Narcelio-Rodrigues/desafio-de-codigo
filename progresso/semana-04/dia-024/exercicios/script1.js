/*
let c = 1
do {
    console.log(`Passo ${c}`)
    c++ // c = c + 1
} while (c <= 6)
*/ 

for(let d = 1; d <= 10; d++) {
    console.log(`Passo ${d}`)
}

for(let c = 1; c <= 10; c++) {
    for(let a = 2; a <= 9; a++) {
        let res = c * a
        console.log(`${c} x ${a} = ${res}`)
    }
    console.log('--------')
}
console.log('FIM!')