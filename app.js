let amigos = [];

function adicionarAmigo() {
   
    let input = document.getElementById('amigo');
    let nome = input.value.trim();
    
    if (nome === '') {
        
        alert('Por favor, insira um nome.');
        return; 
    }
    amigos.push(nome);
    console.log(amigos); 
    atualizarListaAmigos();
    
    input.value = '';
    
}

function atualizarListaAmigos() {

    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {

        const li = document.createElement('li');

        li.textContent = amigos[i];

        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert('Não há amigos para sortear. Adicione alguns amigos primeiro!');
        return;
    }
    
    if (amigos.length <= 3) {
        alert('É necessário ter pelo menos 4 amigos para realizar o sorteio!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];
    console.log('Amigo sorteado:', amigoSorteado);

    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>! 🎉</li>`;
}                                                                    