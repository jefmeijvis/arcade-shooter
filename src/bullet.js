class Bullet
{

    constructor(x,y)
    {
        this.object = entities.create(objPlayer.object.x,objPlayer.object.y,"bullet")
        updateEntities.push(this);
    }

    update()
    {
        this.object.y -= 5;
    }
}