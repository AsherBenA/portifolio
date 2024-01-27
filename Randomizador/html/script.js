let personagem1 = {};
let personagem2 = {};

const racas = ['Humano', 'Elfo', 'Anão', 'Orc'];
const classes = ['Guerreiro', 'Mago', 'Ladrão', 'Clerigo'];
const habilidades = ['Força', 'Agilidade', 'Inteligência', 'Carisma'];

function gerarNome() {
    const prefixos = ['A', 'B', 'C', 'D'];
    const sufixos = ['ra', 'ma', 'na', 'la'];

    const prefixo = prefixos[Math.floor(Math.random() * prefixos.length)];
    const sufixo = sufixos[Math.floor(Math.random() * sufixos.length)];

    return `${prefixo}${sufixo}`;
}

function gerarPersonagem(containerId) {
    const nome = gerarNome();
    const raca = racas[Math.floor(Math.random() * racas.length)];
    const classe = classes[Math.floor(Math.random() * classes.length)];

    const forca = Math.floor(Math.random() * 10) + 1;
    const agilidade = Math.floor(Math.random() * 10) + 1;
    const inteligencia = Math.floor(Math.random() * 10) + 1;
    const carisma = Math.floor(Math.random() * 10) + 1;

    const habilidadePrincipal = habilidades[Math.floor(Math.random() * habilidades.length)];

    const personagem = { nome, raca, classe, forca, agilidade, inteligencia, carisma, habilidadePrincipal };

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
            return personagem.forca;
        case 'Agilidade':
            return personagem.agilidade;
        case 'Inteligência':
            return personagem.inteligencia;
        case 'Carisma':
            return personagem.carisma;
        default:
            return 0;
    }
}

function exibirPersonagem(personagem, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = `
        <h2>${personagem.nome}</h2>
        <p><strong>Raça:</strong> ${personagem.raca}</p>
        <p><strong>Classe:</strong> ${personagem.classe}</p>
        <p><strong>Força:</strong> ${personagem.forca}</p>
        <p><strong>Agilidade:</strong> ${personagem.agilidade}</p>
        <p><strong>Inteligência:</strong> ${personagem.inteligencia}</p>
        <p><strong>Carisma:</strong> ${personagem.carisma}</p>
        <p><strong>Habilidade Principal:</strong> ${personagem.habilidadePrincipal}</p>
    `;
}

function exibirResultado(resultado) {
    const resultadoContainer = document.getElementById('resultado-container');
    resultadoContainer.innerHTML = `<h3>${resultado}</h3>`;
}
