class Entity {
    constructor(options) {
        this.id = Game.idResolver.getId();
        this.type = options.type;
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
    }

    draw() { }

    move() { }

    isOnScrean() {
        if (
            this.y < -Enemy.calculateSize() ||
            this.y > Game.size.height + Enemy.calculateSize() ||
            this.x < 0 ||
            this.x > Game.size.width
        ) {
            return false;
        }
        return true;
    }
}

class Spaceship extends Entity {
    constructor() {
        super({
            type: 'spaceship',
            x: (Game.size.width / 2 - (Game.size.width * 0.05) / 2),
            y: (Game.size.height * 0.95 - (Game.size.height * 0.05)),
            width: Game.size.width * 0.05,
            height: Game.size.height * 0.05
        });

        window.addEventListener('click', () => {
            this.strike();
        });
    }

    draw() {
        Game.ctx.fillStyle = 'black';
        Game.ctx.fillRect(this.x, this.y, this.width, this.height);
        Game.ctx.fillStyle = 'white';        
        Game.ctx.font = "20px Arial";
        Game.ctx.textAlign = "center";
        Game.ctx.fillText(Game.score, this.x + this.width / 2, this.y + this.height * 0.75);
    }

    move() {
        this.x = Game.mouseMoveTracker.getCurrentPosition().x;
    }

    strike() {
        Game.entities.push(new Bullet({
            x: this.x + this.width / 2,
            y: this.y
        }));
    }
}

class Bullet extends Entity {
    constructor(coords) {
        super({
            type: 'bullet',
            x: coords.x,
            y: coords.y,
            width: Game.size.width * 0.01,
            height: Game.size.height * 0.01
        });

        this.radius = this.width / 2;
    }

    draw() {
        Game.ctx.strokeStyle = 'green';
        Game.ctx.fillStyle = 'green';

        Game.ctx.beginPath();
        Game.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        Game.ctx.stroke();
        Game.ctx.fill();
    }

    move() {
        this.y -= Game.size.height * 0.01;
    }
}

class Enemy extends Entity {
    constructor() {
        super({
            type: 'enemy',
            x: Math.random() * (Game.size.width * 0.9) + Game.size.width * 0.05,
            y: 0,
            width: Enemy.calculateSize(),
            height: Enemy.calculateSize()
        });

        this.speed = Math.random() + 0.2;
        this.radius = this.width / 2;
        this.y = -this.radius;
    }

    draw() {
        Game.ctx.strokeStyle = 'red';
        Game.ctx.fillStyle = 'red';

        Game.ctx.beginPath();
        Game.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        Game.ctx.stroke();
        Game.ctx.fill();
    }

    move() {
        this.y += Game.size.height * 0.01 * this.speed;
    }

    static calculateSize() {
        return Game.size.width * 0.05;
    }
}

class MouseMoveTracker {
    constructor(element) {
        this._x = 0;
        this._y = 0;

        element.addEventListener('mousemove', (event) => {
            this._x = event.offsetX;
            this._y = event.offsetY;
        });
    }

    getCurrentPosition() {
        return {
            x: this._x,
            y: this._y
        };
    }
}

class IdGenerator {
    constructor() {
        this._id = 0;
    }

    getId() {
        return this._id++;
    }
}

class GarbageCollector {
    constructor() {
        this._collection = [];
    }

    removeEntities(entities) {
        const filtered = entities.filter((entity) => {
            return !this._collection.includes(entity.id);
        });

        this._collection = [];

        return filtered;
    }

    collect(id) {
        this._collection.push(id);
    }
}

class Game {
    static canvas = document.getElementsByClassName('space')[0];
    static ctx = Game.canvas.getContext('2d');
    static size = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    static options = {
        enemyCount: 10
    };
    static idResolver = new IdGenerator();
    static garbageCollector = new GarbageCollector();
    static mouseMoveTracker = new MouseMoveTracker(Game.canvas);
    static entities = [];
    static score = 0;

    constructor() {
        Game.canvas.width = Game.size.width;
        Game.canvas.height = Game.size.height;

        this.init();
        this.start();
    }

    start() {
        let counter = 0;
        window.setInterval(() => {
            counter++;
            if (counter === 25) {
                Game.entities.push(new Enemy());
                counter = 0;
            }

            const entitiesByType = {
                spaceship: [],
                enemy: [],
                bullet: []
            };

            Game.entities.forEach(function (entity) {
                entity.move();

                if (!entity.isOnScrean()) {
                    Game.garbageCollector.collect(entity.id);
                } else {
                    entitiesByType[entity.type].push(entity);
                }
            });

            entitiesByType.bullet.forEach(function (bullet) {
                entitiesByType.enemy.some(function (enemy) {
                    const distance = Math.sqrt(Math.pow(enemy.x - bullet.x, 2) + Math.pow(enemy.y - bullet.y, 2));

                    if (enemy.radius + bullet.radius > distance) {
                        Game.garbageCollector.collect(enemy.id);
                        Game.garbageCollector.collect(bullet.id);
                        Game.score += Math.round(enemy.speed * 10);
                        return true;
                    }

                    return false;
                });
            });

            Game.entities = Game.garbageCollector.removeEntities(Game.entities);

            Game.ctx.clearRect(0, 0, Game.size.width, Game.size.height);

            Game.entities.forEach(function (entity) {
                entity.draw();
            });
        }, 20);
    }

    init() {
        Game.entities.push(new Spaceship());
    }
}

new Game();