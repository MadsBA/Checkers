class Brik {
  constructor(i, j, c) {
    this.BrikI = i;
    this.BrikJ = j;
    this.BrikColor = c;
    this.Picking = false;
    Lock = false;

    //rød brik
    if (this.BrikColor == 2) {
      this.Red = 255;
      this.Green = 0;
      this.Blue = 0;
      this.RedPiece = true;
      this.BluePiece = false;
      this.Player_n = 2;
    //blå brik
    } else if (this.BrikColor ==1){
      this.Red = 0;
      this.Green = 0;
      this.Blue = 255;
      this.BluePiece = true;
      this.RedPiece = false;
      this.Player_n = 1;
    //tomt felt
    } else {
      this.Red = 0;
      this.Green = 0;
      this.Blue = 0;
      this.BluePiece = false;
      this.RedPiece = false;
      this.EmptyPiece = true;
      }
    }
  }

  Show() {
    push();
    strokeWeight(5);
    stroke(this.Red, 100, this.Blue, 100);
    fill(this.Red, this.Green, this.Blue, 150);
    if (this.EmptyPiece !== true){
    circle((width-20)/16+(width-20)/8*this.BrikI+10, (height-20)/16+(height-20)/8*this.BrikJ+10, width / 9);
    }
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
      circle((width-40)/16+(width-40)/8*this.BrikI, (height-40)/16+(height-40)/8*this.BrikJ, width / 9);
      pop();
    }
  }
  Clicked() {
    if (dist(mouseX, mouseY, this.BrikX, this.BrikJ) < width / 18) {
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
  move() {
    if (this.Picking == true && Lock == true) {
      console.log(this.Player_n);
      switch (this.Player_n) {
        case 1:
          if (mouseY > this.BrikY - 150 && mouseY < this.BrikY - 50) {
            if (mouseX > this.BrikX - 150 && mouseX < this.BrikX - 50) {
              this.BrikX = this.BrikX - 100;
              this.BrikY = this.BrikY - 100;
              Lock = false;
              this.Picking = false;
            } else if (mouseX < this.BrikX + 150 && mouseX > this.BrikX + 50) {
              this.BrikX = this.BrikX + 100;
              this.BrikY = this.BrikY - 100;
              Lock = false;
              this.Picking = false;
            }
          }
          break;

        case 2:
          if (mouseY < this.BrikY + 150 && mouseY > this.BrikY + 50) {
            if (mouseX > this.BrikX - 150 && mouseX < this.BrikX - 50) {
              this.BrikX = this.BrikX - 100;
              this.BrikY = this.BrikY + 100;
              Lock = false;
              this.Picking = false;
            } else if (mouseX < this.BrikX + 150 && mouseX > this.BrikX + 50) {
              this.BrikX = this.BrikX + 100;
              this.BrikY = this.BrikY + 100;
              Lock = false;
              this.Picking = false;
            }
          }
          break;
      }
    }
  }
}
