Brikker = [];
MaxNr = 24;

function setup() {
  createCanvas(840, 840);
  for(let i = 0; i< MaxNr; i++){
    Brikker.push(new Brik(random(0,width),random(0,height)));
  }
  
}

function draw() {
  background(202);
  for (let i=0; i < 7; i++){
  rect(0+width/7*i,0,width/7,height/7);
    console.log (i);
    Brik.show();
  }
}
