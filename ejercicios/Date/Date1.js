//Divido la cantidad de milisegundos en la proporción a dias//
let hoy = new Date()
let finCurso = new Date(2023,5,24)
let tiempo = finCurso - hoy
console.log(tiempo/86400000)