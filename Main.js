const log = (somethigth) => {
    console.log(somethigth)
}
const azar = (number1)=>{
    const number = Math.floor(Math.random() * number1)
    return number
}
const wi = ()=>{
    const preguntas = {
        "Numero1" : azar(15),
        "Numero2" : azar(15),
        "Respuestas" : [
            azar(100),
            azar(100),
            azar(100)
        ]
    }
    const respuestica = preguntas.Numero1 * preguntas.Numero2
    preguntas.Respuestas.push(respuestica);
    log(preguntas.Respuestas);
    document.querySelector(".number1").innerText = preguntas.Numero1;
    document.querySelector(".number2").innerText = preguntas.Numero2;
    const random = (valor)=>{
        if (valor == 0) {
        document.querySelector("#answer1").innerText = preguntas.Respuestas[3]
        document.querySelector("#answer2").innerText = preguntas.Respuestas[2]
        document.querySelector("#answer3").innerText = preguntas.Respuestas[1]
        document.querySelector("#answer4").innerText = preguntas.Respuestas[0]
    }
    if (valor == 1) {
        document.querySelector("#answer4").innerText = preguntas.Respuestas[3]
        document.querySelector("#answer3").innerText = preguntas.Respuestas[2]
        document.querySelector("#answer1").innerText = preguntas.Respuestas[1]
        document.querySelector("#answer2").innerText = preguntas.Respuestas[0]
    }
    if (valor == 2) {
        document.querySelector("#answer2").innerText = preguntas.Respuestas[3]
        document.querySelector("#answer1").innerText = preguntas.Respuestas[2]
        document.querySelector("#answer4").innerText = preguntas.Respuestas[1]
        document.querySelector("#answer3").innerText = preguntas.Respuestas[0]
    }
    if (valor == 3) {
        document.querySelector("#answer3").innerText = preguntas.Respuestas[3]
        document.querySelector("#answer4").innerText = preguntas.Respuestas[2]
        document.querySelector("#answer2").innerText = preguntas.Respuestas[1]
        document.querySelector("#answer1").innerText = preguntas.Respuestas[0]
    }
    }
    const array = document.querySelectorAll(".buttoncito")
    random(azar(4))
    array.forEach(element => {
        element.addEventListener("click", (e) =>{
            const extraer = e.target.innerText
            log(extraer)
            if (extraer == respuestica) {
                document.querySelector("#status").innerText = "Respuesta Correcta"
            }else{
                document.querySelector("#status").innerText = "Respuesta Incorrecta"
                e.target.classList.add("hidden");
            }
        })
    });
}
window.addEventListener("load",wi )


document.querySelector("#mesclar").addEventListener("click", ()=>{
    wi()
})