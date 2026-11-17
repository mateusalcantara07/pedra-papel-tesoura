const resultado = document.querySelector("#resultado");

const jogadas = ["pedra", "papel", "tesoura"];

function escolhaComputador() {
    const numero = Math.floor(Math.random() * 3);
    return jogadas[numero];
}

function jogar(jogador) {

    const computador = escolhaComputador();

    if (jogador === computador) {
        resultado.textContent =
            `Você escolheu ${jogador}. O computador escolheu ${computador}. Empate!`;
    }
    else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        resultado.textContent =
            `Você escolheu ${jogador}. O computador escolheu ${computador}. Você venceu! 🏆`;
    }
    else {
        resultado.textContent =
            `Você escolheu ${jogador}. O computador escolheu ${computador}. Você perdeu! 😢`;
    }
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
