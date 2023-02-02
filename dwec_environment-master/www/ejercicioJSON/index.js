window.onload = cargaDatos

function cargaDatos(){

    let xhr = new XMLHttpRequest();

	xhr.onreadystatechange =  () => {
		if (xhr.readyState == 4 && xhr.status == 200) {

            let json = JSON.parse(xhr.responseText)
			carga_xml(json);
		}
	};
    xhr.open("GET", "http://localhost:8090/www/ejercicioJSON/tvshow.json");
	xhr.send();
}

function carga_xml(json){

   let table = document.createElement("table")
   let main = document.getElementById("main")
   let tr_apartado = document.createElement("tr")
   let td_1 = document.createElement("td")
   let td_2 = document.createElement("td")
   let td_3 = document.createElement("td")
   let td_4 = document.createElement("td")
   td_1.appendChild(document.createTextNode("Título"))
   td_2.appendChild(document.createTextNode("Director"))
   td_3.appendChild(document.createTextNode("Año"))
   td_4.appendChild(document.createTextNode("Terminada"))
   tr_apartado.appendChild(td_1)
   tr_apartado.appendChild(td_2)
   tr_apartado.appendChild(td_3)
   tr_apartado.appendChild(td_4)
   table.appendChild(tr_apartado)

    for (let i = 0; i< json.SERIES.length ; i++) {

        let tr = document.createElement("tr")
        let th = document.createElement("th")
        let director = document.createElement("i")
        let td_director = document.createElement("td")
        let td_año = document.createElement("td")
        let td_img = document.createElement("td")
        let img_element = document.createElement("img")

        th.appendChild(document.createTextNode(json.SERIES[i].TITULO))
        tr.appendChild(th)

        director.appendChild(document.createTextNode(json.SERIES[i].DIRECTOR))
        td_director.appendChild(director)
        tr.appendChild(td_director)

        let anio = json.SERIES[i].ANYO

        if( anio <= 2000 ){
            
            td_año.setAttribute("class","rojo")
 
        } else if(anio >= 2001 && anio <= 2010 ){

            td_año.setAttribute("class","amarillo")
            
        } else{
            td_año.setAttribute("class","verde")
        }

        td_año.appendChild(document.createTextNode(anio))
        tr.appendChild(td_año)

        let img = json.SERIES[i].TERMINADA

        if(img === "Si"){
            img_element.setAttribute("src","./tick-mark-icon.svg")
        }else {
            img_element.setAttribute("src","./cross-icon.svg")
        }

        td_img.appendChild(img_element)
        tr.appendChild(td_img)


        table.appendChild(tr)
    }

    main.appendChild(table)

}






           
