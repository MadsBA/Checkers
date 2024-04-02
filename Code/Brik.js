let BrikX = 0;
let BrikY = 0;
let Red = 0;
let Green = 0;
let Blue = 0;
class Brik{

    constructor(x,y){   
    this.BrikX = x;
    this.BrikY = y;
    if(this.BrikY < height/2){
        this.Red = 255;
        this.Green = 0;
        this.Blue = 0;
        } else {
        this.Red = 0;
        this.Green = 0;
        this.Blue = 255;
        }
    }
   
   Show(){
   push()
   fill(this.Red,this.Green,this.Blue)
   circle(this.BrikX,this.BrikY,width/9);
   pop()
   }
   Update(){

   }
}