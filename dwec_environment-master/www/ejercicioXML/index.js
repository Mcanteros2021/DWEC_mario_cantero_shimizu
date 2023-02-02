let READY_STATE_UNINITIALIZED = 0;
let READY_STATE_LOADING = 1;
let READY_STATE_LOADED = 2;
let READY_STATE_INTERACTIVE = 3;
let READY_STATE_COMPLETE = 4;

let HTTP_STATUS_OK = 200;
let HTTP_STATUS_NOT_FOUND = 404;
let HTTP_STATUS_SERVER_ERROR = 500;

// Carga de contenido mediante URL y su Método (GET,POST,DELETE o UPDATE)//

function cargaContenido(url, metodo) {
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    } else {
        alert("No tienes soporte para AJAX");
    }

// Valida que todo vaya bien // 

    if (peticion_http) {

        // Recorre 4 veces el código para validar sus fases //

        peticion_http.onreadystatechange = muestraContenido;

        // Abre el archivo //

        peticion_http.open(metodo, url, true);

        

        peticion_http.send(null)
       
    }
}



function muestraContenido() {
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === HTTP_STATUS_OK) {

            let main = document.getElementById("main")
            let tr = document.createElement("tr")
            let th = document.createElement("th")

        }
    }
}

function descargaArchivo() {
    cargaContenido("http://localhost:8090/www/ejercicioXML/tvshow.xml", "GET");
}