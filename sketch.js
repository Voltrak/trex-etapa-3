
var trex ,trex_running;
var suelo, sueloimagen;
var sueloinvicible;
var nube;
var nubeimagen;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  sueloimagen = loadImage("ground2.png")
  nubeimagen = loadImage("cloud.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("correr",trex_running)
  trex.scale=0.5
  suelo = createSprite(200,180,400,20)
  suelo.addImage("suelo", sueloimagen)
  sueloinvicible = createSprite(200,190,400,10)
  sueloinvicible.visible = false;
 
}

function draw(){
  background("wite")
  suelo.velocityX = -2
  if(suelo.x<0){
    suelo.x = suelo.width/2;



  } 
  //tecla para detectar el salto
  if(keyDown ("space") && trex.y >=120){
    trex.velocityY = -10
  }

trex.velocityY = trex.velocityY + 0.8
trex.collide(sueloinvicible);
//llamador de las funciones de las nubes
spawnClouds();
  drawSprites();
  }

//creacion de las funciones de la nubes
function spawnClouds(){
  if(frameCount % 60 === 0){
    nube = createSprite(600,100,40,10)
    nube.addImage(nubeimagen);
    nube.scale = 0.4;
    nube.y = Math.round(random(10,110))
    nube.velocityX = -3

    //ajustar la profundidad 
    //depth en la profundidad
    nube.depth = trex.depth
    trex.depth = trex.depth +1

    console.log(trex.depth)
    console.log(nube.depth);
  }
}