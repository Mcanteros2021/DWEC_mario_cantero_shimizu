let cum = new Date(2022,process.argv[2],process.argv[3])
let cont = 0;
for (let i = cum.getFullYear(); i < 2100 ; i++) {
    let fecha = new Date(i,cum.getMonth(),cum.getDate()).getDay()
    if(fecha === 6){
        cont++

    }

    
}
console.log("Tu cumple cae en domingo "+ cont+ " veces")
