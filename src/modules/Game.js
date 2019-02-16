import {IdGenerator} from './IdGenerator';
import {GarbageCollector} from './GarbageCollector';
import {MouseMoveTracker} from './MouseMoveTracker';
import {KeyTracker} from './KeyTracker';
import {Enemy} from './Enemy';
import {Spaceship} from './Spaceship';
import {InfoBlockPlayer} from './InfoBlockPlayer';

export class Game {
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

        window.setInterval(() => {

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