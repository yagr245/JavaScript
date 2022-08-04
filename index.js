/*Variables*/

/*Se queda guardada en la memoria ram y todo el archivo puede utilizarla*/
var variableglobal = 'Hola, desde un archivo con variables global';

/*Se utiliza y al finalizar su bloque de codigo, se elimina de la memoria ram. Solo se
puede utilizar en su bloque de codigo*/
let variablelocal = 'Hola, desde un archivo con variable local';

/*Las constantes funcionan como las variables locales, pero solo se les asigna un valor
una sola vez y no cambia*/
const PI = 3.14;

/*Asignar un valor a una variable*/
variableglobal = 'Hola Mundo';

/*Imprimiendo un mensaje*/
console.log(variableglobal);
//console.log('Hola, desde un archivo');

/*Tipos de datos*/
variableglobal = 'Contener un string'; //string o cadena de caracteres
console.log(variableglobal);

variableglobal = 5; //Tipo numero, int
console.log(variableglobal);

variableglobal = 5.15; //Tipo numero, float (decimal)
console.log(variableglobal);

variableglobal = ['Hola', 2, 2.15]; //Array, Vector, lista
console.log(variableglobal);

variableglobal = {nombre:"Yoel", apellido:"Gutiérrez", edad:27}; //objeto, esta conformado por propiedades y valores
console.log(variableglobal);

/*Funciones*/
/*Declaracion de una funcion*/
function obtenerNombreCompleto(){
    /*Imprimir con suma de strings*/
    console.log(variableglobal.nombre + " " + variableglobal.apellido);
    
}

/*Ejercucion de una funcion*/
obtenerNombreCompleto();

/*Funcion con parametros*/
function obtenerNombreCompletoConParametros(nombre,apellido){
    console.log(nombre + " " + apellido);
}

/*Ejecutar funcion con parametros*/
obtenerNombreCompletoConParametros(variableglobal.nombre, variableglobal.apellido);
obtenerNombreCompletoConParametros("Juan", "Rodriguez");

/*Funcion con retorno*/
function obtenerNombreCompletoConRetorno(nombre, apellido){
    let resultado = nombre + " " + apellido;
    return(resultado); /*al finalizar la ejecucion de una funcion, equivalga a algo, como una variable*/
}

/*Retorna algo, por ello puedo imprimirlo*/
console.log(obtenerNombreCompletoConRetorno("Brenda", "Prypchan"));

/*No retorna nada, por ella dara undefined, debido a que la funcion no tiene un 
valor asociado*/
console.log(obtenerNombreCompletoConParametros("Juan", "Rodriguez"));

/*Explicacion de variables locales y globales*/
function PruebaScope(nombre, apellido){
    if(true){
        /*Intercambiar entre var y let para probar*/
        var varPrueba = "Hola";
    }
    console.log(varPrueba);
}

PruebaScope();

/*Metodos de objetos*/
let carro = {color: "rojo", marca:"Chevrolet", adelante: function(){console.log("Me muevo adelante");}}

carro.adelante();

let persona = {
    nombre: "Yoel", 
    apellido: "Gutiérrez", 
    nombreCompleto: function(){console.log(this.nombre + " " + this.apellido)}
}

persona.nombreCompleto();

/*Metodos de string*/ 

let txt = "Pablito, piso un charquito";
console.log(txt.length); //longitud de un string
console.log(txt.slice(10,25)); //cortar un string (puede tener solo un parametro)
console.log(txt.replace("charquito","carrito")); //reemplazar una palabra en un string
console.log(txt.toUpperCase()); //coloca todo el string en mayusculas
console.log(txt.toLowerCase()); //coloca todo el string en minusculas

/* Condicionales (if)
< - menor
> - mayor
<= - menor o igual
>= - mayor o igual
== - igual
=== - exactamente igual
true - verdadero (siempre se cumple)
false - falso (nunca se cumple)
!= - diferente de
*/

let prueba = "20";
// no son exactamente iguales porque son de tipos de datos distintos
/* if(prueba === 20){

} */


let edad = "19"; /*Este string se evalua como numero, particularidad de JS, no en todos
los lenguajes de programacion se hace esto*/

if(edad > 18){
    console.log("Entras a la disco");
} else if (edad === 18){
    console.log("Pareciera que fueras mayor, entras");
} else {
    console.log("No entras");
}

