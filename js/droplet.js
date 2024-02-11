class Droplet {
  constructor() {
    // Posição inicial aleatória dentro do canvas
    this.x = Math.floor(Math.random() * 950);
    this.y = Math.floor(Math.random() * -100); // Começa acima do canvas para dar tempo de entrar na tela
    this.width = 50;
    this.height = 50;
    this.role = null; // Tipo da gota (obstáculo ou bônus)
    this.image = null; // Imagem da gota
    this.fallInterval = undefined; // Intervalo para a queda da gota
    this.speed = 2;
  }

  // Método para fazer a gota cair
  _fallDown() {
    this.fallInterval = setInterval(() => {
      if (this.y > 600) {
        // Se a gota atingir o fundo do canvas, para o intervalo de queda
        clearInterval(this.fallInterval);
      }

      this.y += this.speed; // Move a gota para baixo
    }, 10);
  }
  // Método para atribuir um papel (obstáculo ou bônus) à gota
  _assignRole() {
    if (Math.random() < 0.5) {
      this.role = "obstacle";
    } else {
      this.role = "bonus";
    }
  }

  _assignImage() {
    if (this.role === "obstacle") {
      this.image =
        obstaclesImage[Math.floor(Math.random() * obstaclesImage.length)];
    } else {
      this.image = bonusImage[Math.floor(Math.random() * bonusImage.length)];
    }
  }
}
