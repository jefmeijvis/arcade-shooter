window.onload = UpdateCanvasStyle;
function UpdateCanvasStyle()
{         
    document.body.style = "text-align:center";

    this.game.canvas.style.width = (this.game.config.width * this.game.config.zoom).toString() + 'px';
this.game.canvas.style.height = (this.game.config.height * this.game.config.zoom).toString() + 'px';
}