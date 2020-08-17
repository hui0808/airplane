class Score extends TextMode {
    constructor(game, score = 0, x = 0, y = 0, font = "25px Arial", color = "#ffffff") {
        super(game, "Score: ", x, y, font, color)
        this.score = score
    }

    static new(game, score = 0, x = 0, y = 0, font = "25px Arial", color = "#ffffff") {
        return new this(game, score, x, y, font, color)
    }

    plus(score) {
        this.score += score
    }

    draw() {
        super.draw();
        this.game.context.fillText(this.text + this.score, this.x, this.y)
    }
}