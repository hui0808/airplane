class Scene extends SceneMode {
    constructor(game) {
        super(game)
        this.e.bg = ImageMode.new(this.game, "bg")
        this.e.player = Player.new(this.game)
        this.e.enemy = [[], [], []]
        this.e.score = Score.new(this.game, 0, 10, 45, "45px Arial")
        this.enemy_density = [3, 2, 1]
    }

    update() {
        super.update();
        // 随机产生敌机
        this.enemy_create()

        this.e.enemy = this.e.enemy.map(
            e1 => {
                return e1.filter(
                    enemy => {
                        // 子弹击中敌机，若击中加分
                        enemy.bullet_hit(this.e.player, () => {
                            this.e.score.plus(enemy.score)
                        })
                        // 玩家与敌机相撞
                        if (this.e.player.collide(enemy)) {
                            this.e.player.die()
                            this.e.player.lifes--
                        }
                        // 清除死掉的敌机
                        return !(enemy.y > this.game.canvas.height || !enemy.alive())
                    })
            })

        // 玩家死亡, 游戏结束
        if (!this.e.player.alive()) {
            log('game over')
            this.game.replaceScene(SceneEnd, next => {
                next.e._text = TextMode.new(next.game,
                    `得分：${this.e.score.score}`,
                    80, 400,
                    "45px Arial", "#ffffff")
            })
        }
    }

    enemy_create() {
        let temp
        for (let i = 0; i < this.enemy_density.length; i++) {
            if (randomRange(1, 100) <= this.enemy_density[i]) {
                temp = Enemy.new(this.game, `enemy${i + 1}`, 0, 0, 3 * i + 1)
                temp.moveX(randomRange(0, this.game.canvas.width - temp.w), 0)
                temp.moveY(-temp.h, 0)
                this.e.enemy[i].push(temp)
            }
        }
    }
}
