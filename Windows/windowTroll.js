
function ventana (){

   var confirmar = confirm("¿ Quiere abrir una ventana nueva ?")



    if(confirmar){

        myWindow = window.open("", "myWindow", "toolbar=no,scrollbars=no,resizable=no,width=400,height=500" )
        myWindow.document.write("<p>This window's name is: " + window.name + "</p><button onclick='window.close()' >Cerrar</button>");

    }else{

    }



}