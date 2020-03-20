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
    constructor()
    {
        // Log constructor end
        console.log("UtilityTools.PauseManager created!")
        this.pause = false;
    } 

    togglePause()
    {
        this.pause = !this.pause
        objPlayer.pause();
        if (this.pause)
        {
            utilityTools.soundManager.effectPause.play();

            if (utilityTools.soundManager.currentSong.isPlaying)
                utilityTools.soundManager.currentSong.pause()

        }
        else
        {
            utilityTools.soundManager.effectPause.play();

            if (utilityTools.soundManager.currentSong.isPaused)
                utilityTools.soundManager.currentSong.resume()
        }
    }
}



// Base class =====================================================================================
class UtilityTools
{
    constructor()
    {
        this.soundManager = new SoundManager();
        this.backgroundManager = new BackgroundManager();
        this.pauseManager = new PauseManager();
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