function contar() {
    var ini = window.document.getElementById('ini')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('pass')
    var msg = window.document.getElementById('msg')

    for(ini; fim; pas) {
        for(let a = 2; a <= 9; a++) {
            let res = c * a
            msg.innerHTML = `${c} x ${a} = ${res}`
        }
    } 
}
