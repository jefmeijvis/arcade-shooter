class Enemy
{
    constructor()
    {
        let x = Math.random()*200;
        x = Math.floor(x/8) * 8;

        let y = -16;
        this.object = enemies.create(x,y,"enemy").setImmovable();
        updateEntities.push(this);
    }

    update()
    {
        this.object.y += 1;
        if (this.object.y > 216)
            this.destroy();
    }

    destroy()
    {
        var i = updateEntities.indexOf(this);
        updateEntities.splice(i, 1);
        this.object.destroy();
    }

    shootBullet()
    {

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

function collideEnemy(player,enemy)
{
    // TODO decrease player health
    enemy.destroy();
}

function collideEnemyBullet(bullet,enemy)
{
    new Coin(bullet.x,bullet.y);
    enemy.destroy();
    bullet.destroy();
}