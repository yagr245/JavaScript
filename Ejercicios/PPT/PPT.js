var piedra = document.getElementById('piedra');
var papel = document.getElementById('papel');
var tijera = document.getElementById('tijera');
var a = '', b = '';

piedra.onclick = function(){
    jugador.value =  this.value;
}

papel.onclick = function(){
    jugador.value =  this.value;
}

tijera.onclick = function(){
    jugador.value =  this.value;
}

function computadora(){
    var aleatorio = Math.floor(Math.random() * 3) //numero entre 0 y 2;
    var jugador = document.getElementById("jugador").value;
    var ganadas = document.getElementById("ganadas").value;
    var perdidas = document.getElementById("perdidas").value;
    var contador = document.getElementById("contador").value;
    
    if(aleatorio == 0){
        var computer = "Piedra";
    }
    else if (aleatorio == 1) {
        var computer = "Papel";
    }
    else{
        var computer = "Tijera";
    }

    console.log(computer);
    document.getElementById("computer").value = computer;
    var registropc = document.getElementById("computer").value;
    var registrojugador = document.getElementById("jugador").value;

    if(jugador == computer){
        ganadas = parseInt(ganadas) + 0;
        perdidas = parseInt(perdidas) + 0;
        contador = parseInt(contador) + 1; 
        a = a + registrojugador + ", "
        b = b + registropc + ", "    
    } 
    else if(jugador == "Piedra" && computer == "Tijera"){
        ganadas = parseInt(ganadas) + 1;
        contador = parseInt(contador) + 1;  
        a = a + registrojugador + ", "
        b = b + registropc + ", "  
    } 
    else if(jugador == "Piedra" && computer == "Papel"){
        perdidas = parseInt(perdidas) + 1;
        contador = parseInt(contador) + 1; 
        a = a + registrojugador + ", "
        b = b + registropc + ", "   
    } 
    else if(jugador == "Papel" && computer == "Piedra"){
        ganadas = parseInt(ganadas) + 1;
        contador = parseInt(contador) + 1; 
        a = a + registrojugador + ", "
        b = b + registropc + ", "  
    } 
    else if(jugador == "Papel" && computer == "Tijera"){
        perdidas = parseInt(perdidas) + 1;
        contador = parseInt(contador) + 1;
        a = a + registrojugador + ", "
        b = b + registropc + ", "    
    } 
    else if(jugador == "Tijera" && computer == "Papel"){
        ganadas = parseInt(ganadas) + 1;
        contador = parseInt(contador) + 1; 
        a = a + registrojugador + ", "
        b = b + registropc + ", "  
    } 
    else if(jugador == "Tijera" && computer == "Piedra"){
        perdidas = parseInt(perdidas) + 1;
        contador = parseInt(contador) + 1; 
        a = a + registrojugador + ", "
        b = b + registropc + ", " 
    } 

    console.log(contador);
    document.getElementById("ganadas").value = ganadas;
    document.getElementById("perdidas").value = perdidas;
    document.getElementById("contador").value = contador;
    document.getElementById("resultado1").value = a;
    document.getElementById("resultado2").value = b;

    if(contador == 5){
        document.getElementById("resultado1").value = "El jugador saco: " + a;
        document.getElementById("resultado2").value = "La PC saco: " + b;
        document.getElementById("contador").value = 0;
        ganadas = 0;
        perdidas = 0;
    } 

    if(document.getElementById("contador").value == 0){
        document.getElementById("ganadas").value = 0;
        document.getElementById("perdidas").value = 0;
    }
}