function abrirCarta() {
    document.getElementById('cartaAberta').style.display = 'flex';
    document.querySelector('.carta-fechada').style.display = 'none';
}

function fecharCarta() {
    document.getElementById('cartaAberta').style.display = 'none';
    document.querySelector('.carta-fechada').style.display = 'flex';
}

function irParaPresente() {
    window.location.href = 'presente.html';
}
function voltarParaCarta() {
    window.location.href = 'index.html';
}

// Adicione uma função para simular o carregamento
function simularCarregamento() {
    const barra = document.getElementById('loading-bar');
    const mensagem = document.getElementById('loading-message');

    let progresso = 0;
    const intervalo = setInterval(function () {
        progresso += 10;
        barra.style.width = progresso + '%';
        mensagem.textContent = `Carregando: ${progresso}%`;

        if (progresso === 100) {
            clearInterval(intervalo);
            document.getElementById('abrir-presente-btn').classList.remove('hidden');
            mensagem.textContent = 'Carregamento concluído!';
        }
    }, 500); // Ajuste o intervalo conforme necessário
}

// Adicione a chamada à função quando a página carrega
document.addEventListener('DOMContentLoaded', function () {
    simularCarregamento();
});


function abrirPresente() {
    // Adicione aqui as ações que você deseja executar ao abrir o presente
    window.location.href = 'mensagem.html';
}

