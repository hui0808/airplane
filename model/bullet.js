class Bullet extends ImageMode {
    constructor(game, name, x = 0, y = 0, speed = 5) {
        super(game, name, x, y)
        this.speed = speed
    }

    move() {
        this.y -= this.speed
    }

    update() {
        super.update();
        this.move()
    }
}