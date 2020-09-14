class Bullet
{

    constructor(x,y)
    {
        this.object = bullets.create(objPlayer.object.x,objPlayer.object.y,"bullet")
        updateEntities.push(this);
    }

    update()
    {
        this.object.y -= 5;
        if (this.object.y < 0)
            this.destroy();
    }

    destroy()
    {
        var i = updateEntities.indexOf(this);
        updateEntities.splice(i, 1);
        this.object.destroy();
    }
}