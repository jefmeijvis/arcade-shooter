class Coin
{
    constructor(x , y)
    {
        if (x === undefined)
        {
            console.log("Undefined!");
            x = Math.random()*200;
            x = Math.floor(x/8) * 8;
        };

        if (y === undefined)
        {
            y = objPlayer.time%8;
        }

        console.log(x + "-" + y);
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
    scoreText.setText(objPlayer.score)
    coin.destroy()
}