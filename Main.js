const log = (somethigth) => {
    console.log(somethigth)
}
let respuestica
const azar = (number1)=>{
    const number = Math.floor(Math.random() * number1)
    return number
}
let correctas = 0
let inCorrectas = 0
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
    respuestica = preguntas.Numero1 * preguntas.Numero2
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
    log(respuestica)
    random(azar(4))

}
window.addEventListener("load",wi )
const array = document.querySelectorAll(".buttoncito")
array.forEach(element => {
    element.addEventListener("click", (e) =>{
        const extraer = e.target.innerText
        log(extraer)
        if (extraer == respuestica) {
            correctas++
            document.querySelector("#status").innerText = "Felicidades, La respuesta es correcta"
            document.querySelector("#status").style.color = "blue"
            setTimeout(() => {
                alert("Click para pasar a la siguiente pregunta")
            document.querySelector("#status").innerText = ""
                wi()
                const array = document.querySelectorAll(".buttoncito")
                array.forEach(element => {
                   element.classList.remove("hidden")
                })
            document.querySelector("#status").style.color = "red"
            }, 100);
        }else{
            inCorrectas++
            document.querySelector("#status").innerText = "Respuesta Incorrecta"
            e.target.classList.add("hidden");
        }
    })
});
log(correctas)
document.querySelector("#mesclar").addEventListener("click", ()=>{
    wi()
    const array = document.querySelectorAll(".buttoncito")
    array.forEach(element => {
       element.classList.remove("hidden")
    })
    document.querySelector("#status").innerText = ""
    });

    

    document.querySelector("#result").addEventListener("click",()=>{
        document.querySelector("#correcta").classList.remove("hidden")
        document.querySelector("#incorrecta").classList.remove("hidden")
        document.querySelector("#correcta").innerText = `Usted ha tenido ${correctas} Respuestas Correctas`
        document.querySelector("#correcta").style.color = "blue"
        document.querySelector("#incorrecta").innerText = `Usted ha tenido ${inCorrectas} Respuestas Incorrectas`
    })
    document.querySelector("#reiniciar").addEventListener("click",()=>{
        location.reload();
    })
    document.querySelector("#Noresult").addEventListener("click",()=>{
        document.querySelector("#correcta").classList.add("hidden")
        document.querySelector("#incorrecta").classList.add("hidden")
    })
    