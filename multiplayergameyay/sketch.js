var backgroundImage;
var gameState = 0;
var playerCount;
var database;
var form, player, game;
var allPlayers;

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount === 4){
        game.update(1)
    }
    if(gameState === 1){
        clear();
        game.play()
    }
    drawSprites();
}

//"AHH! THERE'S AN ERROR! RUN FOR YOUR LIFE! IT'S THE END! WERE ALL DOOMED! . . oh wait, this isn't so bad"