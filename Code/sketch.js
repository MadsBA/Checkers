function setup() {
  createCanvas(840, 840);
}

function draw() {
  background(100);
  let col = 0;
  let row = 0;
  let color1 = 0;
  let color2 = 255;

  for (let i=0; i < 8; i++){
    for (let j=0; j < 8; j++){
      
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

      rect((0+(width-20)/8*i)+10,(0+(height-20)/8*j)+10,(width-20)/8,(height-20)/8);
    }
  }
}
