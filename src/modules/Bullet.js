import { Entity } from "./Entity";

export class Bullet extends Entity {
  constructor(options) {
    super({
      type: "bullet",
      x: options.x,
      y: options.y,
      width: Game.size.width * 0.01,
      height: Game.size.height * 0.01
    });
    this.nameSpaceship = options.nameSpaceship;
    this.radius = this.width / 2;
    this.color = options.colorSpaceship;
  }

  draw() {
    Game.ctx.strokeStyle = this.color;
    Game.ctx.fillStyle = this.color;
    Game.ctx.beginPath();
    Game.ctx.arc(this.x, this.y, this.radius * 0.5, 0, 2 * Math.PI);
    Game.ctx.stroke();
    Game.ctx.fill();
  }

  move() {
    this.y -= Game.size.height * 0.01;
  }
}
