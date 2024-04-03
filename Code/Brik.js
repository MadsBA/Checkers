let BrikX = 0;
let BrikY = 0;
let Red = 0;
let Green = 0;
let Blue = 0;
let BluePiece = false;
let RedPiece = false;
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

        } else {
        this.Red = 0;
        this.Green = 0;
        this.Blue = 255;
        this.BluePiece = true;
        this.RedPiece = false;
        }
    }
   
   Show(){
   push()
   fill(this.Red,this.Green,this.Blue)
   circle(this.BrikX,this.BrikY,width/9);
   pop()
   }

   Update(){
     if(this.RedPiece === true){
     this.BrikY = this.BrikY + 1
     } else 
     if(this.BluePiece === true){
     this.BrikY = this.BrikY - 1
     }
   }
}