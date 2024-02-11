class Player {
  constructor(x, y, width, height) {
    // Imagem do jogador (minions)
    this.image = minions;
    // Posição inicial do jogador
    this.x = x;
    this.y = y;
    // Altura e largura do jogador
    this.height = height;
    this.width = width;
  }
  // Método para mover o jogador para a direita
  moveRight() {
    this.x = this.x + 15;
    if (this.x > 1000) {
      this.x = 0 - this.width;
    }
  }
  // Método para mover o jogador para a esquerda
  moveLeft() {
    this.x = this.x - 15;
    if (this.x < 0 - this.width) {
      this.x = 1000;
    }
  }
  // Método para mover o jogador para cima
  moveUp() {
    this.y = this.y - 15;
    if (this.y < 0 - this.height) {
      this.y = 600;
    }
  }
  // Método para mover o jogador para baixo
  moveDown() {
    this.y = this.y + 15;
    if (this.y > 600) {
      this.y = 0 - this.height;
    }
  }
  // Método para aumentar o tamanho do jogador
  _increase() {
    this.width = this.width + 15;
    this.height = this.height + 15;
    this.y = this.y - 15;
  }
  // Método para diminuir o tamanho do jogador
  _decrease() {
    this.width = this.width - 15;
    this.height = this.height - 15;
    this.y = this.y + 15;
  }
}
