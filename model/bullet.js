class Bullet extends ImageMode {
    constructor(game, name, x = 0, y = 0, speed = 5) {
        super(game, name, x, y)
        this.speed = speed
    }

    static new(game, name, x = 0, y = 0, speed = 5) {
        return new this(game, name, x, y, speed)
    }

    move() {
        this.y -= this.speed
    }

    update() {
        super.update();
        this.move()
    }
}