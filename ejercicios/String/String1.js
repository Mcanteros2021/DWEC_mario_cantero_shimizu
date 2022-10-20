let nombre = process.argv[2]
let apellido = process.argv[3]
let apellido2 = process.argv[4]

let nombreCompleto = nombre + apellido + apellido2

let longitud = nombreCompleto.length // Longitud del nombre completo
console.log(longitud)
let mayus = nombreCompleto.toUpperCase() // Nombre completo en mayuscula
console.log(mayus)
let minus = nombreCompleto.toLowerCase() // Nombre completo en minuscula
console.log(minus)

console.log("Nombre: " + nombre + "Apellido: " + apellido + "Apellido 2: "+ apellido2) // nombre completo

console.log(nombre.charAt(0)+apellido+apellido2.charAt(0)) // Sugerencia de usuario

console.log(nombre.substring(0,3) + apellido.substring(0,3)+apellido2.substring(0,3))

