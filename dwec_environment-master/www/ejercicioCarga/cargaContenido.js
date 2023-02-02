let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADING = 1;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;

let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

window.onload = cargarURL

let peticion_http;
let divArea = document.getElementById("a")
let buttonCargar =  document.getElementById("url")
buttonCargar.addEventListener("click",()=>{
descargaArchivo()
})

function cargarURL(){

    let actualUrl = window.location
    buttonCargar.value = actualUrl
}

function cargaContenido(url, metodo) {
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else {
        alert("No tienes soporte para AJAX");
    }

    if (peticion_http) {
        peticion_http.onreadystatechange = muestraContenido;
        peticion_http.open(metodo, url, true);
        peticion_http.send(null)
       
    }
}

function descargaArchivo() {
    cargaContenido("http://localhost:8090/www/localidad.php", "GET");
}

function muestraContenido() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === HTTP_STATUS_OK) {

            let textArea = document.createElement("textarea")
            textArea.value = peticion_http.responseText
            divArea.appendChild(textArea)
        }
    }
}



