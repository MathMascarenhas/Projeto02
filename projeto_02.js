const prompt = require("prompt-sync")();

jokenpomania: while (true) {
  console.clear();
  console.log("Bem-vindo(a) ao Jokenpômania!");
  console.log();
  console.log("Para iniciar o jogo me diga, quantas rodadas iremos jogar?");
  let rodadas = +prompt();
  while (isNaN(rodadas)) {
    console.log("Por favor digite um número");
    rodadas = +prompt();
  }

  console.clear();
  console.log(`Certo, você escolheu jogar ${rodadas} rodadas`);
  console.log();
  console.log(
    "Presione ENTER para iniciar a primeira partida contra a máquina"
  );
  prompt();

  let vitoriasJogador = 0;
  let empates = 0;
  let vitoriasComputador = 0;

  for (i = 1; i <= rodadas; i++) {
    console.clear();
    console.log(`Round número ${i}`);
    console.log(
      "Escolha entre Pedra, Papel e Tesoura. Depois digite sua escolha abaixo"
    );
    let escolhaJogador = prompt().toLowerCase();
    while (
      escolhaJogador != "pedra" &&
      escolhaJogador != "papel" &&
      escolhaJogador != "tesoura"
    ) {
      console.clear();
      console.log("Escolha inválida, por favor digite Pedra, Papel ou Tesoura");
      escolhaJogador = prompt().toLowerCase();
    }

    let possibilidadesJogadas = ["pedra", "papel", "tesoura"];
    let random = Math.floor(Math.random() * 3);
    let escolhaComputador = possibilidadesJogadas[random];

    if (
      (escolhaJogador == "tesoura" && escolhaComputador == "papel") ||
      (escolhaJogador == "papel" && escolhaComputador == "pedra") ||
      (escolhaJogador == "pedra" && escolhaComputador == "tesoura")
    ) {
      vitoriasJogador++;
      console.clear();
      console.log(
        `Você escolheu ${escolhaJogador} e a computador escolheu ${escolhaComputador}`
      );
      console.log("Você venceu!");
      console.log();
      console.log("Pressione ENTER para continuar");
      prompt();
    } else if (escolhaJogador === escolhaComputador) {
      empates++;
      console.clear();
      console.log(
        `Você escolheu ${escolhaJogador} e a computador escolheu ${escolhaComputador}`
      );
      console.log("Empatou!");
      console.log();
      console.log("Pressione ENTER para continuar");
      prompt();
    } else {
      vitoriasComputador++;
      console.clear();
      console.log(
        `Você escolheu ${escolhaJogador} e o computador escolheu ${escolhaComputador}`
      );
      console.log("Você perdeu :c");
      console.log();
      console.log("Pressione ENTER para continuar");
      prompt();
    }
  }

  if (vitoriasJogador > vitoriasComputador) {
    console.clear();
    console.log(`Parabéns você foi o grande campeão! Você ganhou ${vitoriasJogador} partida(s), o
computador venceu ${vitoriasComputador} partida(s) e o número de empates foi ${empates}`);
  } else if (
    vitoriasJogador == vitoriasComputador ||
    empates.length == rodadas
  ) {
    console.clear();
    console.log(`Empatou!!! Por incrível que pareça houve um empate. Você ganhou ${vitoriasJogador} 
partida(s), o computador venceu ${vitoriasComputador} partida(s) e o número de empates foi ${empates}`);
  } else {
    console.clear();
    console.log(`Infelizmente você perdeu... Você ganhou ${vitoriasJogador} partida(s), o 
computador venceu ${vitoriasComputador} partida(s) e o número de empates foi ${empates}`);
  }

  console.log();
  console.log();
  console.log("Deseja realizar um novo jogo?");
  console.log(`Se deseja recomeçar em um novo jogo digite 'S', 
caso contrário digite qualquer outro caractere`);
  let reiniciar = prompt().toLowerCase();
  if (reiniciar == "s") {
    continue jokenpomania;
  } else {
    break jokenpomania;
  }
}