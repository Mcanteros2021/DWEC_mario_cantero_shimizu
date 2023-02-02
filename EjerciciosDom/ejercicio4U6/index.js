let inputText = document.getElementById("texto")
let inputContr = document.getElementById("contra")
let inputArea = document.getElementById("areatexto")
let inputLabel = document.getElementById("label")
let inputImagen = document.getElementById("imagen")
let inputCheckbox = document.getElementById("checkbox")
let inputRadio = document.getElementById("radio")
let inputBoton = document.getElementById("boton")

let formulario = document.getElementById("formulario")

inputText.addEventListener('click',()=>{
    let texto = document.createElement("input")
    texto.setAttribute("type","text")
    texto.setAttribute("name",prompt("Que nombre tendrá su input de tipo texto"))
    formulario.appendChild(texto)
})