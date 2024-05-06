class Brik {
  constructor(i, j, c) {
    this.BrikI = i;
    this.BrikJ = j;
    this.BrikColor = c;
    this.Afstandx = ((width-20)/16+(width-20)/8*this.BrikI+10);
    this.Afstandy = ((height-20)/16+(height-20)/8*this.BrikJ+10);
    this.MoveRight = ((width-20)/16+(width-20)/8*(this.BrikI+1)+10);
    this.MoveLeft = ((width-20)/16+(width-20)/8*(this.BrikI-1)+10);
    this.MoveUp = ((height-20)/16+(height-20)/8*(this.BrikJ-1)+10);
    this.MoveDown = ((height-20)/16+(height-20)/8*(this.BrikJ+1)+10)

    if (this.BrikColor == 2) {
      this.Red = 255;
      this.Green = 0;
      this.Blue = 0;
      this.RedPiece = true;
      this.BluePiece = false;
      this.Picking = false;
      this.IsAQueen = false;
      Lock = false;
    } else {
      if (this.BrikColor ==1){
      this.Red = 0;
      this.Green = 0;
      this.Blue = 255;
      this.BluePiece = true;
      this.RedPiece = false;
      this.Picking = false;
      this.IsAQueen = false;
      } else {
      this.Red = 0;
      this.Green = 233;
      this.Blue = 0;
      this.BluePiece = false;
      this.RedPiece = false;
      this.EmptyPiece = true;
      this.Picking = false;
      this.IsAQueen = false;
      }
    
    }
  }

  Update() {
    if (this.Picking == true) {
      push();
      noFill();
      stroke(0, 255, 0, 150);
      strokeWeight(7);
      circle(this.Afstandx, this.Afstandy, width / 9);
      pop();
    }
    if(this.RedPiece == true && this.BrikJ == 7){
      this.IsAQueen = true;

    }

    if(this.BluePiece == true && this.BrikJ == 0){
      this.IsAQueen = true;
    }
  }

  Show() {
    push();
    strokeWeight(5);
    stroke(this.Red, 100, this.Blue, 100);
    fill(this.Red, this.Green, this.Blue, 150);
    if (this.EmptyPiece !== true){
    circle(this.Afstandx, this.Afstandy, width / 9);
    }
    pop();
    if (this.IsAQueen == true){
   //Making custom shape that looks like a crown - Done with absolot value
    push()
    stroke(255, 187, 72, 150)
    fill(255, 167, 72, 200);
    beginShape()
    vertex(this.Afstandx,this.Afstandy+25)
    vertex(this.Afstandx-25,this.Afstandy+15)
    vertex(this.Afstandx-30,this.Afstandy-25)
    vertex(this.Afstandx-10,this.Afstandy-5)
    vertex(this.Afstandx,this.Afstandy-30)
    vertex(this.Afstandx+10,this.Afstandy-5)
    vertex(this.Afstandx+30,this.Afstandy-25)
    vertex(this.Afstandx+25,this.Afstandy+15)
    vertex(this.Afstandx,this.Afstandy+25)
    endShape()
    pop()
    }

  }

  Clicked() {
    if (dist(mouseX, mouseY, this.Afstandx, this.Afstandy) < width / 18) {
      if (this.EmptyPiece !== true){
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
  }


  move() {
    if (this.Picking == true && Lock == true) {
      //Movement for the blue peices
      if(this.BluePiece == true){
        //Move to the right as blue
        if (dist(mouseX, mouseY, this.MoveRight, this.MoveUp) < width / 18) {
  //Makes sure that the piece doesnt move outside the board
  if(this.BrikI !== 7 && this.BrikJ !== 0){
          //checks if that spot is free
          if (board[this.BrikI+1][this.BrikJ-1].EmptyPiece == true){
            //Removes blue peice from its original position
            board[this.BrikI].splice(this.BrikJ,1);
            //Adds the Empty peice into hole in array
            splice(board[this.BrikI],new Brik(this.BrikI,this.BrikJ,0),[this.BrikJ]);
            //Removes Empty peice from its original position
            board[this.BrikI+1].splice(this.BrikJ-1,1);
            //Adds the blue peice into hole in array
            splice(board[this.BrikI+1],new Brik(this.BrikI+1,this.BrikJ-1,1),[this.BrikJ-1]);

            Lock = false;

            console.log(board);

          }
  }
  if(this.BrikI < 6 && this.BrikJ > 1){
          //ATTACK - Checks if that spot is an enemy
          if (board[this.BrikI+1][this.BrikJ-1].RedPiece == true){
            //Checks if the spot behind the enemy is free
            if (board[this.BrikI+2][this.BrikJ-2].EmptyPiece == true){
 
              board[this.BrikI].splice(this.BrikJ,1);
              splice(board[this.BrikI],new Brik(this.BrikI,this.BrikJ,0),[this.BrikJ]);

              board[this.BrikI+2].splice(this.BrikJ-2,1);
              splice(board[this.BrikI+2],new Brik(this.BrikI+2,this.BrikJ-2,1),[this.BrikJ-2]);

              //replaces the taken red peice with an empty peice
              board[this.BrikI+1].splice(this.BrikJ-1,1);
              splice(board[this.BrikI+1],new Brik(this.BrikI+1,this.BrikJ-1,0),[this.BrikJ-1]);
 
              Lock = false;
 
              console.log(board);
            }
          }
        }
      }

        //Move to the left as blue
        if (dist(mouseX, mouseY, this.MoveLeft, this.MoveUp) < width / 18) {
if(this.BrikI !== 0 && this.BrikJ !== 0){
          //checks if that spot is free
          if (board[this.BrikI-1][this.BrikJ-1].EmptyPiece == true){

            board[this.BrikI].splice(this.BrikJ,1);
            splice(board[this.BrikI],new Brik(this.BrikI,this.BrikJ,0),[this.BrikJ]);
          
            board[this.BrikI-1].splice(this.BrikJ-1,1);
            splice(board[this.BrikI-1],new Brik(this.BrikI-1,this.BrikJ-1,1),[this.BrikJ-1]);

            Lock = false;

            console.log(board);
          }
  } 
  if(this.BrikI > 2 && this.BrikJ > 1){
           //ATTACK - Checks if that spot is an enemy
          if (board[this.BrikI-1][this.BrikJ-1].RedPiece == true){
            //Checks if the spot behind the enemy is free
            if (board[this.BrikI-2][this.BrikJ-2].EmptyPiece == true){
 
              board[this.BrikI].splice(this.BrikJ,1);
              splice(board[this.BrikI],new Brik(this.BrikI,this.BrikJ,0),[this.BrikJ]);

              board[this.BrikI-2].splice(this.BrikJ-2,1);
              splice(board[this.BrikI-2],new Brik(this.BrikI-2,this.BrikJ-2,1),[this.BrikJ-2]);

              board[this.BrikI-1].splice(this.BrikJ-1,1);
              splice(board[this.BrikI-1],new Brik(this.BrikI-1,this.BrikJ-1,0),[this.BrikJ-1]);
 
              Lock = false;
 
              console.log(board);
            }
          }
        }
  }
      }



      //Movement for the Red peices
      if(this.RedPiece == true){
        //Move to the right as Red
        if (dist(mouseX, mouseY, this.MoveRight, this.MoveDown) < width / 18) {
  if(this.BrikI !== 7 && this.BrikJ !== 7){
          //checks if that spot is free
          if (board[this.BrikI+1][this.BrikJ+1].EmptyPiece == true){

            //Removes red peice from its original position
            board[this.BrikI].splice(this.BrikJ,1);
            //Adds the Empty peice into hole in array
            splice(board[this.BrikI],new Brik(this.BrikI,this.BrikJ,0),[this.BrikJ]);

            //Removes Empty peice from its original position
            board[this.BrikI+1].splice(this.BrikJ+1,1);
            //Adds the red peice into hole in array
            splice(board[this.BrikI+1],new Brik(this.BrikI+1,this.BrikJ+1,2),[this.BrikJ+1]);

            Lock = false;

            console.log(board);

          }
  }
  if(this.BrikI < 6 && this.BrikJ < 6){
           //ATTACK - Checks if that spot is an enemy
          if (board[this.BrikI+1][this.BrikJ+1].BluePiece == true){
            //Checks if the spot behind the enemy is free
            if (board[this.BrikI+2][this.BrikJ+2].EmptyPiece == true){
 
              board[this.BrikI].splice(this.BrikJ,1);
              splice(board[this.BrikI],new Brik(this.BrikI,this.BrikJ,0),[this.BrikJ]);

              board[this.BrikI+2].splice(this.BrikJ+2,1);
              splice(board[this.BrikI+2],new Brik(this.BrikI+2,this.BrikJ+2,2),[this.BrikJ+2]);

              //replaces the taken blue peice with an empty peice
              board[this.BrikI+1].splice(this.BrikJ+1,1);
              splice(board[this.BrikI+1],new Brik(this.BrikI+1,this.BrikJ+1,0),[this.BrikJ+1]);
 
              Lock = false;
 
              console.log(board);
            }
          }
  }
        }


        //Move to the left as Red
        if (dist(mouseX, mouseY, this.MoveLeft, this.MoveDown) < width / 18) {
  if(this.BrikI !== 0 && this.BrikJ !== 7){
          //checks if that spot is free
          if (board[this.BrikI-1][this.BrikJ+1].EmptyPiece == true){
           
            board[this.BrikI].splice(this.BrikJ,1);
            splice(board[this.BrikI],new Brik(this.BrikI,this.BrikJ,0),[this.BrikJ]);
          
            board[this.BrikI-1].splice(this.BrikJ+1,1);
            splice(board[this.BrikI-1],new Brik(this.BrikI-1,this.BrikJ+1,2),[this.BrikJ+1]);

            Lock = false;
          
            console.log(board);
          } 
  }

  if(this.BrikI > 1 && this.BrikJ < 6){
          //ATTACK - Checks if that spot is an enemy
          if (board[this.BrikI-1][this.BrikJ+1].BluePiece == true){
            //Checks if the spot behind the enemy is free
            if (board[this.BrikI-2][this.BrikJ+2].EmptyPiece == true){
 
              board[this.BrikI].splice(this.BrikJ,1);
              splice(board[this.BrikI],new Brik(this.BrikI,this.BrikJ,0),[this.BrikJ]);

              board[this.BrikI-2].splice(this.BrikJ+2,1);
              splice(board[this.BrikI-2],new Brik(this.BrikI-2,this.BrikJ+2,2),[this.BrikJ+2]);

              board[this.BrikI-1].splice(this.BrikJ+1,1);
              splice(board[this.BrikI-1],new Brik(this.BrikI-1,this.BrikJ+1,0),[this.BrikJ+1]);
 
              Lock = false;
 
              console.log(board);
            }
          }
  }
        }
      }
    }
  }
}
