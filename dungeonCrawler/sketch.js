let frame=0;

let playerX=266;
let playerY=236;

let tiler2=0;
let tiler3=0;

var tiles = [];
let tilesCount=0;
let z=0;
let xPos=0;
let yPos=0;
let y2=0;
let x2=0;

let walkF=0;
let timerCount=0;
let input=0;

let walkTimer;

let recharge=0;

//0, 64, 128, 192, 256, 320, 384, 448, 512, 576, 640

function getRandomInt(max) {
  return Math.floor((Math.random() * max)+1);
}

//155, 173, 183 center
//173, 194, 200 highlights
//126, 141, 170 corners
//41, 29, 49 border
//77, 71, 103 dark center

function tile1(x, y) {
  noStroke();
  fill(41, 29, 49);
  square(x,y,64);
  fill(173, 194, 200);
  square(x+2,y+2,60);
  fill(155, 173, 183);
  square(x+2,y+2,56);
  fill(126, 141, 170);
  square(x+2,y+2,4)
  square(x+58,y+2,4)
  square(x+2,y+58,4)
  square(x+58,y+58,4)
}

function tile2(x, y) {
  noStroke();
  fill(41, 29, 49);
  square(x,y,64);
  fill(173, 194, 200);
  square(x+2,y+2,60);
  fill(155, 173, 183);
  square(x+2,y+2,56);
  fill(126, 141, 170);
  square(x+2,y+2,4);
  square(x+58,y+2,4);
  square(x+2,y+58,4);
  square(x+58,y+58,4);
  fill(173, 194, 200);
  rect(x+26,y+2,4,60);
  rect(x+2,y+26,60,4);
  fill(126, 141, 170);
  rect(x+30,y+2,4,60);
  rect(x+2,y+30,60,4);
  fill(77, 71, 103);
  rect(x+26,y+30,12,4);
  rect(x+30,y+26,4,12);
  fill(126, 141, 170);
  rect(x+42,y+54,4,8);
  rect(x+46,y+58,4);
  fill(173, 194, 200);
  rect(x+38,y+54,4);
  fill(155, 173, 183);
  rect(x+34,y+58,4);
}

function tile3(x, y) {
  noStroke();
  fill(41, 29, 49);
  square(x,y,64);
  fill(173, 194, 200);
  square(x+2,y+2,60);
  fill(155, 173, 183);
  square(x+2,y+2,56);
  fill(126, 141, 170);
  square(x+2,y+2,4)
  square(x+58,y+2,4)
  square(x+2,y+58,4)
  square(x+58,y+58,4)
  fill(173, 194, 200);
  rect(x+38,y+38,4,20);
  rect(x+42,y+34,4);
  rect(x+46,y+30,12,4);
  rect(x+10,y+10,4);
  rect(x+14,y+2,4,8);
  fill(126, 141, 170);
  rect(x+42,y+38,4,20);
  rect(x+46,y+34,12,4);
  rect(x+46,y+58,4);
  rect(x+14,y+10,8,4);
  rect(x+18,y+2,8,4);
  rect(x+18,y+6,4);
  fill(77, 71, 103);
  rect(x+18,y+2,4);
  rect(x+58,y+34,4);
  rect(x+42,y+54,4,8);
}

function tilingSetup(){
  for(let x=0;x<1020;x++){
  tiles.push(getRandomInt(6));
  }
}

function tiling(left,right,up,down){
  for(let x=left+4;x<right+5;x++){
    for(let y=up+4;y<down+5;y++){
      z=tiles[tilesCount];
      
      y2=(64*y)+yPos;
      x2=(64*x)+xPos;
      if(frame>60){
        frame=0;
      }


      if(z==1&&tiler3==0){
        tile3(x2,y2);
        tiler3=1;
        tiler2=0;
      }
      else if(z==2&&tiler2==0){
        tile2(x2,y2);
        tiler2=1;
        tiler3=0;
      }
      else if(z>2||(tiler2==1||tiler3==1)){
        tile1(x2,y2);
        tiler2=0;
        tiler3=0;
      }
      tilesCount++;
    }
  }
  tilesCount=0;
}

