function obterValores() {
   let a = Number(window.prompt('Digite o primeiro valor:'))
   let b = Number(window.prompt('Digite o segundo valor:'))
   return [a, b]
}

function somar(a, b) {
   window.alert(`${a} + ${b} = ${a + b}`)
}

function dividir(a, b) {
   if(b == 0) {
      window.alert('Erro: divisão por zero!')
   } else {
      window.alert(`${a} / ${b} = ${a / b}`)
   }
}

function multiplicar(a, b) {
   window.alert(`${a} * ${b} = ${a * b}`)
}

function subtrair(a, b) {
   window.alert(`${a} - ${b} = ${a - b}`)
}

let escolha;

do {
   escolha = window.prompt('Escolha:\n 1 - Soma\n 2 - Divisão\n 3 - Multiplicação\n 4 - Subtração\n 5 - Sair')

   switch (escolha) {
      case '1':
         var [a, b] = obterValores()
         somar(a, b)
         break
      case '2':
         var [a, b] = obterValores()
         dividir(a, b)
         break
      case '3':
         var [a, b] = obterValores()
         multiplicar(a, b)
         break
      case '4':
         var [a, b] = obterValores()
         subtrair(a, b)
         break
      case '5':
         window.alert('Saindo...')
         break
   
      default:
         window.alert('Opção inválida!')
         break
   }

} while (escolha !== '5')