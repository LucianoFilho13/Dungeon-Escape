//Dungeon Escape
var garoto, garoto_img; //O garoto
var meninoandar, meninopularasalturas, meninoparado, meninometerpaulada;
var faciliaravidanocodigoatacando;
var protegeressedemoninozinho;

//NPCS
//Inimigos
var inimigopernudo, inimigopernudoimg;
var inimigoanderson, inimigoandersonimg;
var inimigorodolfo, inimigorodolfoimg;
var inimigoaontonio, inimigoaontonioimg;

//Cenario garainho
var cenarionaolegal, cenariolegalobj, cenariopedralegal;
var areapressionecontinuar; //Area que tem que colidir para continuar
var cenariopedraleft, cenarioescright; //Cenarios com detalhes escuros

var jorginhodochao; //O chão

var pretocirculo, pretocirculoobj; //Preto entre cenarios

var porta, portaimg, areaporta; //Portinha legal UAU

var muro1, muro2, muro3; //Muro obj
var muro1img, muro2img, muro3img; //Muro img

var jorginhodochaopedra; //Chão do cenario de pedra

//Barreira
var barleft, barright, barup;

//Vida
var avidaedura, avidaedura1, avidaedura2, avidaedura3, avidaedura4;
var avidaeduraimg, avidaeduralegal;

//Geo
var geoobj, geoimg;

//Camera
let cam; //Criar ela

//Botões
var enterimg;
var Eimg;

//Estados
var estadodojogo; //Estado do jogo
var vidacounter; //Contador de vida

function preload(){ // função que carregar todas as imagens e animações
  garoto_img = loadImage("./assets/Imagem2.png")

  meninoandar = loadAnimation("./assets/MENINO1.png","./assets/MENINO2.png","./assets/MENINO3.png","./assets/MENINO4.png","./assets/MENINO5.png","./assets/MENINO2.png","./assets/MENINO3.png","./assets/MENINO4.png","./assets/MENINO5.png")
  meninopularasalturas = loadAnimation("./assets/voa1.png","./assets/voa2.png","./assets/voa3.png","./assets/voa3.png","./assets/voa3.png","./assets/voa4.png","./assets/voa4.png","./assets/voa4.png","./assets/voa3.png","./assets/voa4.png","./assets/voa4.png","./assets/voa4.png")
  meninoparado = loadImage("./assets/MENINO1.png")
  meninometerpaulada = loadAnimation("./assets/attack1.png","./assets/attack2.png","./assets/attack3.png","./assets/attack4.png","./assets/attack5.png","./assets/attack6.png");

  cenarionaolegal = loadImage("./assets/cenario.jpg")
  cenariopedralegal = loadImage("./assets/cenariocorredor.png")
  cenariopedraleft = loadImage("./assets/cenarioescleft.png");
  cenarioescright = loadImage("./assets/cenarioescright.png")

  portaimg = loadImage("./assets/portamaldita.png")

  pretocirculo = loadImage("./assets/pretoborrado.png")

  enterimg = loadImage("./assets/pressenterbtn.png")
  Eimg = loadImage("./assets/pressEbtn.png")

  muro1img = loadImage("./assets/muro1.png");

  avidaeduraimg = loadImage("./assets/masc.png");
  geoimg = loadImage("./assets/geoimg.png");

  inimigopernudoimg = loadImage("./assets/inm4.png");
  inimigoandersonimg = loadImage("./assets/inm1.png");
  inimigoaontonioimg = loadImage("./assets/inm5.png");
  inimigorodolfoimg = loadImage("./assets/inm6.png");
}

