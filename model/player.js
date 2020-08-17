class Player extends AnimationMode {
    constructor(game, x = 191, y = 731, frame_times = 3) {
        super(game, 'player', x, y, frame_times)
        this.bullet = []
        this.bullet_speed = 30
        this.speed = 10
        this.enableDebug = true
        this.died = false
        this.lifes = 1
        this.cooldown = 4
        this.setup()
    }

    static new(game, x = 191, y = 731, frame_times = 3) {
        return new this(game, x, y, frame_times)
    }

    setup() {
        this.game.registerAction(' ', () => {
            this.fire()
        })
        this.game.registerAction('j', () => {
            this.fire()
        })
        this.game.registerAction('w', () => {
            this.moveY(this.y - this.speed)
        })
        this.game.registerAction('s', () => {
            this.moveY(this.y + this.speed)
        })
        this.game.registerAction('a', () => {
            this.moveX(this.x - this.speed)
        })
        this.game.registerAction('d', () => {
            this.moveX(this.x + this.speed)
        })
    }

    fire() {
        if (this.game.times % this.cooldown === 0) {
            this.bullet.push(Bullet.new(this.game, 'cartridge', this.x + 45, this.y - 16, this.bullet_speed))
            this.bullet.push(Bullet.new(this.game, 'cartridge_power', this.x + 14, this.y + 17, this.bullet_speed))
            this.bullet.push(Bullet.new(this.game, 'cartridge_power', this.x + 75, this.y + 17, this.bullet_speed))
        }
    }

    die() {
        this.index = 1
        this.frame_index = 1
    }

    alive() {
        return this.lifes > 0 || !this.died
    }

    collide(enemy) {
        return this.lifes !== 0 && enemy.collide(this)
    }

    debug() {
        if (!this.enableDebug) {
            return
        }
        super.debug();
        this.speed = config.player_speed.value
        this.bullet_speed = config.bullet_speed.value
        this.cooldown = config.bullet_cooldown.value
    }

    update() {
        super.update();
        this.bullet = this.bullet.filter(bullet =>{
            bullet.update()
            return (bullet.y + bullet.h >= 0)
        })

        if (this.index === 1 && this.frame_index === 0) {
            this.died = true
        }
    }

    draw() {
        super.draw();
        for (let i of this.bullet) {
            i.draw()
        }
    }
}