// Arrays para armazenar os amigos e controlar os sorteados
let amigos = [];
let amigosSorteados = [];
let sorteioAtivo = false;

// Função para adicionar amigos
function adicionarAmigo() {

    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (nome === '') {

        alert('Por favor, insira um nome.');
        input.focus(); // Mantém o foco no campo mesmo em caso de erro
        return;
    }

    amigos.push(nome);
    
    // Reiniciar o sorteio se um novo amigo for adicionado durante um sorteio
    if (sorteioAtivo) {
        reiniciarSorteio();
    }
    
    atualizarListaAmigos();

    input.value = '';
    input.focus(); // MUDANÇA 1: Mantém o foco no campo de entrada
}

// Função para atualizar a lista visual
function atualizarListaAmigos() {
    
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Função principal para sortear
function sortearAmigo() {
    // VALIDAÇÃO DA QUANTIDADE MÍNIMA DE AMIGOS
    if (amigos.length < 4) {
        alert('É necessário ter pelo menos 4 amigos para realizar o sorteio!');
        document.getElementById('amigo').focus(); // Foca no campo após alerta
        return;
    }
    
    if (amigos.length === 0) {
        alert('Não há amigos para sortear. Adicione alguns amigos primeiro!');
        document.getElementById('amigo').focus(); // Foca no campo após alerta
        return;
    }
    
    // Verificar se todos já foram sorteados
    if (amigosSorteados.length >= amigos.length) {
        const reiniciar = confirm('Todos os amigos já foram sorteados! Deseja reiniciar o jogo?');
        if (reiniciar) {
            reiniciarJogoCompleto(); // MUDANÇA 2: Limpa a lista de amigos
        } else {
            document.getElementById('amigo').focus(); // Foca no campo se não reiniciar
        }
        return;
    }
    
    // Sortear um amigo que ainda não foi sorteado
    let amigoSorteado;
    do {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSorteado));
    
    // Adicionar à lista de sorteados
    amigosSorteados.push(amigoSorteado);
    sorteioAtivo = true;
    
    // Exibir resultado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `
        <li>🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>! 🎉</li>
        <li>Sorteados: ${amigosSorteados.length} de ${amigos.length}</li>
    `;
    
    // Verificar se todos foram sorteados
    if (amigosSorteados.length === amigos.length) {
        setTimeout(() => {
            elementoResultado.innerHTML += '<li>🎊 Todos os amigos foram sorteados! 🎊</li>';
            // Focar no campo após término do sorteio
            setTimeout(() => {
                document.getElementById('amigo').focus();
            }, 100);
        }, 1000);
    }
}

// Função para reiniciar apenas o sorteio (mantém a lista de amigos)
function reiniciarSorteio() {
    amigosSorteados = [];
    sorteioAtivo = false;
    document.getElementById('resultado').innerHTML = '';
}

// MUDANÇA 2: Nova função para reiniciar o jogo completamente (limpa a lista de amigos)
function reiniciarJogoCompleto() {
    amigos = [];
    amigosSorteados = [];
    sorteioAtivo = false;
    document.getElementById('resultado').innerHTML = '';
    atualizarListaAmigos(); // Atualiza a lista visual para ficar vazia
    document.getElementById('amigo').focus(); // Foca no campo de entrada
}