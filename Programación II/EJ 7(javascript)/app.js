window.onload = principal

function principal(){
  let btn5 = document.getElementById("btn-5")
  let btn6 = document.getElementById("btn-6")
  let btn7 = document.getElementById("btn-7")
  let btn8 = document.getElementById("btn-8")
  
  btn5.addEventListener('click',ejecutar5)
  btn6.addEventListener('click',ejecutar6)
  btn7.addEventListener('click',ejecutar7)
  btn8.addEventListener('click',ejecutar8)
}

//Ejercicio 5
function ejecutar5(){

  let arr = [5,3,8,1];
  let filtered = filterRange(arr,1,4);
  document.getElementById("res-5-array").innerHTML = "El array es: "+arr;
  document.getElementById("res-5-filtrado").innerHTML = "El array filtrado es: "+filtered;

}

function filterRange(arr,a,b){
  return arr.filter(item => (a <= item && item <= b));
}

//Ejercicio 6
function ejecutar6(){
  let arrayLength = 6;
  let arr = [];
  let obj = 0;

  for(let i = 0; i < arrayLength; i++){
    obj = parseInt(Math.random()*100);
    arr.push(obj);
  }
  document.getElementById("res-6-random").innerHTML = "El array random es: "+arr;
  ordenDecreciente(arr);
  document.getElementById("res-6-ordenado").innerHTML = "El array ordenado es: "+arr
}

function ordenDecreciente(arr){
  let aux = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j<arr.length; j++){
      if(arr[i]<arr[j]){
        aux = arr[i];
        arr[i]=arr[j];
        arr[j]=aux;
      }
    }
  }
  return arr
}

//Ejercicio 7
function ejecutar7(){
  let arr=[1,2,3];
  document.getElementById("res-7-ordenado").innerHTML = "El array es: "+arr;
  let arrShuffle = shuffle(arr);
  document.getElementById("res-7-shuffle").innerHTML = "El array despues del shuffle es: "+arrShuffle;

}

function shuffle(arr){
  return arr.sort(() => Math.random()-0.5);
}

//Ejercicio 8
function ejecutar8(){
  let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
  document.getElementById("res-8-str").innerHTML = "El array es: "+strings;
  let result = unique(strings);
  document.getElementById("res-8").innerHTML = "El resultado es: " +result;
}

function unique(arr){
  let result = [];
  for(let str of arr){
    if(!result.includes(str)){
      result.push(str);
    }
  }
  return result;
}
