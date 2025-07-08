let herois = [
// ['nome', 'xp']
    ['Lupp', 800],
    ['Batt', 1500],
    ['Goll', 3000],
    ['Naxx', 6500],
    ['Maxx', 7600],
    ['Brow', 8500],
    ['Stri', 9500],
    ['Luxx', 12000],
]

for (let p = 0; p < herois.length; p++) {
    let nomeHeroi = herois[p][0]
    let quantidadeXp = herois[p][1]
    let nivel
    let categoria

    if (quantidadeXp <= 1000) {
        categoria = 1
    } else if (quantidadeXp >= 1001 && quantidadeXp <= 2000) {
        categoria = 2
    } else if (quantidadeXp >= 2001 && quantidadeXp <= 5000 ) {
        categoria = 3
    } else if (quantidadeXp >= 5001 && quantidadeXp <= 7000 ) {
        categoria = 4
    } else if (quantidadeXp >= 7001 && quantidadeXp <= 8000 ) {
        categoria = 5
    } else if (quantidadeXp >= 8001 && quantidadeXp <= 9000 ) {
        categoria = 6
    } else if (quantidadeXp >= 9001 && quantidadeXp <= 10000 ) {
        categoria = 7
    } else {
        categoria = 8
    }

    switch (categoria) {
        case 1:
            nivel = 'Ferro'
            break;
        case 2:
            nivel = 'Bronze'
            break;
        case 3:
            nivel = 'Prata'
            break;
        case 4:
            nivel = 'Ouro'
            break;
        case 5:
            nivel = 'Platina'
            break;
        case 6:
            nivel = 'Ascendente'
            break;
        case 7:
            nivel = 'Imortal'
            break;
        case 8:
            nivel = 'Radiante'
            break;
        default:
            nivel = "[ERRO]"
            break;
    }

    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`)
}