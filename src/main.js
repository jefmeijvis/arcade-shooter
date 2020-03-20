// initialise config

var config = {
    type: Phaser.AUTO,
    width: 200,
    height: 200,
    pixelArt: true,
    zoom: 3,
    physics: {
        default: 'arcade',
        arcade: {
            
        }
    },
    scene: {
        preload: preload,
        create: create,
        update : update
    }
};


// start game
var game = new Phaser.Game(config);



