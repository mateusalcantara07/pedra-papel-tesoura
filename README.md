# Jogo — Pedra, Papel e Tesoura

**Disciplina:** Linguagem de Programação para Web I (JavaScript) 
**Curso:** ADS
**Professora:** Maristela  
**Formato:** Markdown  
**Aluno:** Mateus André Oliveira de Alcantara

## Breve descrição

O projeto consiste no desenvolvimento de um jogo de Pedra, Papel e Tesoura, no qual o usuário disputa contra o computador. A aplicação permite escolher uma jogada, visualizar o resultado da partida e acompanhar o placar de vitórias, derrotas e empates.

O sistema foi desenvolvido utilizando HTML, CSS e JavaScript, com armazenamento local dos resultados por meio do `localStorage`.

## 1. Descrição do projeto

O objetivo é desenvolver uma aplicação web interativa, aplicando conceitos de programação e desenvolvimento front-end.

O jogo deve permitir que o usuário:

- Escolha entre pedra, papel e tesoura.
- Dispute contra uma escolha aleatória do computador.
- Visualize as jogadas e o resultado da partida.
- Acompanhe o placar atualizado.
- Reinicie o placar quando desejar.

## 2. Atores do sistema

**Jogador:** realiza as escolhas, acompanha os resultados e pode zerar o placar.

**Computador:** realiza automaticamente uma escolha aleatória entre pedra, papel e tesoura.

**Sistema:** processa as jogadas, aplica as regras, apresenta os resultados e atualiza o placar.

## 3. Caso de uso — Jogar uma partida

### 3.1 Pré-condições

- O usuário deve acessar a página do jogo.
- Os arquivos HTML, CSS e JavaScript devem estar carregados.
- Os botões de escolha devem estar disponíveis.

### 3.2 Pós-condições

- As jogadas são apresentadas na tela.
- O resultado da partida é identificado.
- O placar é atualizado e armazenado no navegador.

### 3.3 Fluxo principal

1. O usuário acessa o jogo.
2. O sistema apresenta os botões de escolha e o placar.
3. O usuário seleciona pedra, papel ou tesoura.
4. O computador realiza uma escolha aleatória.
5. O sistema inicia uma animação e bloqueia temporariamente os botões.
6. Após dois segundos, as jogadas são reveladas.
7. O sistema compara as escolhas e identifica o resultado.
8. O placar é atualizado e salvo no `localStorage`.
9. Os botões são liberados para uma nova partida.

### 3.4 Fluxos alternativos

**A1 — Vitória:** quando o jogador escolhe a opção que vence a jogada do computador, o contador de vitórias é incrementado.

**A2 — Derrota:** quando o computador escolhe a opção vencedora, o contador de derrotas é incrementado.

**A3 — Empate:** quando os dois participantes escolhem a mesma opção, o contador de empates é incrementado.

**A4 — Zerar placar:** ao clicar no botão correspondente, os três contadores são redefinidos para zero e os valores armazenados são atualizados.

## 4. Regras de negócio

- **RN-01:** o jogo deve disponibilizar três opções: pedra, papel e tesoura.
- **RN-02:** o computador deve escolher aleatoriamente uma das opções.
- **RN-03:** pedra vence tesoura, tesoura vence papel e papel vence pedra.
- **RN-04:** escolhas iguais resultam em empate.
- **RN-05:** cada partida concluída deve atualizar apenas o contador correspondente ao resultado.
- **RN-06:** o placar deve ser atualizado após cada partida.
- **RN-07:** os resultados devem ser armazenados no `localStorage`.
- **RN-08:** ao carregar a página, o sistema deve recuperar os resultados armazenados ou iniciar os contadores em zero.
- **RN-09:** os botões de escolha devem ser desativados durante a animação da partida.
- **RN-10:** o botão Zerar Placar deve redefinir os três contadores.

## 5. Requisitos não funcionais

- **RNF-01 — Usabilidade:** a interface deve ser simples e intuitiva.
- **RNF-02 — Responsividade:** a página deve se adaptar a diferentes tamanhos de tela.
- **RNF-03 — Desempenho:** as funcionalidades devem ser executadas diretamente no navegador, sem depender de serviços externos.
- **RNF-04 — Organização:** HTML, CSS e JavaScript devem permanecer separados em arquivos próprios.
- **RNF-05 — Compatibilidade:** a aplicação deve funcionar em navegadores modernos que ofereçam suporte às tecnologias utilizadas.

## 6. Descrição das telas

### 6.1 Tela principal

Apresenta o título do jogo, os botões Pedra, Papel e Tesoura, a área de disputa entre jogador e computador, o resultado da partida, o placar e o botão Zerar Placar.

### 6.2 Animação da partida

Durante a disputa, as mãos dos participantes apresentam uma animação e os botões de escolha ficam temporariamente desativados.

### 6.3 Resultado

Após a animação, o sistema apresenta as jogadas dos participantes, informa se houve vitória, derrota ou empate e atualiza o placar.

## 7. Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilização e animações |
| JavaScript ES6+ | Regras e interatividade do jogo |
| LocalStorage | Armazenamento do placar no navegador |

## 8. Arquitetura e estrutura de arquivos

O projeto utiliza uma organização simples, separando a estrutura da página, a aparência visual e a lógica de funcionamento.

**Estrutura de arquivos:**

```text
pedra-papel-tesoura/
│
├── index.html
├── estilo.css
├── script.js
└── README.md
```

**Responsabilidade de cada arquivo:**

- `index.html`: estrutura e elementos da página.
- `estilo.css`: cores, layout, efeitos e animações.
- `script.js`: regras do jogo, interações e atualização do placar.
- `README.md`: informações gerais sobre o projeto.

O funcionamento ocorre da seguinte maneira: o HTML apresenta a interface, o CSS define sua aparência e o JavaScript controla as jogadas, os resultados e o armazenamento do placar.

## 9. Decisões arquiteturais (ADRs)

**ADR-001 — Separação dos arquivos**

Foi escolhida a separação entre HTML, CSS e JavaScript para facilitar a organização, manutenção e compreensão do código.

**ADR-002 — Utilização do JavaScript**

O JavaScript foi escolhido para implementar as regras do jogo, gerar escolhas aleatórias, manipular os elementos da página e controlar as interações.

**ADR-003 — Utilização do LocalStorage**

O `localStorage` foi escolhido para armazenar o placar diretamente no navegador, permitindo recuperar os resultados mesmo após atualizar a página.

**ADR-004 — Animações CSS**

Foram utilizadas animações CSS em conjunto com `setTimeout()` para tornar a disputa mais dinâmica e controlar o momento de apresentação do resultado.

## 10. Possíveis melhorias futuras

Como melhorias futuras, o projeto poderá receber um histórico de partidas, níveis de dificuldade, efeitos sonoros e novas modalidades, como melhor de três ou melhor de cinco rodadas.

## 11. Considerações finais

O desenvolvimento do jogo Pedra, Papel e Tesoura permitiu aplicar conhecimentos de HTML, CSS e JavaScript na construção de uma aplicação web interativa.

Durante o desenvolvimento, foram utilizados conceitos como manipulação do DOM, funções, estruturas condicionais, eventos, números aleatórios, animações e armazenamento local de dados.

O resultado é um jogo funcional que integra estrutura, apresentação visual e lógica de programação, atendendo ao objetivo proposto para a atividade.