function walk() {
  timerCount++;
  if(timerCount<=8){
    if(input==1){
      xPos+=8;
    }
    if(input==2){
      xPos-=8; 
    }
    if(input==3){
      yPos+=8; 
    }
    if(input==4){
      yPos-=8; 
    }
  }
}

function setup() {
  var cnv = createCanvas(576, 640);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  tilingSetup();
  print(tiles.toString())
}

/* chest     (190, 208, 217);
arms         (128, 147, 164);
shadow armor (52, 57, 92);
black        (17, 18, 21);
light oarange(232, 144, 9);
dark orage   (184, 80, 0); */

function player(x,y){
  fill(128, 147, 164);
  rect(x+16,y+4,12,12);
  rect(x+28,y+20,4,24);
  rect(x+12,y+20,4,8);
  rect(x+12,y+32,4,4);
  rect(x+8,y+44,8,4);
  rect(x+4,y+40,8,4);
  rect(x+4,y+36,4,4);
  rect(x+20,y+16,4,4)

  fill(190, 208, 217);
  rect(x+16,y+20,12,20);
  rect(x+4,y+32,8,4);
  rect(x+8,y+36,8,4);
  rect(x+12,y+40,4,4);
  rect(x+8,y+48,4,4);
  rect(x+4,y+44,4,4);
  rect(x+12,y+60,4,4);
  rect(x+24,y+60,4,4);

  fill(52, 57, 92);
  rect(x+12,y+4,4,12);
  rect(x+16,y+16,4,4);
  rect(x+8,y+20,4,8);
  rect(x+20,y+40,8,8);
  rect(x+24,y+48,4,12);
  rect(x+12,y+52,4,8);


  fill(17, 18, 21);
  rect(x+24,y+8,4,8);
  rect(x+20,y+8,4,4);

  fill(232, 144, 9);
  rect(x+4,y+4,4,8);
  rect(x+8,y+0,4,4);
  rect(x+8,y+28,8,4);
  rect(x+16,y+32,4,12);
  rect(x+32,y+40,4,4);
  rect(x+28,y+44,4,4);

  fill(184, 80, 0);
  rect(x+32,y+44,4,8);
  rect(x+12,y+48,4,4);
  rect(x+16,y+44,4,4);
  rect(x+8,y+52,4,4);
  rect(x+4,y+48,4,4);
  rect(x+0,y+32,4,16);
  rect(x+4,y+28,4,4);
  rect(x+4,y+12,4,4);

  fill(240);
  rect(x+36,y+44,20,4);


}

function draw() {
    frame++;
  if(walkF<64){
    walkF++;
  }
  background(0);
  tiling(-1,1,-1,1);
  tiling(2,2,-0,0);
  tiling(3,12,-3,3);
  noStroke();
  fill(61, 204, 53);
  rect(0, 576, 576, 64);
  fill(46, 135, 41);
  rect(0, 576, 576, 8);
  fill(255,0,0);
  player(playerX,playerY);
  fill(0);
  rect(18,588,124,36);
  rect(14,592,132,28);
  if(frame%120==0){
    print(x2);
    print(y2);
  }

  if(walkF<64){
    recharge++;
  }
  fill(255,0,0);
  rect(18,592,walkF*2-4,28);
  fill(155,0,0);
  rect(18,616,walkF*2-4,4);




  //walk left
  if (keyIsDown(65)&&walkF==64){
    input=1
    walkTimer= setInterval(walk, 25)
    if(timerCount>4){
    timerCount=0;
    clearInterval(walkTimer);  
    }
    walkF=0;
  }

  //walk right
  if (keyIsDown(68)&&walkF==64){
    input=2
    walkTimer= setInterval(walk, 25)
    if(timerCount>4){
    timerCount=0;
    clearInterval(walkTimer);  
    }
    walkF=0;
  }

  //walk up
  if (keyIsDown(87)&&walkF==64){
    input=3
    walkTimer= setInterval(walk, 25)
    if(timerCount>4){
    timerCount=0;
    clearInterval(walkTimer);  
    }
    walkF=0;
  }

  //walk down
  if (keyIsDown(83)&&walkF==64){
    input=4
    walkTimer= setInterval(walk, 25)
    if(timerCount>4){
    timerCount=0;
    clearInterval(walkTimer);  
    }
    walkF=0;
  }
}
