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

        // Music list
        this.backgroundChaozFantasy = game.sound.add("chaoz-fantasy")

        // Sound effects list
        this.effectPause = game.sound.add("pause")
    }

    create()
    {
        this.currentSong = this.backgroundChaozFantasy;
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

            utilityTools.soundManager.effectPause.play();
            pauseButton.setTexture("pause")

            if (utilityTools.soundManager.currentSong.isPlaying)
                utilityTools.soundManager.currentSong.pause()

        }
        else
        {
            this.pauseOverlay.destroy()
            utilityTools.soundManager.effectPause.play();
            pauseButton.setTexture("play")

            if (utilityTools.soundManager.currentSong.isPaused)
                utilityTools.soundManager.currentSong.resume()
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
    }

    update()
    {
        // update all UtilityTools members that need updating

    }

    create()
    {
        // create for all UtilityTools members that need creation
        this.soundManager.create();
    }
}