let contra = process.argv[2]
let cont = 0
var min = false
var mayus = false
var num = false
var sim = false
var seguro = true
var letras="abcdefghyjklmnñopqrstuvwxyz"
var letras_mayusculas="ABCDEFGHYJKLMNÑOPQRSTUVWXYZ";
var nums = "0123456789"
var simbol = "-_@#$%&"

for (let i = 0; i < contra.length; i++) {

    if (letras.indexOf(contra.charAt(i),0) !== -1){
        min = true
    }
    if (letras_mayusculas.indexOf(contra.charAt(i),0) !== -1){
        mayus = true
    }
    if (nums.indexOf(contra.charAt(i),0) !== -1){
        num = true
    }
    if (simbol.indexOf(contra.charAt(i),0) !== -1){
        sim = true
    }
    cont++

}
if(min === false){

    console.log("Falta una letra minuscula")
    seguro = false

} else if(mayus === false){

    console.log("Falta una letra mayuscula")
    seguro = false

}else if(num === false){

    console.log("Falta un numero")
    seguro = false
}else if(sim === false){

    console.log("Falta un simbolo")
    seguro = false
}else if(cont <= 8 && cont >=16 ){

    console.log("La longitud no es la correcta")
    seguro = false
}

if(seguro === false){
    console.log("Es una contraseña no seguro")

}else {

    console.log("Es una contraseña segura")

}
