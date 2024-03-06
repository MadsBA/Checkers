function setup() {
  createCanvas(840, 840);
}

function draw() {
  background(202);
  for (let i=0; i < 7; i++){
    for (let j=0; j < 7; j++){
      //fill(farve)
      rect((0+(width-20)/7*i)+10,(0+(height-20)/7*j)+10,(width-20)/7,(height-20)/7);
      //if (fill == 0){
        //fill(220);
      //} else {
        //fill(0);
      //}
    }
  }
}
