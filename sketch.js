
var player
var computer
var wall
function setup(){
    var canvas = createCanvas(1000,600);
     wall1 = createSprite(500,15,1000,5)
     wall2 = createSprite(500,575,1000,5)
     wall3 = createSprite(15,300,5,600)
     wall4 = createSprite(980,300,5,600)
     wall5 = createSprite(68,250,100,5)
     wall6 = createSprite(200,275,5,50)
     wall7 = createSprite(250,298,100,5)
     wall8 = createSprite(116,400,5,50)
     wall9 = createSprite(163,425,100,5)
     wall10 = createSprite(400,425,5,150)
     wall11 = createSprite(400,500,250,5)
     wall12 = createSprite(522,350,250,5)
     wall13 = createSprite(550,250,300,5)
     wall14 = createSprite(560,190,5,125)
     wall15 = createSprite(643,415,5,125)
     wall16 = createSprite(800,350,200,5)
     wall17 = createSprite(850,500,150,5)
     wall18 = createSprite(800,100,200,5)
     wall19 = createSprite(800,160,5,125)
     wall20 = createSprite(300,100,200,5)
     wall21 = createSprite(69,100,100,5)

     coin = createSprite(67,52,25,25)
     coin.addImage(Coin)
     coin.scale=0.02

     coin1 = createSprite(150,52,25,25)
     coin1.addImage(Coin)
     coin1.scale=0.02

     coin2 = createSprite(250,52,25,25)
     coin2.addImage(Coin)
     coin2.scale=0.02

     coin3 = createSprite(350,52,25,25)
     coin3.addImage(Coin)
     coin3.scale=0.02

     coin4 = createSprite(450,52,25,25)
     coin4.addImage(Coin)
     coin4.scale=0.02

     coin5 = createSprite(550,52,25,25)
     coin5.addImage(Coin)
     coin5.scale=0.02

     coin6 = createSprite(650,52,25,25)
     coin6.addImage(Coin)
     coin6.scale=0.02

     coin7 = createSprite(750,52,25,25)
     coin7.addImage(Coin)
     coin7.scale=0.02

     coin8 = createSprite(850,52,25,25)
     coin8.addImage(Coin)
     coin8.scale=0.02

     coin9 = createSprite(650,550,25,25)
     coin9.addImage(Coin)
     coin9.scale=0.02
     
     coin10 = createSprite(67,550,25,25)
     coin10.addImage(Coin)
     coin10.scale=0.02

     coin11 = createSprite(150,550,25,25)
     coin11.addImage(Coin)
     coin11.scale=0.02

     coin12 = createSprite(250,550,25,25)
     coin12.addImage(Coin)
     coin12.scale=0.02

     coin13 = createSprite(350,550,25,25)
     coin13.addImage(Coin)
     coin13.scale=0.02

     coin14 = createSprite(450,550,25,25)
     coin14.addImage(Coin)
     coin14.scale=0.02

     coin15 = createSprite(550,550,25,25)
     coin15.addImage(Coin)
     coin15.scale=0.02

     coin16 = createSprite(750,550,25,25)
     coin16.addImage(Coin)
     coin16.scale=0.02

     coin17 = createSprite(850,550,25,25)
     coin17.addImage(Coin)
     coin17.scale=0.02

     coin18 = createSprite(67,175,25,25)
     coin18.addImage(Coin)
     coin18.scale=0.02

     coin19 = createSprite(67,450,25,25)
     coin19.addImage(Coin)
     coin19.scale=0.02

     coin20 = createSprite(67,300,25,25)
     coin20.addImage(Coin)
     coin20.scale=0.02

     coin21 = createSprite(150,175,25,25)
     coin21.addImage(Coin)
     coin21.scale=0.02

     coin22 = createSprite(250,175,25,25)
     coin22.addImage(Coin)
     coin22.scale=0.02

    player = createSprite(593,100,25,25)
    player.addImage(Pimage)
    player.scale=0.05
    computer1 = createSprite(445,400,25,25)
    computer1.addImage(Cimage)
    computer1.scale=0.13
    computer2 = createSprite(525,400,25,25)
    computer2.addImage(Cimage)
    computer2.scale=0.13
    computer3 = createSprite(600,400,25,25)
    computer3.addImage(Cimage)
    computer3.scale=0.13

 }
function preload(){
    Pimage=loadImage("Flash.png")
    Cimage=loadImage("Villain.png")
    Coin=loadImage("Coin.png")
}
function draw(){
 background("black")
text (mouseX + "," + mouseY, mouseX, mouseY)
if(keyDown(UP_ARROW)){
    player.y=player.y-2
}
if(keyDown(DOWN_ARROW)){
    player.y=player.y+2
}
if(keyDown(LEFT_ARROW)){
    player.x=player.x-2
}
if(keyDown(RIGHT_ARROW)){
    player.x=player.x+2
}
player.collide(wall1)
player.collide(wall2)
player.collide(wall3)
player.collide(wall4)
player.collide(wall5)
player.collide(wall6)
player.collide(wall7)
player.collide(wall8)
player.collide(wall9)
player.collide(wall10)
player.collide(wall11)
player.collide(wall12)
player.collide(wall13)
player.collide(wall14)
player.collide(wall15)
player.collide(wall16)
player.collide(wall17)
player.collide(wall18)
player.collide(wall19)
player.collide(wall20)
player.collide(wall21)
drawSprites()
}
