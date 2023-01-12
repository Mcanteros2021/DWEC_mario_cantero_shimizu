window.onload = initListeners

let table = document.getElementById("default")


function initListeners(){

    let rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let columns = row.getElementsByTagName("td");
        for (let j = 0; j < columns.length; j++) {
            let cell = columns[j];
            cell.addEventListener("click", clic, false);
        }
    }

}



var id1;
var id2;
var td1;
var td2;

var clic1 = false

function clic(e){

       var element = e.currentTarget.firstElementChild;
      

    if(clic1){
        id2 = element
        td2 = e.currentTarget
        setTimeout(() => {
            element.style.setProperty('visibility','visible')
            console.log("b")
            }, 1000); 
      

        if(check(id1,id2)){
          
            td1.style.setProperty('border-color','green')
            
            td2.style.setProperty('border-color','green')

        }else{
           setTimeout(() => {
            id1.style.setProperty('visibility','hidden')
            id2.style.setProperty('visibility','hidden')
            console.log("a")
            }, 2000); 
        }
       clic1 = false
       
    }else{
        setTimeout(() => {
            element.style.setProperty('visibility','visible')
            console.log("c")
            }, 1000);
        clic1 = true 
        id1 = element
        td1 = e.currentTarget
    }

}

function check(id1,id2){

    if (id1.id === id2.id){

        return true

    }else{
        return false
    }

}