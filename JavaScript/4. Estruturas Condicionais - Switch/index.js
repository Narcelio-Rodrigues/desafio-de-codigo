const resultado = prompt("Escolha uma alternativa:\na)\nb)\nc\n")

switch (resultado) {
    case "a":
        alert("O resultado é 'a'")
        break
    case "b":
        alert("O resultado é 'b'")
        break
    case "c":
        alert("O resultado é 'c'")
        break
    default:
        alert("Finalizando...")
}

/*--------------------------------------*/
const diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
    case 0:
        nomeDoDia = "Domingo";
        break
    case 1:
        nomeDoDia = "Segunda";
        break
    case 2:
        nomeDoDia = "Terça";
        break
    case 3:
        nomeDoDia = "Quarta";
        break
    case 4:
        nomeDoDia = "Quinta";
        break
    case 5:
        nomeDoDia = "Sexta";
        break
    case 6:
        nomeDoDia = "Sábado";
        break
    default:
        nomeDoDia = "Digite outro número"
}

console.log("Dia da semana " + nomeDoDia)