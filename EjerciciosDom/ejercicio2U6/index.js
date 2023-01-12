let buttonAdd = document.getElementById("add")
let borrar1 = document.getElementById("borrar1")
let borrar2 = document.getElementById("borrar2")
let lista = document.getElementById("lista")

buttonAdd.addEventListener('click', ()=>{
   
   let elemento = document.createElement("li")
   let texto = document.createTextNode(prompt("Introduce el texto a añadir"))
    elemento.appendChild(texto)
    lista.appendChild(elemento)
})
borrar1.addEventListener('click', ()=>{
   
    lista.removeChild(lista.firstElementChild)
 })

borrar2.addEventListener('click', ()=>{
   
    lista.removeChild(lista.lastElementChild)
 }) 