/*Operadores Logicos*/
let personaje = {
    dia: "miercoles",
    hora: 5,
    dinero: 120,
}

/*
&& AND (Y) todas las condiciones se tienen que cumplir
|| OR (O) al menos un condicion se tiene que cumplir
! NOT (No) significa lo contrario
*/

if((personaje.dia === "jueves" || !(personaje.hora >=4))){ //el not modifica la condicion 
    console.log("Compras comida sin mucha importancia")
}

if((personaje.dia === "jueves" && personaje.hora >=4)){
    console.log("Compras comida sin mucha importancia")
}

if((personaje.dia === "jueves" || personaje.hora >=4)){
    console.log("Compras comida sin mucha importancia")
}

if((personaje.dia === "miercoles" && personaje.hora >=4) || personaje.dinero >=130){
    console.log("Compras comida sin mucha importancia")
}


/*Switch*/
let color = "verde"

switch(color) {
    case "azul":
        console.log("el color es azul");
        break;
    case "rojo":
        console.log("el color es rojo");
        break;
    default:
        //suma de strings
        console.log("el color es " + color);
        break;
}

/*Loops*/

let lista = ["diablos", "pamplinas", "rayos", "centellas", "chispitas"];
let comentarios = ["diablos, no me gusta esto", "esta bien", "rayos, me cuesta aprender", 
"increible curso", "chispitas"];
console.log(lista);

//Ciclo FOR
for(let i = 0; i < lista.length; i++){
    comentarios[i] =  comentarios[i].replace(lista[i],"*****")
    console.log(comentarios);
}


/*Ciclo FOR IN (unicamente para objetos)*/
for(let elemento in personaje){
    console.log(personaje[elemento]);
}

/*Ciclo FOR OF (unicamente para arrays)*/
for(let elemento of comentarios){
    console.log(elemento);
}

/*Loop While (el mas simple de todos)*/
let j = 0;
while(j < 5) {
    console.log("hola");
    j++;
}

/*
Forman parte de los operadores aritmeticos
j++ es igual a decir j = j + 1
j-- es igual a decir j = j - 1
*/

/*Lo profesional de los loop y lo loco*/
/*Trabajo con dos vectores*/

lista = ["diablos", "pamplinas", "rayos", "centellas", "chispitas"];
comentarios = ["diablos, no me gusta esto", "esta bien", "rayos, me cuesta aprender", 
"increible curso", "chispitas"];

/*Reemplazando, ahora si. De forma correcta. Todas esas malas palabras en nuestro arrays
de comentarios*/
for(let i = 0; i < comentarios.length; i++){
    //Este FOR se realiza por cada comentario
    //console.log(comentarios[i])
    for(let j = 0; j < lista.length; j++){
        /*Este FOR se realiza por cada palabra
        Lo que hacemos aqui es ejecutar un for por cada comentario y ejecutar este for
        interior por cada mala palabra, evaluando si en un comentario existe alguna
        DE TODAS las malas palabras en nuestra lista
        */
        comentarios[i] =  comentarios[i].replace(lista[i],"*****");
        //console.log(lista[j])
    }
}

console.log(comentarios);

//Array bidimensional
//Matrices (Eso son los arrays de dos o mas dimensiones)
compras = [["carne molida", "carne para esmechar", "bisteck"],
["zanahoria", "cebolla", "pimenton"], ["mozarella", "jamon", "queso semi-duro"]];

console.log(compras[0][0]);

for(let lista of compras){
    /*Evaluar si cada elemento de compras es un array*/
    if(Array.isArray(lista)){
        /*Si el elemento que viene en la variable lista es un array, ejercuta el otro for*/
        for(let elemento of lista){
            /*imprimimos cada elemento que se encuentre en las listas de compras*/
            console.log(elemento);
        }
    }
}

/*Expresiones regulares*/
/*Secuencia de carácteres (strings) que pueden tener o seguir un patrón*/
/*Las expresiones regulares estan conformadas por un patron y un modificador*/
let texto = "Esto, es una prueba, Hola mundo";
/*El metodo search me buscara donde se encuentra ubicado lo que yo quiera en el string que evaluo*/
let regex = texto.search(/hola mundo/i);
/*hola mundo es mi patron (es lo que va a buscar, y la letra "i" es un modificador, que se
utiliza para ignorar minusculas o mayusculas (No case sensitive))*/
console.log(regex)
/*Las expresiones regulares sirven para evaluar formatos, contraseñas, correos, telefonos,
formularios y mucho mas*/

