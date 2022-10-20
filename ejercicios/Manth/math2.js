// El numero del usuario sera el segundo parametro por consola
let num = process.argv[2]

console.log("radio"+ num + "diámetro"+ num * 2 + "Perímetro" + Math.PI * num * 2 + "Área del circulo "+ Math.PI * num * num +"Area esfera"+  4 * Math.PI * (num * num)  + "Volumen Esfera" + 3/4 * Math.PI * Math.pow(num,3)  )