function update()
{
    if (!utilityTools.pauseManager.pause)
    {
        if (this.keyUp.isDown) {objPlayer.object.setVelocityY(-speed);}
        if (this.keyDown.isDown) {objPlayer.object.setVelocityY(+speed);}
        if (this.keyRight.isDown) {objPlayer.object.setVelocityX(+speed);}
        if (this.keyLeft.isDown)  {objPlayer.object.setVelocityX(-speed);}

        if (this.keyShoot.isDown)  {objPlayer.shootBullet();}

            // scrolling background
    backgroundUpper.y += 1;
    if (backgroundUpper.y > 300){backgroundUpper.y = 100}
    backgroundLower.y += 1;
    if (backgroundLower.y > 100){backgroundLower.y = -100}

    updateEntities.forEach(entity => { entity.update();});
    utilityTools.spawnManager.update();
    }

    if (Phaser.Input.Keyboard.JustDown(this.keyPause)){utilityTools.pauseManager.togglePause()}
}