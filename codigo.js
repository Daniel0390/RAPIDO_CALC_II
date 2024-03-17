



let btntrad =document.getElementById("btn_trad");  
let btnp92  =document.getElementById("btn_p92");
let btnp65  =document.getElementById("btn_p65");
let btnalum =document.getElementById("btn_alum");

let cont1 =  document.getElementById("cont1");

btntrad.onclick = cambio1;
btnp92.onclick = cambio2;
btnp65.onclick = cambio3;
btnalum.onclick= cambio4;

function cambio1 (){
   cont1.style.backgroundColor='rgb(125, 118, 118)';
}

function cambio2 (){
    cont1.style.backgroundColor='rgb(181, 157, 128)';
 }

 function cambio3 (){
    cont1.style.backgroundColor='rgb(190, 129, 129)';
 }

 function cambio4 (){
    cont1.style.backgroundColor='rgb(12, 67, 12)';
 }

const pantalla = document.querySelector("#campo");
const botones =  document.querySelectorAll("#btn");
const botones2 = document.querySelectorAll("btn2");

       

     botones.forEach(boton => {
         boton.addEventListener("click" , ()=>{
            

            pantalla.value+=boton.textContent;
           
         })
      })

    
 
