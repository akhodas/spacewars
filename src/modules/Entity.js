import { Enemy } from './Enemy';

export class Entity {
  constructor(options) {
    this.id = Game.idResolver.getId();
    this.type = options.type;
    this.x = options.x;
    this.y = options.y;
    this.width = options.width;
    this.height = options.height;
  }

  draw() { }  // eslint-disable-line

  move() { } // eslint-disable-line

  isOnScrean() {
    if (
      this.y < -Enemy.calculateSize()
      || this.y > Game.size.height + Enemy.calculateSize()
      || this.x < 0
      || this.x > Game.size.width
    ) {
      return false;
    }
    return true;
  }
}
