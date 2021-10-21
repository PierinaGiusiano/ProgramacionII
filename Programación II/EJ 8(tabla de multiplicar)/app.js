window.onload = principal


function principal(){
    let btn = document.getElementById("btn")
    btn.addEventListener("click", ejecutar)
}

function ejecutar(){

    let tablaAGenerar = document.getElementById("tabla").value
    if (tablaAGenerar == ""){
        tablaAGenerar = 0
    }

    let tablas=""
    for(let i=1; i<11; i++){
        tablas += i + " x " + tablaAGenerar + " = " + (tablaAGenerar*i)+"<br>";
    }

    document.getElementById("salida").innerHTML = tablas
}
