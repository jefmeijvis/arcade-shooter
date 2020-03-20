class Ship
{
    constructor()
    {
        // params
        this.shootSpeed = 10;
        this.shootTimer = 0;
        

        // values
        this.score = 0;
        this.time = 0;

        this.speedX = 0;
        this.speedY = 0;

        this.object = playerGroup.create(100,100,"ship")
        this.object.setCollideWorldBounds(true);
        this.object.setDragX(speed);
        this.object.setDragY(speed);
        this.object.setDepth(5)
        updateEntities.push(this);
    }

    update()
    {
        this.shootTimer++;
        this.time++;
    }

    shootBullet()
    {
        if (this.shootTimer > this.shootSpeed)
        {
            this.shootTimer = 0;
            new Bullet(100,100);
        }
    }

    addScore(amount)
    {
        this.score+=amount
    }

    pause()
    {
        if (utilityTools.pauseManager.pause)
        {
            this.speedX = this.object.body.velocity.x;
            this.speedY = this.object.body.velocity.y;

            this.object.setVelocityX(0);
            this.object.setVelocityY(0);
        }
        else
        {
            // resume
            this.object.setVelocityX(this.speedX);
            this.object.setVelocityY(this.speedY);

            this.object.setDragX(speed);
            this.object.setDragY(speed);
        }
    }
}