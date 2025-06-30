function obterValores() {
   let a = Number(window.prompt('Digite o primeiro valor:'))
   let b = Number(window.prompt('Digite o segundo valor:'))
   return [a, b]
}

function somar(a, b, historico) {
   let resultado = `${a} + ${b} = ${a + b}`
   window.alert(resultado)
   historico.push(resultado)
   mostrarHistorico(historico)
}

function dividir(a, b, historico) {
   if(b == 0) {
      let erro = 'Erro: não é possível dividir por zero!'
      window.alert(erro)
      historico.push(erro)
   } else {
      let resultado = `${a} / ${b} = ${a / b}`
      window.alert(resultado)
      historico.push(resultado)
   }
   mostrarHistorico(historico)
}

function multiplicar(a, b, historico) {
   let resultado = `${a} * ${b} = ${a * b}`
   window.alert(resultado)
   historico.push(resultado)
   mostrarHistorico(historico)
}

function subtrair(a, b, historico) {
   let resultado = `${a} - ${b} = ${a - b}`
   window.alert(resultado)
   historico.push(resultado)
   mostrarHistorico(historico)
}

function mostrarHistorico(historico) {
   if (historico.length > 0) {
      let mensagem = '📜 Histórico de Operações:\n\n' + historico.join('\n')
      window.alert(mensagem)
   } else {
      window.alert('Nenhuma operação foi realizada.')
   }
}


let escolha;
let historico = []

do {
   escolha = window.prompt('Escolha:\n 1 - Soma\n 2 - Divisão\n 3 - Multiplicação\n 4 - Subtração\n 5 - Apagar histórico\n 6 - Ver histórico\n 7 - Sair')

   switch (escolha) {
      case '1': {
         let [a, b] = obterValores()
         somar(a, b, historico)
         break
      }
      case '2': {
         let [a, b] = obterValores()
         dividir(a, b, historico)
         break
      }
      case '3': {
         let [a, b] = obterValores()
         multiplicar(a, b, historico)
         break
      }
      case '4': {
         let [a, b] = obterValores()
         subtrair(a, b, historico)
         break
      }

      case '5': {
         historico.length = 0
         window.alert('🗑️ Histórico apagado com sucesso!')
         break
      }

      case '6': {
         if (historico.length > 0) {
            let mensagem = '📜 Histórico de Operações:\n\n' + historico.join('\n')
            window.alert(mensagem)
         } else {
            window.alert('Nenhuma operação foi realizada.')
         }
         break
      }

      case '7':
         window.alert('Saindo...')
         break
   
      default:
         window.alert('Opção inválida!')
         break
   }
} while (escolha !== '7')

