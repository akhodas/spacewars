import { Bullet } from "./Bullet";
import { Entity } from "./Entity";

export class Spaceship extends Entity {
  constructor(config) {
    super({
      type: "spaceship",
      x: Game.size.width / 2,
      y: Game.size.height - Game.size.height * 0.1,
      width: Game.size.width * 0.055,
      height: Game.size.height * 0.055
    });
    this.radius = this.width / 2;
    this.config = config;
    this.eventListener = null;
    if (this.config.isMouseEnabled) {
      this.eventListener = () => {
        this.strike();
      };
      window.addEventListener("click", this.eventListener);
    } else {
      this.eventListener = event => {
        if (event.key === this.config.strikeKey) {
          this.strike();
        }
      };
      window.addEventListener("keydown", this.eventListener);
    }
  }

  draw() {
    Game.ctx.strokeStyle = this.config.color;
    Game.ctx.fillStyle = this.config.color;
    Game.ctx.beginPath();
    Game.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    Game.ctx.lineWidth = this.radius * 0.1;
    Game.ctx.stroke();
    // Game.ctx.fill();
    Game.ctx.drawImage(
      Game.imageResources.spaceship.image,
      this.x - this.radius,
      this.y - this.radius,
      this.width,
      this.width
    );
    Game.ctx.fillStyle = "white";
    Game.ctx.font = `${0.7 * this.radius}px Arial`;
    Game.ctx.textAlign = "center";
    Game.ctx.fillText(
      Game.options.spaceships.find(
        spaceship => spaceship.name === this.config.name
      ).score,
      this.x,
      this.y + 1.7 * this.radius
    );
  }

  move() {
    if (this.config.isMouseEnabled) {
      this.x = Game.mouseMoveTracker.getCurrentPosition().x;
      this.y = Game.mouseMoveTracker.getCurrentPosition().y;
    } else {
      const delta = Game.size.width * 0.01;
      if (Game.keyTracker.isKeyPressed(this.config.leftKey)) {
        if (this.x > delta) {
          this.x -= delta;
        }
      } else if (Game.keyTracker.isKeyPressed(this.config.rightKey)) {
        if (this.x < Game.size.width - delta) {
          this.x += delta;
        }
      }
    }
  }

  strike() {
    Game.entities.push(
      new Bullet({
        x: this.x,
        y: this.y,
        nameSpaceship: this.config.name,
        colorSpaceship: this.config.color
      })
    );
  }

  destroy() {
    window.removeEventListener("click", this.eventListener);
    window.removeEventListener("keydown", this.eventListener);
  }
}