function setup(){ // todas as configuraçoes dos objetos
  createCanvas(2000,1000,WEBGL);
  //cenariodnv = createSprite(1000,500);
  cenariolegalobj = createSprite(1000,250);
  cenariolegalobj.addImage(cenarionaolegal);
  cenariolegalobj.scale = 3.1
  cenariolegalobj.depth = cenariolegalobj.depth -20; 

  faciliaravidanocodigoatacando = false;

  /*
  pretocirculoobj = createSprite(1990,500);
  pretocirculoobj.addImage(pretocirculo);
  pretocirculoobj.scale = 0.06
  */

  porta = createSprite(6500,630)
  porta.addImage(portaimg);
  porta.scale = 1;

  areaporta = createSprite(6550,740,50,50)
  areaporta.visible = 0;

  muro1 = createSprite(4200,400);
  muro1.addImage(muro1img);
  muro1.scale = 1.7

  vidacounter = 5; //Definir contador de vida para 5 no começo

  garoto = createSprite(1000,630,150,200)
  garoto.addImage(meninoparado)
  garoto.addAnimation("andando",meninoandar)
  garoto.addAnimation("pulando",meninopularasalturas)
  garoto.addAnimation("ataque",meninometerpaulada)
  garoto.scale = 1.3

  inimigopernudo = createSprite(3200,660);
  inimigopernudo.addImage(inimigopernudoimg);
  inimigopernudo.scale = 1.4;

  //Chão
  jorginhodochao = createSprite(1000,850,2000,200) //Chãozin
  jorginhodochao.visible = 0;
  jorginhodochaopedra = createSprite(5000,850,10000,200)
  jorginhodochaopedra.visible = 0;

  barleft = createSprite(0,500,10,1000)
  barright = createSprite(2000,500,10,1000)
  barup = createSprite(6000,0,10000,10)
  barleft.visible = 0;
  barright.visible = 0;
  barup.visible = 0;

  areapressionecontinuar = createSprite(2000,500,200,1000)
  areapressionecontinuar.visible = 0; //Ficar invissivel

  //Vida
  avidaedura = createSprite(100,100,20,20);
  avidaedura.addImage(avidaeduraimg);
  avidaedura.scale = 0.7;

  avidaedura1 = createSprite(200,100,20,20);
  avidaedura1.addImage(avidaeduraimg);
  avidaedura1.scale = 0.7;

  avidaedura2 = createSprite(300,100,20,20);
  avidaedura2.addImage(avidaeduraimg);
  avidaedura2.scale = 0.7;

  avidaedura3 = createSprite(400,100,20,20);
  avidaedura3.addImage(avidaeduraimg);
  avidaedura3.scale = 0.7;

  avidaedura4 = createSprite(500,100,20,20);
  avidaedura4.addImage(avidaeduraimg);
  avidaedura4.scale = 0.7;

  avidaeduralegal = 5;

  //Geo
  geoobj = createSprite(100,200,20,20);
  geoobj.addImage(geoimg);
  geoobj.scale = 0.143
  text("0",geoobj.x +100,200)

  cam =  createCamera(); //Criar objeto da Camera
  cam.setPosition(1000,500,865)

  estadodojogo = "PRISÃO"
}

function draw(){
  background("black");
  image(cenariopedraleft,2000,0,2000,1500)
  image(cenariopedralegal,4000,0,2000,1500)
  image(cenarioescright,6000,0,2000,1500)
  image(cenarioescright,-2000,0,2000,1500)
  image(portaimg,3100,460,360,339)
  image(portaimg,4800,460,360,339)

  drawSprites(); 

  //Garoto colidir com os Objetos
  garoto.collide(jorginhodochao);
  garoto.collide(jorginhodochaopedra);
  garoto.collide(muro1);

  garoto.velocityY += 0.5; //Gravidade Player
  inimigopernudo.collide(jorginhodochao);

  //garoto.debug = true; //Abilitar colisão
  //inimigopernudo.debug = true;
  //muro1.debug = true;
  //areapressionecontinuar.debug = true;
  //jorginhodochao.debug = true;
 /*
  if (garoto.velocityY === 0){
    garoto.changeAnimation("andando",meninoandar)
    garoto.scale = 1.3;
    //garoto.setCollider("rectangle", 0,-5,70,-105);
  }
  */

  //Ajustar colisão
  garoto.setCollider("rectangle", 0,-5,70,-105);
  inimigopernudo.setCollider("rectangle", 0,-10,70,-115);
  muro1.setCollider("rectangle", 0,-10,160,40);

  //console.log(garoto.velocityY)

  if (garoto.collide(areapressionecontinuar)){
    image(enterimg,900,750,150,150)
    if (keyDown("enter")){
      estadodojogo = "CORREDOR"
    }
  }

  if (garoto.collide(areaporta)){
    image(enterimg,garoto.x,750,150,150)
    //console.log("Encostando")
    if (keyDown("enter")){
      estadodojogo = "SALA GRANDE"
    }
  }

  //console.log(inimigorodolfo)
  if (inimigorodolfo !== undefined && garoto.collide(inimigorodolfo)){
    avidaeduralegal -= 1;
    garoto.x -= 150
  }

 //Chamar funções
 keyboard();
 collidebar();
 estcorredor();
 collideobj();
 avidaedurafuncao();
 fazerosinimigosaparecerparameterpaulada();
}

