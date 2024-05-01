class Brik {
  constructor(i, j, c) {
    this.BrikI = i;
    this.BrikJ = j;
    this.BrikColor = c;

    if (this.BrikJ < 5) {
      this.Red = 255;
      this.Green = 0;
      this.Blue = 0;
      this.RedPiece = true;
      this.BluePiece = false;
      this.Picking = false;
      Lock = false;
    } else {
      this.Red = 0;
      this.Green = 0;
      this.Blue = 255;
      this.BluePiece = true;
      this.RedPiece = false;
      this.Picking = false;
    }
  }

  Show() {
    push();
    strokeWeight(5);
    stroke(this.Red, 100, this.Blue, 100);
    fill(this.Red, this.Green, this.Blue, 150);
    circle();
    pop();
  }

  Update() {
    if (this.RedPiece == true) {
      this.BrikJ = this.BrikJ;
    } else if (this.BluePiece == true) {
      this.BrikJ = this.BrikJ;
    }
    if (this.Picking == true) {
      push();
      fill(200, 200, 200);
      stroke(0, 255, 0);
      strokeWeight(7);
      circle(width/16+width/8*this.BrikI, height/16+height/8*this.BrikJ, width / 9);
      pop();
    }
  }
  Clicked() {
    if (dist(mouseX, mouseY, this.BrikX, this.BrikY) < width / 18) {
      if (this.Picking == false) {
        if (Lock == false) {
          this.Picking = true;
          Lock = true;
        }
      } else if (this.Picking == true) {
        this.Picking = false;
        Lock = false;
      }
    }
  }
  player() {
    if (this.BrikY < height / 2) {
      this.Player_n = 1;
    } else {
      this.Player_n = -1;
    }
  }
  move() {
    if (this.Picking == true && Lock == true) {
      if (
        mouseY > this.BrikY + (150 * this.Player_n) &&
        mouseY < this.BrikY + (50 * this.Player_n)
      ) {
        if (mouseX > this.BrikX - 150 && mouseX < this.BrikX - 50) {
          console.log("Jeg er sikker");
          this.BrikX = this.BrikX - 100;
          this.BrikY = this.BrikY - 100;

          Lock = false;
          this.Picking = false;
        } else if (mouseX < this.BrikX + 150 && mouseX > this.BrikX + 50){
          console.log("Jeg er sikker");
          this.BrikX = this.BrikX + 100;
          this.BrikY = this.BrikY - 100;
          Lock = false;
          this.Picking = false;
        }
      }
    }
  }
}
