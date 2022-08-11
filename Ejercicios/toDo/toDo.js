var lista = [];
var a = '', b = '', c = '';

function agregar(){
    a = document.getElementById("tarea").value;
    b = "✔";
    c = "❌";

    listaf(a, b, c);
}

function listaf(a, b, c){
    document.getElementById("lista").innerHTML = "";
    lista.unshift(a, b, c);   

    for(let i = 0; i < lista.length; i++){
        let node = document.createElement("div");
        let contenido1 = document.createElement("p");
        let contenido2 = document.createElement("button");
        let contenido3 = document.createElement("button");
        
        if(i == 0){
            contenido1.innerHTML = lista[i];
            console.log(contenido1)
        } else if(i == 1){
            contenido2.innerHTML = lista[i];
            console.log(contenido2)
        } else {
            contenido3.innerHTML = lista[i];
            console.log(contenido3)
        }
        
        node.appendChild(contenido1);
        node.appendChild(contenido2);
        node.appendChild(contenido3);
        document.getElementById("lista").appendChild(node);
    }


//     for(const elemento of lista){
//         let node = document.createElement("div");
//         let contenido1 = document.createElement("p");
//         let contenido2 = document.createElement("button");
//         let contenido3 = document.createElement("button");
//         contenido1.innerHTML = elemento[0];
//         contenido2.innerHTML = elemento[1];
//         contenido3.innerHTML = elemento[2];
//         let elemento_completo = contenido1 + contenido2 + contenido3;
//         node.appendChild(elemento_completo);
//         document.getElementById("lista").appendChild(node);
//     }
}