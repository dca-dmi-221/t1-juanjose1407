let songs=[];
let image
let onesong = 1;
let go ;

for (let i = 0; i < onesong; i++) {
  songs.push(new list({name:"RECKLESS LOVE",life:348,address:"RECKLESS LOVE.mp3"}));
  songs.push(new list({name:"KISSIN DYNAMITE",life:344,address:"KISSIN DYNAMITE.mp3"}));
  songs.push(new list({name:"DYNAZTY",life:425,address:"DYNAZTY.mp3"}));
  songs.push(new list({name:"NASHVILLE PUSSY",life:318,address:"NASHVILLE PUSSY.mp3"}));
  songs.push(new list({name:"HARDCORE SUPERSTAR",life:429,address:"HARDCORE SUPERSTAR.mp3"}));
  songs.push(new list({name:"THE QUIREBOYS",life:335,address:"THE QUIREBOYS.mp3"}));
  songs.push(new list({name:"BANDMAID",life:347,address:"BANDMAID.mp3"}));
  songs.push(new list({name:"THE HELLACOPTERS",life:308,address:"THE HELLACOPTERS.mp3"}));
  songs.push(new list({name:"ARCH ENEMIES",life:406,address:"ARCH ENEMIES.mp3"}));
  songs.push(new list({name:"STEEL PANTHER",life:219,address:"STEEL PANTHER.mp3"}));
  songs.push(new list({name:"KIX",life:421,address:"KIX.mp3"}));
  songs.push(new list({name:"FASTER PUSSYCAT",life:435,address:"FASTER PUSSYCAT.mp3"}));
}

function preload() {
  image[0] = loadImage("ARCH ENEMIES.mp3");
  image[1] = loadImage("BAND MAID.mp3");
  image[2] = loadImage("DYNASTY.mp3");
  image[3] = loadImage("FASTER PUSSYCAT.mp3");
  image[4] = loadImage("HARDCORE SUPERSTAR.mp3");
  image[5] = loadImage("KISSIN DYNAMITE.mp3");
  image[6] = loadImage("KIX.mp3");

  for (let i = 0; i < songs.length; i++) {
    go = loadSound(songs[0].getAddress())
    
  }
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





