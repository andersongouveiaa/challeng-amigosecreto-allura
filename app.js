//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function adicionarAmigo(){
    let campo = document.getElementById('amigo');
    let nomeAmigo = campo.value;

    if ( nomeAmigo == ''){
        alert("Por favor, insira um nome.")
        return;
    }
    amigos.push(nomeAmigo);
    console.log(amigos);
    atualizarLista();
    campo.value = '';
}


function atualizarLista(){
    let listaAtualizada = document.getElementById('listaAmigos');
    listaAtualizada.innerHTML = '';

    for (nome of amigos){
        listaAtualizada.innerHTML += `<li>${nome}</li>`;
    }
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert('Adicione pelo menos um nome para realizar o sorteio!')
        return
    }
    let totalDeAmigos = amigos.length;
    let sorteio = Math.floor(Math.random() * totalDeAmigos);
    let amigoSorteado = amigos[sorteio];

    let resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.innerHTML = `<p>O amigo sorteado foi: <strong>${amigoSorteado}<strong><p>`;
    document.querySelector('.button-draw').disabled = true;
    document.querySelector('.button-add').disabled = true;

}
