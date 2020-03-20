// globals
let objPlayer;
let speed = 50;


// ui
let musicButton;
let backgroundUpper
let backgroundLower
let frame

let coins;
let entities;
let updateEntities = []
let playerGroup;
let utilityTools;


function create ()
{
    utilityTools = new UtilityTools();
    utilityTools.create();
    // Configure keyboard input
    this.keyUp = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.keyDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.keyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyShoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.keyPause = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);



    backgroundUpper = this.add.image(100,100,"forest");
    backgroundLower = this.add.image(100,-100,"forest");
    frame = this.add.image(100,100,"frame");
    frame.setDepth(10);


    //var particles = this.add.particles('red');
    var particles = this.add.particles('orb')

    var particleConfigBoost = {
        speed: 150,
        scale: { start: .5, end: 0 },
        blendMode: 'ADD',
        scale:{"start":.10,"end":.50,"ease":"Linear"},
        tint:[15988614,16761538],
        alpha:{"start":1,"end":0,"ease":"Linear"},
        angle:{"min":85,"max":95,"ease":"Linear"},
        lifespan:{"start":150,"end":200,"ease":"Linear"}
    }
    var emitterLeft = particles.createEmitter(particleConfigBoost);

    var emitterRight = particles.createEmitter(particleConfigBoost);


    musicButton = this.add.image(200-4-8,4+8,"audio-off");
    musicButton.setDepth(20);
    musicButton.setInteractive();
    musicButton.on('pointerdown', () => utilityTools.soundManager.toggleAudio() );
    musicButton.on('pointerover', () => {musicButton.setAlpha(0.50)} );
    musicButton.on('pointerout', () => {musicButton.setAlpha(1)} );

    entities = this.physics.add.group();
    coins = this.physics.add.group();
    playerGroup = this.physics.add.group();

    this.physics.add.overlap(playerGroup, coins, collectCoin, null, this);



    objPlayer = new Ship()
    updateEntities.push(objPlayer)

    emitterLeft.startFollow(objPlayer.object,-6,4);
    emitterRight.startFollow(objPlayer.object,6,4);


}
