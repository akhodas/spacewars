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
    constructor(config) {
        super({
            type: 'spaceship',
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

            window.addEventListener('click', this.eventListener);
        } else {
            this.eventListener = (event) => {
                if (event.key === this.config.strikeKey) {
                    this.strike();
                }
            };
            window.addEventListener('keydown', this.eventListener);
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
            this.x - this.radius, this.y - this.radius, this.width, this.width);


        Game.ctx.fillStyle = 'white';
        Game.ctx.font = "" + 0.7 * this.radius + "px Arial";
        Game.ctx.textAlign = "center";
        Game.ctx.fillText(Game.options.spaceships.find((spaceship) => {
            return spaceship.name === this.config.name;
        }).score, this.x, this.y + 1.7 * this.radius);
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
        Game.entities.push(new Bullet({
            x: this.x,
            y: this.y,
            nameSpaceship: this.config.name,
            colorSpaceship: this.config.color
        }));
    }

    destroy() {
        window.removeEventListener('click', this.eventListener);
        window.removeEventListener('keydown', this.eventListener);
    }
}

class Bullet extends Entity {
    constructor(options) {
        super({
            type: 'bullet',
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
            раскоментировать 3 строки внизу*/

        Game.ctx.drawImage(
            Game.imageResources.enemy.image,
            this.x - this.radius, this.y - this.radius, this.width, this.width);

    }

    move() {
        this.y += Game.size.height * 0.01 * this.speed * Game.speedGame.speed;
        this.x += Game.size.height * 0.01 * this.speed * Game.speedGame.speed * this.direction;
    }

    static calculateSize() {
        return Game.size.width * 0.045;
    }
}

class InfoBlockPlayer extends Entity {
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

class KeyTracker {
    constructor() {
        this.keys = {};

        window.addEventListener('keydown', (event) => {
            this.keys[event.key] = true;
        });

        window.addEventListener('keyup', (event) => {
            this.keys[event.key] = false;
        });
    }

    isKeyPressed(key) {
        return !!this.keys[key];
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
        spaceships: [
            {
                isMouseEnabled: true,
                name: '1',
                image: 'img/spaceship.png',
                score: 0,
                leftKey: 'ArrowLeft',
                rightKey: 'ArrowRight',
                strikeKey: ' ',
                color: 'red'
            },
            {
                isMouseEnabled: false,
                name: '2',
                image: 'img/spaceship.png',
                score: 0,
                leftKey: 'a',
                rightKey: 'd',
                strikeKey: 'z',
                color: 'blue'
            }
        ]
    };
    static idResolver = new IdGenerator();
    static garbageCollector = new GarbageCollector();
    static mouseMoveTracker = new MouseMoveTracker(Game.canvas);
    static keyTracker = new KeyTracker();
    static entities = [];
    static score = 0;
    static speedGame = {
        counter: 0,
        speed: 1
    };
    static imageResources = {
        spaceship: {
            resourse: 'img/spaceship.png',
            image: null
        },
        enemy: {
            resourse: 'img/asteroid.png',
            image: null
        }
    };

    constructor() {
        Game.canvas.width = Game.size.width;
        Game.canvas.height = Game.size.height;

        this.init();
        this.start();
    }

    start() {
        let counter = 0;

        /*
        // Start controm setInterval #1
        let timer1 = new Date();
        let delta;
        let contromTime = {};
        let timerCounter = 0;
        // Finish controm setInterval #1
        */

        window.setInterval(() => {
            
            /*
            // Start controm setInterval #2
            timerCounter++;
            delta = new Date() - timer1;
            if (delta in contromTime) {
                contromTime[delta]++;
            } else {
                if(delta < 15) delta = 15;
                if(delta > 25) delta = 25;
                if (delta in contromTime) {
                    contromTime[delta]++;
                } else {
                    contromTime[delta] = 1;
                }                
                // contromTime[delta] = 1;
            }
            if (timerCounter == 50) {
                timerCounter = 0;
                let str = '';
                for(var key in contromTime) {
                    str += `(${key}:${contromTime[key]})`;
                }
                console.log(str);
            }            
            timer1 = new Date();
            // Finish controm setInterval #2
            */

            Game.speedGame.counter++;
            counter++;
            if (counter > (25 / Game.speedGame.speed)) {
                Game.entities.push(new Enemy());
                counter = 0;
            }
            if (Game.speedGame.counter === 500) {
                Game.speedGame.speed += 0.1;
                Game.speedGame.counter = 0;
            }

            const entitiesByType = {
                spaceship: [],
                enemy: [],
                bullet: [],
                infoBlockPlayer: []
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
                        const spaceship = Game.options.spaceships.find(function (spaceship) {
                            return spaceship.name === bullet.nameSpaceship;
                        });
                        spaceship.score += Math.round(enemy.speed * 10);
                        return true;
                    }

                    return false;
                });
            });

            entitiesByType.spaceship.forEach(function (spaceship) {
                entitiesByType.enemy.some(function (enemy) {
                    const distance = Math.sqrt(Math.pow(enemy.x - spaceship.x, 2) + Math.pow(enemy.y - spaceship.y, 2));

                    if (enemy.radius + spaceship.radius > distance) {
                        Game.garbageCollector.collect(enemy.id);
                        Game.garbageCollector.collect(spaceship.id);

                        spaceship.destroy();

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
        const img1 = new Image();
        img1.src = Game.imageResources.spaceship.resourse;
        img1.onload = () => {
            Game.imageResources.spaceship.image = img1;
        };

        Game.options.spaceships.forEach(function (spaceship) {
            Game.entities.push(new Spaceship(spaceship));
            Game.entities.push(new InfoBlockPlayer(spaceship));
        });

        const img2 = new Image();
        img2.src = Game.imageResources.enemy.resourse;
        img2.onload = () => {
            Game.imageResources.enemy.image = img2;
        };
    }
}

new Game();