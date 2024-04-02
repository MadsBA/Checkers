let Brikker = [];
let MaxNr = 24;

function setup() {
  createCanvas(840, 840);
  for(let i = 0; i< MaxNr; i++){
    Brikker.push(new Brik(random(0,width),random(0,height),Math.round(0,1)));
  }

}

function draw() {
  background(100);
  let color1 = 0;
  let color2 = 255;
  for (let i=0; i < 8; i++){
    for (let j=0; j < 8; j++){   
  
      // % tjekker om det er et lige eller ulige tal for at automatisere farvelægningen af felter
      if (i%2 == 0){
        color1 = 255;
        color2 = 0;
      } else {
        color1 = 0;
        color2 = 255;
      }
      if (j%2 == 0){
        fill (color1);
      } else {
        fill (color2);
      }
      // Når det kommer til at lave selve firkanterne bruges variablerne i og j til at bestemme placeringen af firkanterne for at lave et fuldt bræt.
      rect((0+(width-20)/8*i)+10,(0+(height-20)/8*j)+10,(width-20)/8,(height-20)/8);
    }
  }
  for(let i = 0; i< MaxNr; i++){
    Brikker[i].Show();
    }
}
