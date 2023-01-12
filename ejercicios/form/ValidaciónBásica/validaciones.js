

function validar(){




}

function validNombre(nombre){

    const validacion = /^[A-Za-z0-9]{20,}$/

    if(validacion.test(nombre)){

        console.log("Nombre válido")
        return true

    }else {
        console.log("Nombre no válido")

    }


}

function validAnio(anio){

    const validacion = /^\d{4}$/

    if(validacion.test(anio)){

        console.log("Nombre válido")
        return true

    }else {
        console.log("Nombre no válido")

    }


}