let conciertos = ["Queen", "Metalica", "Chayanne", "Los mesoneros"]

/*Break dentro de un ciclo*/
for(concierto of conciertos){
    console.log(concierto);
    if(concierto === "Chayanne"){
        break;
    } else{
        console.log(concierto);
    }
}


/*Arrow function o funciones anonimas*/
/*
No es necesario que esta funcion tengo nombre debido a que la llamare por su variable
let hola = function hola(){
    console.log("Hola")
}
*/
/*
Funcion anonima, debido a que la funcion no tiene nombre. Se llama a traves de la variable
let hola = function(){
    console.log("Hola");
}

hola();
*/

/*Las arrow function es una forma simplificada de crear una funcion sin nombre*/
let hola = () =>{
    console.log("Hola")
}

/*CLASES*/
//Son basicamente un molde de objetos

class Personaje{
    constructor(nombre, vida, dano, skin){
        this.nombre = nombre;
        this.vida = vida;
        this.dano = dano;
        this.skin = skin;
    }

    sayName(){
        console.log("Hola, soy " + this.nombre);
    }

    attack(){
        console.log("Te ataco y te quito " + this.dano);
    }
}

let personaje1 = new Personaje("Yoel", 100, 25, 5);
let personaje2 = new Personaje("Alberto", 65, 15, 10);
let personaje3 = new Personaje("Juan", 120, 25, 3);
let personaje4 = new Personaje("Brenda", 80, 35, 15);
personaje1.sayName();
personaje2.sayName();
personaje3.attack();
personaje4.attack();

class Usuario{
    constructor(nombre, apellido, bday, email, contrasena, redesSociales){
        this.nombre = nombre;
        this.apellido = apellido;
        this.bday = bday;
        this.email = email;
        this.contrasena = contrasena;
        this.redesSociales = redesSociales;
    }

    fullName(){
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido);
    }

    socialMedia(){
        for(let socialMedia in this.redesSociales){
            console.log(socialMedia+":"+this.redesSociales[socialMedia]);
        }
    }

    hablar(mensaje){
        console.log(mensaje);
        return(mensaje);
    }
}

let usuario = new Usuario("Yoel", "Gutiérrez", "11-03-1995", "hola@hola.com", "123456789", {instagram: "@yoel_agr", facebook: "Yoel Gutierrez"});
usuario.fullName();
usuario.hablar("Esta es una funcion con parametros");
usuario.socialMedia();

/*Metodos de Arrays*/
let peliculas = ["Avengers 1", "Avengers 2", "Avengers 3"];
document.getElementById("html").innerHTML = usuario.redesSociales.instagram;
document.getElementById("html").innerHTML = usuario.hablar("Esto es un mensaje de retorno");
document.getElementById("html").innerHTML = peliculas.toString();
peliculas.pop(); //Elimina el ultimo elmento del array
peliculas.push("Iron Man"); //Agrega un nuevo elemento al array (de ultimo)
peliculas.shift(); //Elimina el primer elemento y mueve todos los elementos
//antes para que la primera posicion no quede vacia
peliculas.unshift("Hulk"); //Agrega un elemento al array de primero
peliculas.splice(1,0,"capitan america", "thor"); //sirve para agregar elementos al array en una
//posicion determinada, indicar si queremos eliminar elementos, y decir cuales elementos 
//agregar (se utiliza tanto para eliminar como para agregar elementos)
peliculas.slice(0,2); //cortar un array
console.log(peliculas.find((elemento) => elemento === "Avengers 2")); /*el metodo find nos 
devuelve el primer elmemento que consiga basado en una condicion, el parametro de esta funcion
tiene que ser otra funcion*/
console.log(peliculas.includes("Avengers 2"));
/*El metodo includes devuelve true o false dependiendo si el elemento que envio como parametro
 existe dentro del array*/
 console.log(peliculas.indexOf("Avengers 2"));
/*El metodo indexOf busca un elemento dentro de un array y nos devuelve su posicion, la posicion
sera -1 en caso de que ese elemento no exista dentro del array*/
document.getElementById("html").innerHTML = peliculas;


/*ASINCRONISMO*/
/*El asincronismo funciona para realizar cosas en paralelo en un lenguaje de programacion*/
/*Los callbacks*/