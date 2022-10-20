//Hago una equivalencia a los arrays de los meses y dia de la semana para mostrar la fecha en distintos formatos segun la eleccion//
let hoy = new Date()
const dias = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
]
const meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
]
const months = [
    'January',
    'february',
    'March',
    'april',
    'May',
    'June',
    'August',
    'September',
    'october',
    'november',
    'december'
]
const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
]
// 1- Formato con slash
// 2- Formato español
// 3- Formato Ingles
if(process.argv[2] == 1){
    console.log(hoy.getDate()+"/"+hoy.getMonth()+"/"+hoy.getFullYear())

}else if(process.argv[2] == 2){

    console.log(dias[hoy.getDay()]+ "," + hoy.getDate()+" de "+meses[hoy.getMonth() + 1] + " de "+ hoy.getFullYear())


}else if(process.argv[2] == 3){

    console.log(days[hoy.getDay()]+","+months[hoy.getMonth()] +hoy.getDate()+ ","+ hoy.getFullYear())


}