let velocidade = 80

while (velocidade > 0) {
    alert ("O carro está a " + velocidade + " Km/h")
    velocidade -= 20
    alert ("Diminuindo 20 km/h")
}

alert("O carro parou.")

// 

let velocidade1 = 80

while (velocidade1 > 0) {
    alert ("O carro está a " + velocidade1 + " Km/h")
    velocidade1 -= 20
    alert ("Diminuindo 20 km/h")

    if (velocidade1 === 40) {
        break
    }
}

alert("O carro parou.")