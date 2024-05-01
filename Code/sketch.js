let MaxNr = 24;
let cols = 8;
let rows = 8;
let board = [];

function setup() {
  createCanvas(820, 820);

  for (let i = 0; i < cols; i++) {
    board[i] = [];
    for (let j = 0; j < rows; j++) {
      if (j < 3) {
        if (j % 2 == 0) {
          if (i % 2 == 0) {
            board[i][j] = new Brik(i, j, 2);
          } else {
            board[i][j] = new Brik(i, j, 0);
          }
        } else {
          if (i % 2 == 1) {
            board[i][j] = new Brik(i, j, 2);
          } else {
            board[i][j] = new Brik(i, j, 0);
          }
        }
      }
      
      if (j == 3 || j == 4) {
        board[i][j] = new Brik(i, j, 0);
        }
        if (j > 4) {
        if (j % 2 == 0) {
          if (i % 2 == 0) {
            board[i][j] = new Brik(i, j, 1);
          } else {
            board[i][j] = new Brik(i, j, 0);
          }
        } else {
          if (i % 2 == 1) {
            board[i][j] = new Brik(i, j, 1);
          } else {
            board[i][j] = new Brik(i, j, 0);
          }
        }
      }
    }
  }
  print(board);
}

function draw() {
  background(100);
  let color1 = 0;
  let color2 = 255;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      /* En modulo operator (%) tjekker om det er et lige eller ulige tal for at automatisere farvelægningen af felter ved at dividere i med
      2 for at se om den får en ulige eller lige værdi for at farve hvert andede felt sort. */
      if (i % 2 == 0) {
        color1 = 255;
        color2 = 0;
      } else {
        color1 = 0;
        color2 = 255;
      }
      if (j % 2 == 0) {
        fill(color1);
      } else {
        fill(color2);
      }
      // Når det kommer til at lave selve firkanterne bruges variablerne i og j til at bestemme placeringen af firkanterne for at lave et fuldt bræt.
      rect(
        ((width - 20) / 8) * i + 10,
        ((height - 20) / 8) * j + 10,
        (width - 20) / 8,
        (height - 20) / 8
      );
    }
  }
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      board[i][j].Update();
      board[i][j].Show();
    }
  }
}

function mouseReleased() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      board[i][j].Clicked();
      board[i][j].move();
    }
  }
}
