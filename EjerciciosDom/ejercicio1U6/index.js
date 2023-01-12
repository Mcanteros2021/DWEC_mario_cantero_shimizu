// El número de párrafos de la página. //

let numParrafos = document.getElementsByTagName("p").length
    console.log(numParrafos)

// El texto del segundo párrafo. //

let parrafo2 = document.getElementsByTagName("p")[1].textContent
    console.log(parrafo2)

// El número de enlaces de la página. //
let numLinks = document.getElementsByTagName("a").length
    console.log(numLinks)

// La dirección del primer enlace. //    
let primerEnlace = document.getElementsByTagName("a")[0]
    console.log(primerEnlace)

// La dirección del penúltimo enlace //    

let penultimoEnlace =document.getElementsByTagName("a")[document.getElementsByTagName("a").length - 2] 
    console.log(penultimoEnlace)

// El número de enlaces que apuntan a /wiki/Municipio //

let cont = 0
let enlaces = document.links

console.log()

for (let i = 0; i < enlaces.length; i++) {


    link = enlaces[i].href

    if(link.includes("/wiki/Municipio") ){
        cont++;
    }
    
}
console.log(cont)

 //El número de enlaces del primer párrafo. // 

let listEnlaces = document.getElementsByTagName("p")[0]
let numEnlaces = listEnlaces.getElementsByTagName("a").length
console.log(numEnlaces)

// Añadir al HTML //

let info = document.getElementById("info")
info.innerHTML = "El número de párrafos de la página" + numParrafos + "<br>" +
 "El texto del segundo párrafo. " + parrafo2 + "<br>" + 
 "El número de enlaces de la página " + numLinks + "<br>" +
 " La dirección del primer enlace. " + primerEnlace + "<br>" + 
 "La dirección del penúltimo enlace " + penultimoEnlace + "<br>" + 
"El número de enlaces que apuntan a /wiki/Municipio " + cont + "<br>" +
"El número de enlaces del primer párrafo. " + numEnlaces + "<br>" 