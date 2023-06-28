const prompt = require('prompt-read')

const jogadores = [3];

do {function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function iniciarJogo() {
  const numJogadores = parseInt(prompt("Digite o número de jogadores: "));
  const jogadores = [];

  for (let i arma = Array.from({ length: 6 }, () => 0);

  function sortearJogador() {
    const indiceSorteado = Math.floor(Math.random() * jogadores.length);
    const jogadorSorteado = jogadores[indiceSorteado];
    console.log(`É a vez de ${jogadorSorteado}.`);
    return jogadorSorteado;
  }

  async function escolherNumeroSlot(jogador) {
    console.clear();
    console.log(`É a vez de ${jogador}.`);
    await sleep(2000);
    console.clear();
    console.log(`Agora ${jogador} deve escolher um número de slot.`);
    await sleep(1000);
    console.clear();
    console.log(`Processando a escolha de ${jogador}...`);
    await sleep(1000);
    console.clear();
    console.log(`${jogador}, você escolheu o slot X.`);
    await sleep(1000);
    console.clear();
    console.log(`Verificando o slot escolhido por ${jogador}...`);
    await sleep(2000);
    console.clear();
    console.log(`Parabéns, ${jogador}! Você sobreviveu!`);
    await sleep(1000);
    return true;
  }

  let jogadorAtualIndex = 0;

  while (jogadores.length > 1) {
    const jogadorAtual = jogadores[jogadorAtualIndex];
    const jogadorSobreviveu = await escolherNumeroSlot(jogadorAtual);

    if (!jogadorSobreviveu) {
      jogadores.splice(jogadorAtualIndex, 1);
    } else {
      jogadorAtualIndex = (jogadorAtualIndex + 1) % jogadores.length;
    }
  }

  console.clear();
  console.log(`\n${jogadores[0]} é o vencedor! Parabéns!\n`);
}

do {
  console.log("Insira uma opção:\n");
  console.log("1 - Jogar\n");
  console.log("9 - Sair\n");

  var op = prompt('opcao: ', 'number');

  switch (op) {
    case 1:
      iniciarJogo();
      break;

    case 9:
      console.log('Adeus!');
      break;

    default:
      console.log('Opção inválida');
      break;
  }
} 

} while (op !== 9);
