window.onload = principal
let array=[]

function principal(){
    let btnUno = document.getElementById("btn-agregar")
    let btnDos = document.getElementById("btn-promedio")
    let btnTres = document.getElementById("btn-limpiar")

    btnUno.addEventListener('click',ejecutarUno)
    btnDos.addEventListener('click',ejecutarDos)
    btnTres.addEventListener('click',ejecutarTres)
}

function ejecutarUno(){
    let aux = document.getElementById("numero").value
    if(aux == ""){
        alert("No ha ingresado ningún número")
    }
    else{
        array.push(aux)
        document.getElementById("mostrar-array").innerHTML = "El array es: <br>"+array
    }
    document.getElementById("numero").value=""
}

function ejecutarDos(){
    let largo = array.length
    let suma = 0
    let promedio = 0
    if(largo < 1){
        alert("El vector debe poseer al menos un elemento")
    }
    else{
        for(let i=0; i<largo;i++){
            suma += Number(array[i])
        }
        promedio = suma/largo
        document.getElementById("resultado").innerHTML = "El promedio es: <br>"+promedio
    }
}

function ejecutarTres(){
    array=[]
    document.getElementById("mostrar-array").innerHTML = ""
    document.getElementById("resultado").innerHTML = ""
    document.getElementById("numero").value = ""
}