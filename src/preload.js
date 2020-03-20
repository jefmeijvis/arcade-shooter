function preload ()
{

    let images = [
        "debug-background",
        "sphere",
        "tiles",
        "ship",
        "forest",
        "forest-brown",
        "frame",
        "audio-on",
        "audio-off",
        "orb",
        "coin",
        "bullet"
    ]

    let audio = ["chaoz-fantasy"];


    // load all images
    this.load.image('red', 'http://labs.phaser.io/assets/particles/red.png');
    images.forEach(element => 
    {
        this.load.image(element, "img/" + element + ".png")
    });

    audio.forEach(song => 
    {
        this.load.audio(song, "audio/" + song + ".mp3")
    });

    this.load.audio("pause", "audio/pause" + ".ogg")


    console.log("Preload finished")

}