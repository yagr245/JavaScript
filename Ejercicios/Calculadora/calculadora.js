var numero1 = 0, numero2 = 0, s = 0, r = 0, m = 0, d = 0;

var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var cuatro = document.getElementById('cuatro');
var cinco = document.getElementById('cinco');
var seis = document.getElementById('seis');
var siete = document.getElementById('siete');
var ocho = document.getElementById('ocho');
var nueve = document.getElementById('nueve');
var cero = document.getElementById('cero');

var varios = document.getElementById('operacion');

function varios(){

    document.getElementById("operacion").value = numero1 + numero2;

}

uno.onclick = function(){
    operacion.value +=  this.value;
}

dos.onclick = function(){
    operacion.value +=  this.value;
}

tres.onclick = function(){
    operacion.value +=  this.value;
}

cuatro.onclick = function(){
    operacion.value +=  this.value;
}

cinco.onclick = function(){
    operacion.value +=  this.value;
}

seis.onclick = function(){
    operacion.value +=  this.value;
}

siete.onclick = function(){
    operacion.value +=  this.value;
}

ocho.onclick = function(){
    operacion.value +=  this.value;
}

nueve.onclick = function(){
    operacion.value +=  this.value;
}

cero.onclick = function(){
    operacion.value +=  this.value;
}

function suma(){
    numero1 = document.getElementById("operacion").value;
    s = 1;
    console.log(numero1);
    console.log(numero2); 
    document.getElementById("operacion").placeholder = "0";   
}

function resta(){
    numero1 = document.getElementById("operacion").value;
    r = 1;
    console.log(numero1);
    console.log(numero2);    
}

function multiplicacion(){
    numero1 = document.getElementById("operacion").value;
    m = 1;
    console.log(numero1); 
    console.log(numero2);   
}

function division(){
    numero1 = document.getElementById("operacion").value;
    d = 1;
    console.log(numero1);  
    console.log(numero2);
}

function igual(){
    var numero2 = document.getElementById("operacion").value;

    if(s == 1){
        var resultado = parseInt(numero1) + parseInt(numero2);
        s = 0;
    } else if (r == 1){
        var resultado = parseInt(numero1) - parseInt(numero2);
        r = 0;
    } else if (m == 1){
        var resultado = parseInt(numero1) * parseInt(numero2);
        m = 0;
    } else {
        var resultado = parseInt(numero1) / parseInt(numero2);
        d = 0;
    }

    console.log(resultado)
    document.getElementById("operacion").value = resultado;
}

function reset(){
    document.getElementById("operacion").value = 0;
    numero1 = 0;
    numero2 = 0;
    s = 0; 
    r = 0; 
    m = 0; 
    d = 0;
}




