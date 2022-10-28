
function ventana (){

   var confirmar = confirm("¿ Quiere abrir una ventana nueva ?")



    if(confirmar){

        myWindow = window.open("", "myWindow", "toolbar=no,scrollbars=no,resizable=no,width=200,height=80,top=500,left=500" )
        myWindow.document.write("<p>This window's name is: " + window.name + "</p><button onclick='window.close()' >Cerrar</button>");

    }else{

    }



}