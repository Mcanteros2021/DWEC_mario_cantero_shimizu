let hoy = new Date()

// 1- Tiempo
// 2- AM, PM

if(process.argv[2] == 1){

    console.log(hoy.getHours()+":"+hoy.getMinutes()+":"+hoy.getSeconds())


}else if(process.argv[2] == 2){

    if(hoy.getHours() < 13){

        console.log(hoy.getHours()+":"+hoy.getMinutes()+" AM")
    } else if(hoy.getHours() >= 13){

        console.log(hoy.getHours() - 12 +":"+hoy.getMinutes()+" PM")

    }

}