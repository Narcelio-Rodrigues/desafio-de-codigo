let calcular = {
     soma(a, b){
        this.soma = a + b
     },
     sub(a, b){
        this.sub = a - b
     }}
calcular.soma(5, 2)
calcular.sub(5, 2)
console.log(`Resultado: ${calcular.sub}`)