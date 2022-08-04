/*  
La funcion foco trata de abarcar mucho.
Las funciones deben tratar de cumplir un solo objetivo, los errores de sintaxis son
facilmente reconocibles. Debido a que la consola dara error, los problemas mas grandes
de un idioma de programacion realmente son los problemas logicos.

function apagado(){
    console.log("Se ejecuta foco")
    if(document.getElementById("Foco").innerHTML == "Encendido"){
        console.log("Se tiene que pasar a apagado")
        document.getElementById("Foco").innerHTML = "Apagado";
    }
    else if(document.getElementById("Foco").innerHTML == "Apagado"){
        console.log("Se tiene que pasar a encendido")
        document.getElementById("Foco").innerHTML = "Encendido";
    } 
}
*/



function encendido(){
    document.getElementById("Foco").innerHTML = "Encendido";
    document.getElementById("body").classList.remove("bg-gray-900");
    document.getElementById("body").classList.add("bg-white");
}

function apagado(){
    document.getElementById("Foco").innerHTML = "Apagado";
    document.getElementById("body").classList.remove("bg-white");
    document.getElementById("body").classList.add("bg-gray-900");
}
