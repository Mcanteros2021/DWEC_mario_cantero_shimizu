window.onload = inicio
function inicio(){
    let enviar = document.getElementById("enviar")

    enviar.addEventListener("click",function(){
        let xhr = new XMLHttpRequest();
    
    
        xhr.open("POST","create_serie.php")
        xhr.setRequestHeader("Content-type","application/json")
        
        let res = {

            titulo: document.getElementById("titulo").value,
            director: document.getElementById("director").value,
            cadena: document.getElementById("cadena").value,
            anyo: document.getElementById("anyo").value,
            terminada: document.getElementById("terminada").value
            
        } 
    
        let form = JSON.stringify(res)
        xhr.send(form); 
        console.log(form)
    })
}



