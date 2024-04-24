class Brik{

  constructor(x,y){   
    this.BrikX = x;
    this.BrikY = y;
    if(this.BrikY < height/2){
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
  
  Show(){
    push()
    strokeWeight(5)
    stroke(this.Red,100,this.Blue,100)
    fill(this.Red,this.Green,this.Blue,150)
    circle(this.BrikX,this.BrikY,width/9);
    pop()
    }

  Update(){
    console.log(this.picking);
    if(this.RedPiece === true){
      this.BrikY = this.BrikY
    } else 
    if(this.BluePiece === true){
      this.BrikY = this.BrikY
    }
    if(this.Picking === true){
      push();
      fill(200,200,200);
      stroke(0,255,0);
      strokeWeight(7);
      circle(this.BrikX,this.BrikY,width/9);
      pop();
    }
  }
  Clicked(){
    if (dist(mouseX,mouseY,this.BrikX,this.BrikY) < width/18){
      if (this.Picking === false){
          if(Lock === false){
          this.Picking = true;
          Lock = true;
          }
        }else 
      if (this.Picking === true){
          this.Picking = false;
          Lock = false;
        }
      }
    }
  }
