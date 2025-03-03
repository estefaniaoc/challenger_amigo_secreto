let amigos = [];  

function agregarAmigo() {

    let nombre = document.getElementById("amigo").value.trim();


    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
       
        amigos.push(nombre);

   
        actualizarListaAmigos();


        document.getElementById("amigo").value = "";
    }
}

function actualizarListaAmigos() {

    let lista = document.getElementById("listaAmigos");


    lista.innerHTML = "";


    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }

    let index = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[index];


    mostrarResultado(amigoSecreto);
}

function mostrarResultado(amigoSecreto) {
    let listaResultados = document.getElementById("resultado");


    listaResultados.innerHTML = "";


    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSecreto}`;
    listaResultados.appendChild(li);
}
