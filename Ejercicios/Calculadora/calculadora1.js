var numero = '';

function calculadora(dato){
    numero += dato;
    document.getElementById("operacion").value = numero;
}

function igual(){
    document.getElementById("operacion").value = eval(numero);
}

function reset(){
    numero = '';
    document.getElementById("operacion").value = numero;
}