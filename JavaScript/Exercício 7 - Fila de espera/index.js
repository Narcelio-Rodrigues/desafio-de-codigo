let opcao = "3"
let lista = []

do {
    opcao = prompt(
        "Seja bem-vindo(a)\n" +
        "\nLista de espera:" +
        listaDeEspera +
        "\n1 - Novo paciente" +
        "\n2 - Consultar paciente" +
        "\n3 - Sair"
    )

    switch (opcao) {
        case "1":
            let listaDeEspera = lista.push(prompt("Adicione o nome do novo paciente:"))
            break;
        case "2":
            prompt("")
            break;
        case "3":
            alert("Saindo...")
            break;
        default:
            alert("Opção inválida.")
    }
} while (opcao !== "3");