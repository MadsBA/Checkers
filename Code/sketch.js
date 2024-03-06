function setup() {
  createCanvas(840, 840);
}

function draw() {
  background(202);
  for (let i=0; i < 7; i++){
  rect(0+width/7*i,0,width/7,height/7);
    console.log (i);
  }
}
