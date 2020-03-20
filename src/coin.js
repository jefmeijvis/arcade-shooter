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
    }

    destroy()
    {
        console.log("ded")
    }

}

function collectCoin(player , coin)
{
    objPlayer.addScore(1);
    coin.destroy()
}