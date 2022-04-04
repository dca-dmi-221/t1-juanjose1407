let songs=[];
let ima =[];
let onesong = 1;
let go;
let bands;
let pausesong=false;


for (let i = 0; i < onesong; i++) {
  songs.push(new List({name:"RECKLESS LOVE",life:348,address:"peace/RECKLESS LOVE.mp3"}));
  songs.push(new List({name:"KISSIN DYNAMITE",life:344,address:"peace/KISSIN DYNAMITE.mp3"}));
  songs.push(new List({name:"DYNAZTY",life:425,address:"peace/DYNAZTY.mp3"}));
  songs.push(new List({name:"NASHVILLE PUSSY",life:318,address:"peace/NASHVILLE PUSSY.mp3"}));
  songs.push(new List({name:"HARDCORE SUPERSTAR",life:429,address:"peace/HARDCORE SUPERSTAR.mp3"}));
  songs.push(new List({name:"THE QUIREBOYS",life:335,address:"peace/THE QUIREBOYS.mp3"}));
  songs.push(new List({name:"BANDMAID",life:347,address:"peace/BANDMAID.mp3"}));
  songs.push(new List({name:"THE HELLACOPTERS",life:308,address:"peace/THE HELLACOPTERS.mp3"}));
  songs.push(new List({name:"ARCH ENEMIES",life:406,address:"peace/ARCH ENEMIES.mp3"}));
  songs.push(new List({name:"STEEL PANTHER",life:219,address:"peace/STEEL PANTHER.mp3"}));
  songs.push(new List({name:"KIX",life:421,address:"peace/KIX.mp3"}));
  songs.push(new List({name:"FASTER PUSSYCAT",life:435,address:"peace/FASTER PUSSYCAT.mp3"}));
  
}

function preload() {
  ima[0] = loadImage("Images peace/menu.png");
  ima[1] = loadImage("Images peace/image1.png");
  ima[2] = loadImage("Images peace/image2.png");
  ima[3] = loadImage("Images peace/image3.png");
  ima[4] = loadImage("Images peace/image4.png");
  ima[5] = loadImage("Images peace/image5.png");
  ima[6] = loadImage("Images peace/image6.png");
  ima[7] = loadImage("Images peace/image7.png");
  ima[8] = loadImage("Images peace/image8.png");
  ima[9] = loadImage("Images peace/image9.png");
  ima[10] = loadImage("Images peace/image10.png");
  ima[11] = loadImage("Images peace/image11.png");
  ima[12] = loadImage("Images peace/image12.png");
  ima[13] = loadImage("Images peace/back.png");
  ima[14] = loadImage("Images peace/pause.png");
  ima[15] = loadImage("Images peace/repro.png");

  for (let i = 0; i < songs.length; i++) {
    go = loadSound(songs[0].getAddress())
  }
}

function screenComplete(){
  image(ima[0],0,0)
  image(ima[1],640,360)
  image(ima[2],640,360)
  image(ima[3],640,360)
  image(ima[4],640,360)
  image(ima[5],640,360)
  image(ima[6],640,360)
  image(ima[7],640,360)
  image(ima[8],640,360)
  image(ima[9],640,360)
  image(ima[10],640,360)
  image(ima[11],640,360)
  image(ima[12],640,360)
}

function setup(){
  createCanvas(640,383);
  console.log(songs)
    screenComplete()
    bands=0
    
}
function menu(){
  image(ima[0],0,0)
}
function band1(){
  image(ima[1],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
  //go.loop()
}
function band2(){
  image(ima[2],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
}
function band3(){
  image(ima[3],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
}
function band4(){
  image(ima[4],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
}
function band5(){
  image(ima[5],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
}
function band6(){
  image(ima[6],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
}
function band7(){
  image(ima[7],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
}
function band8(){
  image(ima[8],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
}
function band9(){
  image(ima[9],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
}
function band10(){
  image(ima[10],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
}
function band11(){
  image(ima[11],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
}
function band12(){
  image(ima[12],0,0)
  image(ima[13],20,39)
  if (!pausesong) {
    image(ima[15],316,339)

  }else{
    image(ima[14],316,339)
  }
}

function draw(){
  switch(bands){
    case 0:
      menu()
      break;
      case 1:
        band1()
        break
        case 2:
          band2()
          break
          case 3:
            band3()
            break
            case 4:
              band4()
              break
              case 5:
                band5()
                break
                case 6:
                  band6()
                  break
                  case 7:
                    band7()
                    break
                    case 8:
                      band8()
                      break
                      case 9:
                        band9()
                        break
                        case 10:
                          band10()
                          break
                          case 11:
                            band11()
                            break
                            case 12:
                              band12()
                              break
                            
  }
  fill("red")
  textSize(12)
    text("(" + floor(mouseX) + ", " + floor(mouseY) + ")", mouseX, mouseY);
  for (let i = 0; i < songs.length; i++) {
    let s = songs[i];
    fill (255)
    textSize(20)
    text (songs[0].getName(),890,500)
    s.show();
  }

}
function mousePressed(){
  if (dist(mouseX,mouseY,316,339)<14) {
    pausesong=true
  }
  if (dist(mouseX,mouseY,316,339)<14) {
    !pausesong
  }
  if (dist(mouseX,mouseY,338,347)<12) {
    bands+=1
  }
  if (dist(mouseX,mouseY,296,343)<12) {
    bands-=1
  }
  if (dist(mouseX,mouseY,22,47)<15) {
    bands=0
  }
  if (dist(mouseX,mouseY,64,188)<46) {
    bands=1
  }
  if (dist(mouseX,mouseY,222,179)<46) {
    bands=2
  }
  if (dist(mouseX,mouseY,394,179)<46) {
    bands=3
  }
  if (dist(mouseX,mouseY,565,177)<46) {
    bands=4
  }
  if (dist(mouseX,mouseY,55,261)<46) {
    bands=5
  }
  if (dist(mouseX,mouseY,225,263)<46) {
    bands=6
  }
  if (dist(mouseX,mouseY,396,262)<46) {
    bands=7
  }
  if (dist(mouseX,mouseY,559,260)<46) {
    bands=8
  }
  if (dist(mouseX,mouseY,51,346)<46) {
    bands=9
  }
  if (dist(mouseX,mouseY,224,345)<46) {
    bands=10
  }
  if (dist(mouseX,mouseY,384,347)<46) {
    bands=11
  }
  if (dist(mouseX,mouseY,552,348)<46) {
    bands=12
  }

}





