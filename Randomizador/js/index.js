let personagem1 = {};
let personagem2 = {};

function gerarPersonagem(containerId) {
    const nome = gerarNome();
    const raca = racas[Math.floor(Math.random() * racas.length)];
    const classe = classes[Math.floor(Math.random() * classes.length)];
    const habilidadePrincipal = habilidades[Math.floor(Math.random() * habilidades.length)];

    const personagem = { nome, raca, classe, habilidadePrincipal };

    if (containerId === 'personagem1') {
        personagem1 = personagem;
        exibirPersonagem(personagem, 'personagem1-container');
    } else if (containerId === 'personagem2') {
        personagem2 = personagem;
        exibirPersonagem(personagem, 'personagem2-container');
    }
}

function compararPersonagens() {
    const habilidadeEscolhida = prompt('Digite a habilidade para comparação (Força, Agilidade, Inteligência, Carisma):');

    if (!habilidades.includes(habilidadeEscolhida)) {
        alert('Habilidade inválida. Tente novamente.');
        return;
    }

    const valorPersonagem1 = obterValorHabilidade(personagem1, habilidadeEscolhida);
    const valorPersonagem2 = obterValorHabilidade(personagem2, habilidadeEscolhida);

    let resultado = 'Empate!';

    if (valorPersonagem1 > valorPersonagem2) {
        resultado = `${personagem1.nome} venceu!`;
    } else if (valorPersonagem1 < valorPersonagem2) {
        resultado = `${personagem2.nome} venceu!`;
    }

    exibirResultado(resultado);
}

function obterValorHabilidade(personagem, habilidade) {
    switch (habilidade) {
        case 'Força':
            return 5; 
        case 'Agilidade':
            return 3;
        case 'Inteligência':
            return 7;
        case 'Carisma':
            return 4;
        default:
            return 0;
    }
}

function exibirResultado(resultado) {
    const resultadoContainer = document.getElementById('resultado-container');
    resultadoContainer.innerHTML = `<h3>${resultado}</h3>`;
}
