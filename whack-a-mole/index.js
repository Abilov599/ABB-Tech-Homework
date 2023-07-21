class WhackAMole {
  constructor(rows, cols, difficulty) {
    this.rows = rows;
    this.cols = cols;
    this.difficulty = difficulty;
    this.board = [];
    this.score = {
      user: 0,
      computer: 0,
    };
    this.gameOver = false;
    this.interval = null;
    this.table = null; // Store the table element
  }

  createBoard() {
    this.table = document.createElement("table");
    for (let i = 0; i < this.rows; i++) {
      const row = document.createElement("tr");
      const rowArray = [];
      for (let j = 0; j < this.cols; j++) {
        const cell = document.createElement("td");
        rowArray.push(cell);
        row.appendChild(cell);
      }
      this.table.appendChild(row);
      this.board.push(rowArray);
    }
    document.body.appendChild(this.table);
  }

  highlightCell() {
    if (!this.gameOver) {
      const randomRow = Math.floor(Math.random() * this.rows);
      const randomCol = Math.floor(Math.random() * this.cols);
      const cell = this.board[randomRow][randomCol];

      if (!cell.classList.contains("blue")) {
        // Remove green and red classes before adding blue class
        for (let i = 0; i < this.rows; i++) {
          for (let j = 0; j < this.cols; j++) {
            this.board[i][j].classList.remove("green", "red");
          }
        }

        cell.classList.add("blue");
        setTimeout(
          () => {
            if (!this.gameOver) {
              if (cell.classList.contains("blue")) {
                this.score.computer++;
                cell.classList.remove("blue");
                cell.classList.add("red");
                this.checkGameOver();
              }
            }
          },
          this.difficulty === "easy"
            ? 1500
            : this.difficulty === "medium"
            ? 1000
            : 500
        );
      }
    }
  }

  addClickEventHandlers() {
    if (!this.table) return; // Check if the table exists before adding event handlers
    this.table.addEventListener("click", (event) => {
      if (!this.gameOver) {
        const cell = event.target;
        if (cell.tagName === "TD" && cell.classList.contains("blue")) {
          cell.classList.remove("blue");
          cell.classList.add("green");
          this.score.user++;
          this.checkGameOver();
        }
      }
    });
  }

  checkGameOver() {
    const totalCells = this.rows * this.cols;
    const halfTotalCells = Math.floor(totalCells / 2);
    if (
      this.score.user >= halfTotalCells ||
      this.score.computer >= halfTotalCells
    ) {
      this.gameOver = true;
      clearInterval(this.interval);
      setTimeout(() => {
        this.displayWinner();
        this.resetGame();
      }, 1000);
    }
  }

  displayWinner() {
    const winnerMessage =
      this.score.user > this.score.computer
        ? "Congratulations! You won!"
        : this.score.user === this.score.computer
        ? "It's a tie!"
        : "Computer won! Better luck next time!";
    alert(winnerMessage);
  }

  resetGame() {
    this.gameOver = false;
    this.score.user = 0;
    this.score.computer = 0;

    const table = document.querySelector("table");
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const cell = this.board[i][j];
        cell.classList.remove("blue", "green", "red"); // Remove all color classes
      }
    }
  }
}

document.getElementById("startButton").addEventListener("click", () => {
  const difficulty = document.getElementById("difficulty").value;
  const game = new WhackAMole(10, 10, difficulty);
  game.createBoard();
  game.interval = setInterval(
    () => game.highlightCell(),
    game.difficulty === "easy"
      ? 1500
      : game.difficulty === "medium"
      ? 1000
      : 500
  );
  game.addClickEventHandlers(); // Call addClickEventHandlers after creating the table
});
