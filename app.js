//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Passo 1: Criar array para armazenar os nomes
let amigos = [];

// Passo 2: Implementar função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let input = document.getElementById('amigo');
    let nome = input.value.trim(); // Remove espaços extras

    // Validar se o campo está vazio
    if (nome === '') {
        // Exibir alerta se estiver vazio
        alert('Por favor, insira um nome.');
        return; // Interrompe a execução da função
    }

    // Adicionar nome válido ao array
    amigos.push(nome);
    console.log(amigos); // Para verificação no console

    // Atualizar a lista visual de amigos
    atualizarListaAmigos();

    // Limpar o campo de entrada
    input.value = '';
}

// Função para atualizar a lista visual de amigos
function atualizarListaAmigos() {
    // Obter o elemento da lista usando document.getElementById
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpar a lista existente usando innerHTML
    listaAmigos.innerHTML = "";
    
    // Percorrer o array amigos usando um loop for
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento de lista
        const li = document.createElement('li');
        
        // Definir o texto do elemento como o nome do amigo
        li.textContent = amigos[i];
        
        // Adicionar o elemento à lista
        listaAmigos.appendChild(li);
    }
}