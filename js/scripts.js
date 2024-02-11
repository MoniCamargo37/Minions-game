// Aguarda até que a página seja totalmente carregada
window.onload = function () {
  // Obtém o elemento canvas do HTML
  const canvas = document.getElementById("canvas");
  // Obtém o contexto 2D do canvas
  const ctx = canvas.getContext("2d");
  // Obtém as referências para os elementos das páginas inicial, de vitória e de derrota
  const startPage = document.getElementById("start-page");
  const startButton = document.getElementById("start");
  const winPage = document.getElementById("win-page");
  const tryWinButton = document.getElementById("tryWinButton");
  const losePage = document.getElementById("lose-page");
  const tryLoseButton = document.getElementById("tryLoseButton");

  // Evento de clique no botão de iniciar jogo
  startButton.onclick = function () {
    // Esconde a página inicial
    startPage.style = "display: none";
    // Remove a classe 'hidden' do canvas para exibi-lo
    canvas.classList.remove("hidden");
    // Cria uma nova instância do jogo e a inicia
    const game = new Game(ctx);
    game.start();
  };

  // Evento de clique no botão de tentar novamente após vitória
  tryWinButton.onclick = function () {
    // Recarrega a página para reiniciar o jogo
    window.location.reload();
  };

  // Evento de clique no botão de tentar novamente após derrota
  tryLoseButton.onclick = function () {
    // Recarrega a página para reiniciar o jogo
    window.location.reload();
  };
};
