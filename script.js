const resultado = document.querySelector("#resultado");
const placar = document.querySelector("#placar");

const jogadorMao = document.querySelector("#jogador-mao");
const cpuMao = document.querySelector("#cpu-mao");

let vitorias = Number(localStorage.getItem("vitorias")) || 0;
let derrotas = Number(localStorage.getItem("derrotas")) || 0;
let empates = Number(localStorage.getItem("empates")) || 0;

const jogadas = ["pedra", "papel", "tesoura"];

function atualizarPlacar() {

    placar.textContent =
        `Vitórias: ${vitorias} | Derrotas: ${derrotas} | Empates: ${empates}`;

    localStorage.setItem("vitorias", vitorias);
    localStorage.setItem("derrotas", derrotas);
    localStorage.setItem("empates", empates);
}

function escolhaComputador() {

    const numero = Math.floor(Math.random() * 3);

    return jogadas[numero];
}

function emoji(jogada){

    if(jogada === "pedra") return "✊";

    if(jogada === "papel") return "✋";

    return "✌️";
}

function jogar(jogador){

    const computador = escolhaComputador();

    jogadorMao.textContent = "✊";
    cpuMao.textContent = "✊";

    jogadorMao.classList.add("animar");
    cpuMao.classList.add("animar");

    resultado.textContent = "⌛ Jokenpô...";

    document.querySelector("#pedra").disabled = true;
    document.querySelector("#papel").disabled = true;
    document.querySelector("#tesoura").disabled = true;

    setTimeout(() => {

        jogadorMao.classList.remove("animar");
        cpuMao.classList.remove("animar");

        jogadorMao.textContent = emoji(jogador);
        cpuMao.textContent = emoji(computador);

        if(jogador === computador){

            empates++;

            resultado.textContent =
                "🤝 EMPATE!";
        }

        else if(

            (jogador === "pedra" && computador === "tesoura") ||

            (jogador === "papel" && computador === "pedra") ||

            (jogador === "tesoura" && computador === "papel")

        ){

            vitorias++;

            resultado.textContent =
                "🏆 VOCÊ VENCEU!";
        }

        else{

            derrotas++;

            resultado.textContent =
                "💀 VOCÊ PERDEU!";
        }

        atualizarPlacar();

        document.querySelector("#pedra").disabled = false;
        document.querySelector("#papel").disabled = false;
        document.querySelector("#tesoura").disabled = false;

    }, 2000);
}

document.querySelector("#pedra")
.addEventListener("click", () => jogar("pedra"));

document.querySelector("#papel")
.addEventListener("click", () => jogar("papel"));

document.querySelector("#tesoura")
.addEventListener("click", () => jogar("tesoura"));

document.querySelector("#zerar")
.addEventListener("click", () => {

    vitorias = 0;
    derrotas = 0;
    empates = 0;

    atualizarPlacar();

    resultado.textContent =
        "🔄 Placar reiniciado!";

    jogadorMao.textContent = "❔";
    cpuMao.textContent = "❔";
});

atualizarPlacar();
