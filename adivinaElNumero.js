var aleatorio = Math.floor(Math.random() * 101) //Genera numero aleatorio entre 0-100
console.log(aleatorio);

function adivinar(){
    let numero = document.getElementById("adivinar").value;
    if(numero == aleatorio){
        document.getElementById("numero").innerHTML = "Adivinaste";
    }
    else if (numero < aleatorio) {
        document.getElementById("numero").innerHTML = "Intente con un numero mayor";
    }
    else{
        document.getElementById("numero").innerHTML = "Intente con un numero menor";
    }
}