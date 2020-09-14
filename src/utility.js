/*  Collection of utility classes
*   - SoundManager
*   - BackgroundManager
*   - PauseManager
*/

// SoundManager ==============================================================================
class SoundManager
{
    constructor()
    {
        // Member variables
        this.currentSong = null;
        this.boolPlayAudio = false;
        this.boolPlayEffects = false;
        this.name = "SoundManager: "

        // Music list
        this.backgroundChaozFantasy = game.sound.add("chaoz-fantasy")

        this.dict = {};
    }

    addSoundToDictionary(name)
    {
        let sound = game.sound.add(name);
        this.dict[name] = sound;
        return sound;
    }

    addSoundToDictionaryWithVolume(name,volume)
    {
        this.addSoundToDictionary(name).setVolume(volume)
    }

    playSoundEffect(name)
    {
        if (!this.boolPlayEffects)
            return;

        let sound = this.dict[name];
        if (sound == null)
        {
            console.warn(this.name + "Unable to find sound " + name)
        }
        else
        {
            sound.play()
        }
    }

    create()
    {
        this.currentSong = this.backgroundChaozFantasy;
        this.addSoundToDictionaryWithVolume("coin",.5);
        this.addSoundToDictionary("pause");

        console.log("UtilityTools.SounManager created!")
    }

    toggleEffects()
    {
        this.boolPlayEffects = !this.boolPlayEffects
        if (this.boolPlayEffects)
            {
                effectsButton.setTexture("effects-on");
            }
        else
            {
                effectsButton.setTexture("effects-off");
            }
    }
    

    toggleAudio()
    {
        this.boolPlayAudio = !this.boolPlayAudio
        if (this.boolPlayAudio)
            {
                if (this.currentSong.isPaused)
                    this.currentSong.resume();
                else
                    this.currentSong.play();
                musicButton.setTexture("audio-on");
            }
        else
            {
                this.currentSong.pause();
                musicButton.setTexture("audio-off");
            }
    }
}

// BackgroundManager ==============================================================================
class BackgroundManager
{
    constructor()
    {
        // Log constructor end
        console.log("UtilityTools.BackgroundManager created!")
    } 
}


// SpawnManager ==============================================================================
class SpawnManager
{
    constructor(context)
    {
        this.context = context;
        // Log constructor end
        console.log("UtilityTools.SpawnManager created!")
    } 

    update()
    {
        if (Math.random()*100 < 2)
        {
            new Enemy();
        }
    }
}

// PauseManager ===================================================================================
class PauseManager
{
    constructor(_this)
    {
        // set this._this to _this
        this._this = _this



        // Log constructor end
        console.log("UtilityTools.PauseManager created!")
        this.pause = false;
        this.pauseOverlay;
    } 

    togglePause()
    {
        this.pause = !this.pause
        objPlayer.pause();
        if (this.pause)
        {
            this.pauseOverlay = this._this.add.image(100,100,"overlay-paused");
            this.pauseOverlay.setDepth(20);

            utilityTools.soundManager.playSoundEffect("pause")
            pauseButton.setTexture("pause")

            if (utilityTools.soundManager.currentSong.isPlaying)
                utilityTools.soundManager.currentSong.pause()

        }
        else
        {
            this.pauseOverlay.destroy()
            utilityTools.soundManager.playSoundEffect("pause")
            pauseButton.setTexture("play")
            if (utilityTools.soundManager.currentSong.isPaused && utilityTools.soundManager.boolPlayAudio)
            {
                utilityTools.soundManager.currentSong.resume()

            }
        }
    }
}



// Base class =====================================================================================
class UtilityTools
{
    constructor(_this)
    {
        this.soundManager = new SoundManager();
        this.backgroundManager = new BackgroundManager();
        this.pauseManager = new PauseManager(_this);
        this.spawnManager = new SpawnManager(_this);
    }

    update()
    {
        // update all UtilityTools members that need updating
        this.spawnManager.update();

    }

    create()
    {
        // create for all UtilityTools members that need creation
        this.soundManager.create();
    }
}