//Array de paises//
var paises = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic",
    "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong",
    "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
    "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand",
    "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome",
    "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden",
    "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];

function mostrarNumPaises(paises) {
    console.log(paises.length)
}

function mostrarTodosLosPaises(paises) {
    for (let i = 0; i < paises.length; i++) {
        console.log(paises[i])
    }
}

function mostrarTodosLosPaisesInv(paises) {
    for (let i = paises.length; i > 0; i--) {
        console.log(paises[i])
    }
}

function mostrarOrdenadoAlf(paises) {
    let ord = paises.sort()
    console.log(ord)
}

function añadirPais(paises, pais) {
    paises.unshift(pais)
}

function añadirPaisFinal(paises, pais) {
    paises.push(pais)
}

function borrarElemento(paises, pais) {
    console.log(paises.pop())
}

function mostrarElementoPos(paises, pos) {
    console.log(paises[pos])
}

function mostrarPosElemento(paises, elem) {

    console.log(paises.indexOf(elem))

}

function mostrarIntervalo(paises, inter1, inter2) {
    console.log(paises.splice(inter1, inter2))

}

//Pregunta al usuario por consola//

console.log("Opción 1: Mostrar número de países")
console.log("En caso de opción 1, pasar como segundo parámetro de consola si quiere mostrarlo ordenado 1:POR DEFECTO, 2:DEL REVES, 3:ALFABETICAMENTE")
console.log("Opción 2: Mostrar listado de paises")
console.log("Opción 3: Mostrar intervalo de paises")
console.log("Opción 4: Añadir Pais")
console.log("Opción 5: Borrar un pais")
console.log("Opción 6: Consultar un pais")


//Variables parámetros pasados por el usuario//

let opc = process.arv[2]
let x1 = process.arg[3]
let x2 = process.arg[4]

switch (opc) {
    case 1:

        console.log(mostrarNumPaises(paises))

        break;

    case 2:
        switch (x1){
            case 1:
                console.log(mostrarTodosLosPaises(paises))
            case 2:
                console.log(mostrarTodosLosPaisesInv(paises))
            case 3:
                console.log(mostrarOrdenadoAlf(paises))
        }


    case 3:
}


