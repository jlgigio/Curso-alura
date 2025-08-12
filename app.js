let amigos = []
let ingresarNombre = document.getElementById("amigo")
let listaAmigos = document.getElementById("listaAmigos") 
let resultado = document.getElementById("resultado")

function agregarAmigo(){
    if (ingresarNombre.value==="") {
        alert("Porfavor, inserte un nombre")
    } else {
        amigos.push(ingresarNombre.value);
        ingresarNombre.value="";
        recorrerArray();
        console.log(amigos)
    }
}
function recorrerArray(){
    listaAmigos.innerHTML="";
    for(let i=0; i < amigos.length; i++){
        let nombresLista = document.createElement("li");
        nombresLista.textContent=amigos[i];
        listaAmigos.appendChild(nombresLista);

    }
    
}

function sortearAmigo(){
    if(amigos===""){
        alert("Ingresar nombres");
    }else{
        let posicionAleatoria = Math.floor(Math.random()*amigos.length)
        let ganador = amigos[posicionAleatoria]
        console.log(ganador)
        resultado.innerHTML= `El amigo secreto es ${ganador}`;
    }
}
