let MaxNr = 24;
let cols = 8;
let rows = 8;
let board = [];

function setup() {
  createCanvas(820, 820);

  for (let i = 0; i < cols; i++) {
    board[i] = [];
    for (let j = 0; j < rows; j++) {
      board[i][j] = new Brik(i,j);
      }
    }
  print(board);
 





}
//fuck dette
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
    for (let j = 0; j < rows; j++){
    board[i][j].Update();
    board[i][j].Show();
    }
  }
}

function mouseReleased(){
for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows; j++){
  board[i][j].Clicked();
  board[i][j].move();
  }
}
}
