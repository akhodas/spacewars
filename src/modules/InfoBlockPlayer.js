import {Entity} from './Entity';

export class InfoBlockPlayer extends Entity {
    static counter = 1;
    constructor(config) {
        super({
            type: 'infoBlockPlayer',
            x: Game.size.width * 0.05,
            y: Game.size.height * 0.05,
            width: Game.size.width * 0.05,
            height: Game.size.height * 0.05
        });
        this.radius = this.width / 2;
        this.config = config;
        this.position = InfoBlockPlayer.counter++;
    }
    draw() {
        Game.ctx.strokeStyle = this.config.color;
        Game.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        Game.ctx.beginPath();
        Game.ctx.arc(this.x, (2.3 * this.position - 1) * this.radius, this.radius, 0, 2 * Math.PI);
        Game.ctx.lineWidth = Game.size.width * 0.005;
        Game.ctx.stroke();
        Game.ctx.fill();
        Game.ctx.fillStyle = this.config.color;
        Game.ctx.font = "" + this.radius * 0.7 + "px Arial";
        Game.ctx.textAlign = "center";
        Game.ctx.fillText(Game.options.spaceships.find((spaceship) => {
            return spaceship.name === this.config.name;
        }).score, this.x, (2.3 * this.position - 0.75) * this.radius);
    }
}
