
function calcular(){

let n1=parseFloat(document.getElementById("n1").value);
let n2=parseFloat(document.getElementById("n2").value);
let n3=parseFloat(document.getElementById("n3").value);

let promedio=(n1+n2+n3)/3;

if(isNaN(promedio)){
    document.getElementById("resultado").innerHTML="Ingrese todas las notas";
    return;
}

if(promedio>=7){

document.getElementById("resultado").innerHTML=
"Promedio: "+promedio.toFixed(2)+"<br>Estado: Aprobado";

}else{

document.getElementById("resultado").innerHTML=
"Promedio: "+promedio.toFixed(2)+"<br>Estado: Reprobado";

}

}