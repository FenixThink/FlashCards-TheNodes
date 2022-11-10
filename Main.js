const log = (somethigth) => {
    console.log(somethigth)
}
const azar = ()=>{
    const number = Math.floor(Math.random() * 15)
    return number
}

const azar1 = ()=>{
    const number = Math.floor(Math.random() * 100)
    return number
}
window.addEventListener("load", ()=>{
    const preguntas = {
        "Numero1" : azar(),
        "Numero2" : azar(),
        "Respuestas" : [
            azar1(),
            azar1(),
            azar1()
        ]
    }
    const respuestica = preguntas.Numero1 * preguntas.Numero2
    preguntas.Respuestas.push(respuestica);
    log(preguntas.Respuestas[0]);

})