//Funções
function keyboard(){ //Teclado
  if (estadodojogo === "PRISÃO" || estadodojogo === "SALA GRANDE"){
    if (keyDown("D")){
      garoto.x =  garoto.x +10
      garoto.changeAnimation("andando",meninoandar )
     }
     if (keyDown("A")){
       garoto.x =  garoto.x -10
       garoto.changeAnimation("andando",meninoandar )
      }


      if (keyDown("E")){ //Ataque
        garoto.changeAnimation("ataque", meninometerpaulada);
        garoto.scale = 1.7
        protegeressedemoninozinho = createSprite(garoto.x + 50,garoto.y,10,100)
        protegeressedemoninozinho.visible = 0;
        protegeressedemoninozinho.velocityX = +4;
        faciliaravidanocodigoatacando = true
        if (inimigopernudo.collide(protegeressedemoninozinho) && protegeressedemoninozinho !== undefined){
          inimigopernudo.destroy();
        }
        setTimeout(() => {
          garoto.changeAnimation("andando",meninoandar)
          garoto.scale = 1.3
          setTimeout(() => {
            faciliaravidanocodigoatacando = false;
            protegeressedemoninozinho.destroy()
          }, 1500);
        }, 500);
      }


  } else {
    if (keyDown("D")){
      garoto.x += 10
      cam.setPosition(garoto.x +10,500,865) //garoto.y -99.5
     }
   
     if (keyDown("A")){
       garoto.x -= 10
       cam.setPosition(garoto.x -10,500,865) //garoto.y -99.5
      }

      if (keyDown("E")){ //Ataque
        garoto.changeAnimation("ataque", meninometerpaulada);
        garoto.scale = 1.7
        protegeressedemoninozinho = createSprite(garoto.x + 50,garoto.y,10,100)
        protegeressedemoninozinho.visible = 0;
        //protegeressedemoninozinho.velocityX = +4;
        faciliaravidanocodigoatacando = true
        if (inimigopernudo.collide(protegeressedemoninozinho) && protegeressedemoninozinho !== undefined){
          inimigopernudo.destroy();
          protegeressedemoninozinho.destroy();
        }
        setTimeout(() => {
          garoto.changeAnimation("andando",meninoandar)
          garoto.scale = 1.3
          setTimeout(() => {
            faciliaravidanocodigoatacando = false;
            protegeressedemoninozinho.destroy()
          }, 1500);
        }, 500);
      }

  }
}
function keyPressed(){ //Pulo
  if (keyCode === 32 && garoto.velocityY === 0.5){
    garoto.velocityY -= 20
    //cam.setPosition(garoto.x,500,865) //garoto.y -200
    garoto.changeAnimation("pulando",meninopularasalturas)
    garoto.scale = 1.9;
    garoto.setCollider("rectangle", 0,-5,70,-105);
    setTimeout(() => {
      garoto.changeAnimation("andando",meninoandar)
      garoto.scale = 1.3;
    }, 1000);
    //garoto.setCollider("rectangle", 0,30,70,-115);

  }
}
function collidebar(){ //Colisão de barreiras
   garoto.collide(barleft);
   garoto.collide(barright);
   garoto.collide(barup);
}
function collideobj(){

}
function estcorredor(){
  if (estadodojogo === "CORREDOR"){
    areapressionecontinuar.destroy();
    //cenariolegalobj.addImage(cenariopedralegal)
    //cenariolegalobj.scale = 0.8
    //garoto.x = 500
    barright.x = 8000
    avidaedura4.x = garoto.x -900
    avidaedura3.x = garoto.x -800
    avidaedura2.x = garoto.x -700
    avidaedura1.x = garoto.x -600
    avidaedura.x = garoto.x -500

    geoobj.x = garoto.x -900
  }
}
function estsalagrande(){

}
function avidaedurafuncao(){
  if (avidaeduralegal === 4){
    avidaedura4.destroy()
  }
  if (avidaeduralegal === 3){
    avidaedura3.destroy()
  }
  if (avidaeduralegal === 2){
    avidaedura2.destroy()
  }
  if (avidaeduralegal === 1){
    avidaedura1.destroy()
  }
  if (avidaeduralegal === 0){
    avidaedura.destroy()

  }
}
function fazerosinimigosaparecerparameterpaulada(){
  if (frameCount % 100 === 0){
    inimigorodolfo = createSprite(random(2700,3950),670)
    var aleatorio = Math.round(random(1,3))
    switch(aleatorio){

      case 1:
      inimigorodolfo.addImage(inimigorodolfoimg)
      break

      case 2:
      inimigorodolfo.addImage(inimigoaontonioimg)
      break

      case 3:
      inimigorodolfo.addImage(inimigopernudoimg)
      break

    }
  }
}