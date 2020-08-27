class Enemy extends AnimationMode {
    constructor(game, enemy, x = 0, y = 0, lifes = 1, rate = 3) {
        super(game, enemy, x, y, 'normal', rate)
        this.lifes = lifes
        this.score = lifes
        this.speed = 5
        this.died = false
    }

    alive() {
        return this.lifes > 0 || !this.died
    }

    die() {
        this.status = 'die'
        this.frameIndex = 1
    }

    hurt() {
        this.status = 'hurt'
        this.frameIndex = 0
    }

    bullet_hit(player, callback) {
        player.bullet = player.bullet.filter(bullet => {
            let ret = this.collide(bullet)
            if (ret) {
                // 生命值为0时播放死亡动画
                if (--this.lifes === 0) {
                    this.die()
                    callback()
                    // 生命值不为0时播放受伤动画
                } else if (this.lifes > 0) {
                    this.hurt()
                }
            }
            // 子弹相撞后消失
            return !ret
        })
    }

    update() {
        super.update();
        this.moveY(this.y + this.speed, 0)
        if (this.status === 'die' && this.frameIndex === 0) {
            this.died = true
        }
    }

    collide(other) {
        return rectIntersects(other, this)
    }
}