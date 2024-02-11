class Game {
  constructor(context) {
    // contexto do canvas
    this.ctx = context;
    // inicializa os minions
    this.minions = new Player(10, 500, 60, 60);
    // Array para armazenar gotas
    this.droplets = [];
    // Intervalo para gerar gotas
    this.generateInterval = null;
    // Pontuação inicial
    this.points = 0;
    this.playing = true;
    this.jump = 0;
    this.gravity = 1;
    this.horizontalMovement = 0;
  }
  // Método para gerar gotas
  _generateDroplets() {
    this.generateInterval = setInterval(() => {
      const newDroplet = new Droplet();
      newDroplet._assignRole();
      newDroplet._assignImage();
      newDroplet._fallDown();
      this.droplets.push(newDroplet);
    }, 800 - this.points);
  }
  // Método para desenhar gotas
  _drawDroplets() {
    this.droplets.forEach((elem) => {
      this.ctx.drawImage(elem.image, elem.x, elem.y, elem.width, elem.height);
    });
  }
  // Método para desenhar minions
  _drawMinions() {
    this.ctx.drawImage(
      this.minions.image,
      this.minions.x,
      this.minions.y,
      this.minions.width,
      this.minions.height
    );
  }

  _assignControls() {
    // Controles do teclado
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          if (this.horizontalMovement > 0) this.horizontalMovement = 0;
          this.horizontalMovement -= 1;

          //                this.minions.moveLeft();
          break;
        case "ArrowRight":
          if (this.horizontalMovement < 0) this.horizontalMovement = 0;
          this.horizontalMovement += 1;

          //                this.minions.moveRight();
          break;
        case "ArrowUp":
          //          if(this.jump <= 0) //Solo permite repetir el salto si ya está tocando el suelo de nuevo
          this.jump = 30;
          //this.minions.moveUp();
          break;
        case "ArrowDown":
          this.minions.moveDown();
          break;
        default:
          break;
      }
    });
  }

  // Método para verificar colisões entre minions e gotas
  _checkCollisions() {
    for (let i = 0; i < this.droplets.length; i++) {
      const droplet = this.droplets[i];
      this.droplets[i].speed = 2 + this.points / 100;
      // Lógica de colisão
      if (
        ((this.minions.x >= droplet.x &&
          this.minions.x <= droplet.x + droplet.width) ||
          (this.minions.x + this.minions.width >= droplet.x &&
            this.minions.x + this.minions.width <= droplet.x + droplet.width) ||
          (droplet.x >= this.minions.x &&
            droplet.x <= this.minions.x + this.minions.width)) &&
        // //  mesmo para o eixo y
        ((this.minions.y >= droplet.y &&
          this.minions.y <= droplet.y + droplet.height) ||
          (this.minions.y + this.minions.height >= droplet.y &&
            this.minions.y + this.minions.height <=
              droplet.y + droplet.height) ||
          (droplet.y >= this.minions.y &&
            droplet.y <= this.minions.y + this.minions.height))
      ) {
        // Ações com base na colisão (aumenta ou diminui pontos)
        if (droplet.role === "obstacle") {
          this._gameOver();
          //this.points -= 2;
        } else if (droplet.role === "bonus") {
          this.points += 5;
        }
        // Verifica se a pontuação é negativa
        if (this.points < 0) {
          this._gameOver();
        } else if (this.points >= 10) {
          this._WinTheGame();
        }
        // Remove a gota após a colisão
        let index = this.droplets.indexOf(droplet);
        this.droplets.splice(index, 1);
      }
    }
  }

  // Método para limpar o canvas
  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600);
  }
  // Método para exibir tela de fim de jogo
  _gameOver() {
    clearInterval(this.generateInterval);
    const losePage = document.getElementById("lose-page");
    losePage.style = "display: flex";
    const canvas = document.getElementById("canvas");
    canvas.style = "display:none";
    this.playing = false;
  }

  _WinTheGame() {
    clearInterval(this.generateInterval);
    const winPage = document.getElementById("win-page");
    winPage.style = "display: flex";
    const canvas = document.getElementById("canvas");
    canvas.style = "display:none";
    this.playing = false;
  }

  // Método para escrever a pontuação na tela

  _writeScore() {
    this.ctx.font = "bold 30px Arial"; // Cambiar el tipo de fuente y hacerla más grande
    this.ctx.fillStyle = "black"; // Cambiar el color de los puntos
    this.ctx.textAlign = "center"; // Centrar el texto horizontalmente
    this.ctx.fillText(`Points: ${this.points}`, 800, 570); // Centrar el texto verticalmente
  }

  _checkJump() {
    if (this.jump >= 0) {
      this.minions.y += (15 - this.jump) * this.gravity;
      this.jump--;
    }
    // Mover el minion horizontalmente
    this.minions.x += this.horizontalMovement;

    // Evitar que el minion salga por el lado izquierdo del tablero
    if (this.minions.x < 0) {
      this.minions.x = 0;
    }
    // Evitar que el minion salga por el lado derecho del tablero
    if (this.minions.x + this.minions.width > 1000) {
      this.minions.x = 1000 - this.minions.width;
    }

    // Evitar que el minion salga por la parte superior del tablero
    this.minions.y = Math.max(0, this.minions.y);
    // Evitar que el minion salga por la parte inferior del tablero
    this.minions.y = Math.min(600 - this.minions.height, this.minions.y);
  }

  // Método para atualizar o jogo
  _update() {
    this._clean();
    this._checkJump();
    this._drawMinions();
    this._drawDroplets();
    this._writeScore();
    this._checkCollisions();
    window.requestAnimationFrame(() => this._update());
  }
  // Método para iniciar o jogo
  start() {
    this._update();
    this._generateDroplets();
    this._assignControls();
  }
}
