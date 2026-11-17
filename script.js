const resultado = document.querySelector("#resultado");

document.querySelector("#pedra").addEventListener("click", function () {
    resultado.textContent = "Você escolheu ✊ Pedra!";
});

document.querySelector("#papel").addEventListener("click", function () {
    resultado.textContent = "Você escolheu ✋ Papel!";
});

document.querySelector("#tesoura").addEventListener("click", function () {
    resultado.textContent = "Você escolheu ✌️ Tesoura!";
});
