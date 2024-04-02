let Brikker = [];
let MaxNr = 24;

function setup() {
  createCanvas(840, 840);
  for(let i = 0; i< MaxNr; i++){
    Brikker.push(new Brik(random(0,width),random(0,height),Math.round(0,1)));
  }
}


function draw() {
      rect((0+(width-20)/8*i)+10,(0+(height-20)/8*j)+10,(width-20)/8,(height-20)/8);
      // Når det kommer til at lave selve firkanterne bruges variablerne i og j til at bestemme placeringen af firkanterne for at lave et fuldt bræt.
      }
        fill (color2);
      } else {
        fill (color1);
    }
      }
      if (j%2 == 0){
        color2 = 255;
        color1 = 0;
      } else {
        color2 = 0;
      if (i%2 == 0){
        color1 = 255;
      // % tjekker om det er et lige eller ulige tal for at automatisere farvelægningen af felter
      
    for (let j=0; j < 8; j++){
  for (let i=0; i < 8; i++){
  background(100);
  let color1 = 0;
  let color2 = 255;

  }
  for(let i = 0; i< MaxNr; i++){
  Brikker[i].Show();
  }
}
