class Coin
{

    constructor()
    {
        let x = Math.random()*200;
        x = Math.floor(x/8) * 8;

        let y = objPlayer.time%8;
        this.object = coins.create(x,y,"coin")
        updateEntities.push(this);
    }

    update()
    {
        this.object.y += 2;
        if (this.object.y > 200)
            this.destroy()
    }

    destroy()
    {
        this.boolAlive = false;
        var i = updateEntities.indexOf(this);
        updateEntities.splice(i, 1);
        this.object.destroy();
    }

}

function collectCoin(player , coin)
{
    utilityTools.soundManager.playSoundEffect("coin")
    objPlayer.addScore(1);
    coin.destroy()
}