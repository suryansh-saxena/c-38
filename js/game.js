class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    lamborgini = createSprite(100,200)
    ferrari = createSprite(300,200)
    audi = createSprite(500,200)
    formula260 = createSprite(700,200) 

    cars = [lamborgini,ferrari,audi,formula260]
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var index = 0
      var x = 0
      var y 

      for(var plr in allPlayers){
        index = index+1//1
        x = x+200
        
        y = displayHeight - allPlayers[plr].distance
        cars[index - 1].x = x
        cars[index-1].y = y
        if(index === player.index){
         cars[index - 1].shapeColor = "blue"

         camera.position.x = displayWidth/2
         camera.position.y =cars[index-1].y        }
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }

    drawSprites();
  }

}