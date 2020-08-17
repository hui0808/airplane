class SceneEnd extends SceneMode {
    constructor(game) {
        super(game)
        this.e.bg = ImageMode.new(this.game, "bg")
        this.e.text2 = TextMode.new(this.game, 'Game Over', 80, 160, "50px Arial", "#ffffff")
        this.e.text1 = TextMode.new(this.game, '按 r 重新游戏', 80, 280, "50px Arial", "#ffffff")
        this.setup()
    }

    setup() {
        this.game.registerAction('r', () => {
            this.game.replaceScene(Scene)
        })
    }
}
