//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Passo 1: Criar array para armazenar os nomes
let amigos = [];

// Passo 2: Implementar função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let input = document.getElementById('amigoInput');
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

    // Limpar o campo de entrada
    input.value = '';
}