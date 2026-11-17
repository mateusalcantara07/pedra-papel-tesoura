const resultado = document.querySelector("#resultado");

const jogadas = ["pedra", "papel", "tesoura"];

function escolhaComputador() {
    const numero = Math.floor(Math.random() * 3);
    return jogadas[numero];
}

document.querySelector("#pedra").addEventListener("click", function () {
    const computador = escolhaComputador();

    resultado.textContent =
        "Você escolheu Pedra e o computador escolheu " + computador;
});

document.querySelector("#papel").addEventListener("click", function () {
    const computador = escolhaComputador();

    resultado.textContent =
        "Você escolheu Papel e o computador escolheu " + computador;
});

document.querySelector("#tesoura").addEventListener("click", function () {
    const computador = escolhaComputador();

    resultado.textContent =
        "Você escolheu Tesoura e o computador escolheu " + computador;
});
