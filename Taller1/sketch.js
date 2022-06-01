songs=[];
indice=0;
namesSongs=["GreenA","Alhan"]

function preload() {
  songs[0] = loadSound("GreenA.mp3");
  songs[1] = loadSound("alhan.mp3");
  
}

function setup() {
  createCanvas(800, 400);
  background("white");
  botonPlay=createButton("Play");
  botonPlay.mousePressed(Play);
  botonStop=createButton("Stop");
  botonStop.mousePressed(Stop);
  botonNext=createButton("Next");
  botonNext.mousePressed(Next);
}

function draw() {
background("green");
textSize(30);
text(namesSongs[indice],width/2,height/2);
}

function Play(){
  songs[indice].play();
  console.log(namesSongs[indice]);
}

function Stop(){
  songs[indice].stop();
}
function Next(){
  Stop();
  if(indice<songs.length-1){
  indice+=1;
  }
  else{
    indice=0;
  }
  Play();
}



