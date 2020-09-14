function preload ()
{
    // Image filename array. Expects .png fileformat only
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
        "bullet",
        "effects-on",
        "effects-off",
        "play",
        "pause",
        "overlay-paused",
        "enemy"
    ]

    // Image filename array. Expects .mp3 fileformat only
    let audioMp3 = [
        "chaoz-fantasy"
    ];
    // Image filename array. Expects .oog fileformat only
    let audioOgg = [
        "pause"
    ];
    // Image filename array. Expects .wav fileformat only
    let audioWav = [
        "coin"
    ];


    //=======================
    // File loading functions
    //=======================

    // load all images
    this.load.image('red', 'http://labs.phaser.io/assets/particles/red.png');
    images.forEach(element => 
    {
        this.load.image(element, "img/" + element + ".png")
    });

    // Load all mp3 audiofiles
    audioMp3.forEach(song => 
    {
        this.load.audio(song, "audio/" + song + ".mp3")
    });

    // Load all ogg audiofiles
    audioOgg.forEach(song => 
    {
        this.load.audio(song, "audio/" + song + ".ogg")
    });

    // Load all wav audiofiles
    audioWav.forEach(song => 
    {
        this.load.audio(song, "audio/" + song + ".wav")
     });

    console.log("Preload finished")

}