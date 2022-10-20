// 1-Potencia.
// 2-Raíz.
// 3-Redondeo.
// 4-Trigonometría.
//  Los parametros a calcular seran pasados como 4 y 5 argumentos

if(process.argv[2] == 1){

    let base = process.argv[3]
    let potencia = process.argv[4]

    console.log(Math.pow(base,potencia))



}else if(process.argv[2] == 2){

    let num = process.argv[3]
    console.log(Math.sqrt(num))



}else if(process.argv[2] == 3){

    let num = process.argv[3]
    console.log(Math.round(num))

}else if(process.argv[2] == 4){

    let num = process.argv[3]
    console.log("Seno: "+ Math.sin(num) + " Coseno: "+ Math.cos(num) + " Tangente: "+ Math.tan(num)  )

}