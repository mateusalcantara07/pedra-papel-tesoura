const resultado = document.querySelector("#resultado");
const placar = document.querySelector("#placar");

let vitorias = 0;
let derrotas = 0;
let empates = 0;

const jogadas = ["pedra", "papel", "tesoura"];

function escolhaComputador() {
    const numero = Math.floor(Math.random() * 3);
    return jogadas[numero];
}

function atualizarPlacar() {
    placar.textContent =
        `Vitórias: ${vitorias} | Derrotas: ${derrotas} | Empates: ${empates}`;
}

function jogar(jogador) {

    const computador = escolhaComputador();

    if (jogador === computador) {

        empates++;

        resultado.textContent =
            `Você escolheu ${jogador}. O computador escolheu ${computador}. Empate!`;

    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {

        vitorias++;

        resultado.textContent =
            `Você escolheu ${jogador}. O computador escolheu ${computador}. Você venceu! 🏆`;

    } else {

        derrotas++;

        resultado.textContent =
            `Você escolheu ${jogador}. O computador escolheu ${computador}. Você perdeu! 😢`;
    }

    atualizarPlacar();
}

document.querySelector("#pedra")
.addEventListener("click", function () {
    jogar("pedra");
});

document.querySelector("#papel")
.addEventListener("click", function () {
    jogar("papel");
});

document.querySelector("#tesoura")
.addEventListener("click", function () {
    jogar("tesoura");
});
