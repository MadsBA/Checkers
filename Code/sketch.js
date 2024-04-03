let Brikker = [];
let MaxNr = 24;

function setup() {
  createCanvas(820, 820);
  for(let i = 0; i< MaxNr; i++){
    if(i < 4){
    Brikker.push(new Brik((width-20)/16*(i*4+1)+10,(height-20)/16+10));
    } else 
    if(i < 8){
    Brikker.push(new Brik((width-20)/16*((i-4)*4+3)+10,(height-20)/16*3+10))
    } else
    if(i< 12){
    Brikker.push(new Brik((width-20)/16*((i-8)*4+1)+10,(height-20)/16*5+10))
    } else
    if(i< 16){
    Brikker.push(new Brik((width-20)/16*((i-12)*4+3)+10,(height-20)/16*11+10))
    } else
    if(i< 20){
    Brikker.push(new Brik((width-20)/16*((i-16)*4+1)+10,(height-20)/16*13+10))
    } else
    if(i< 24){
    Brikker.push(new Brik((width-20)/16*((i-20)*4+3)+10,(height-20)/16*15 +10))
    }
  }
}

function draw() {
  background(100,100,100,2);
  let color1 = 0;
  let color2 = 255;
  for (let i=0; i < 8; i++){
    for (let j=0; j < 8; j++){   
  
      // En modulo operator (%) tjekker om det er et lige eller ulige tal for at automatisere farvelægningen af felter ved at dividere i med
      // 2 for at se om den får en ulige eller lige værdi for at farve hvert andede felt sort.
      if (i%2 == 0){
        color1 = 255;
        color2 = 0;
      } else {
        color1 = 0;
        color2 = 255;
      }
      if (j%2 == 0){
        fill (color1,color1,color1,55);
      } else {
        fill (color2,color2,color2,55);
      }
      // Når det kommer til at lave selve firkanterne bruges variablerne i og j til at bestemme placeringen af firkanterne for at lave et fuldt bræt.
      rect((0+(width-20)/8*i)+10,(0+(height-20)/8*j)+10,(width-20)/8,(height-20)/8);
    }
  }
  for(let i = 0; i< MaxNr; i++){
   Brikker[i].Update();
    Brikker[i].Show();

    }
}
