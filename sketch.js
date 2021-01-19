var form,player,game
var database,position
var canvas,bg 
var gameState = 0
var playerCount
var allPlayers
var cars,lamborgini,ferrari,audi,formula260
function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30)
    database = firebase.database()
game = new Game();
game.getState()
game.start()
  
}



function draw(){
    background("white");
    if(playerCount ===4){
        game.update(1)
    }
    if(gameState === 1){
        clear()
        game.play()

    }
}