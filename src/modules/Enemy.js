import { Entity } from './Entity';

export class Enemy extends Entity {
  constructor() {
    super({
      type: 'enemy',
      x: Math.random() * (Game.size.width * 0.9) + Game.size.width * 0.05,
      y: 0,
      width: Enemy.calculateSize(),
      height: Enemy.calculateSize(),
    });
    this.speed = Math.random() + 0.2;
    this.radius = this.width / 2;
    this.y = -this.radius;
    this.direction = Math.random() - 0.5;
  }

  draw() {
    Game.ctx.strokeStyle = 'black';
    Game.ctx.fillStyle = '#A9A9A9';
    Game.ctx.beginPath();
    Game.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // Game.ctx.stroke();
    // Game.ctx.fill();
    /* Для отрисовки астероидов закоментировать код ""Game.ctx.fill();"" и
            раскоментировать 3 строки внизу */
    Game.ctx.drawImage(
      Game.imageResources.enemy.image,
      this.x - this.radius,
      this.y - this.radius,
      this.width,
      this.width,
    );
  }

  move() {
    this.y += Game.size.height * 0.01 * this.speed * Game.speedGame.speed;
    this.x += Game.size.height * 0.01 * this.speed * Game.speedGame.speed * this.direction;
  }

  static calculateSize() {
    return Game.size.width * 0.045;
  }
}
