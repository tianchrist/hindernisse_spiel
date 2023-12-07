input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    spieler.change(LedSpriteProperty.X, -1)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    spieler.change(LedSpriteProperty.X, 1)
})
let luecke = 0
let hindernisse: game.LedSprite[] = []
let spieler: game.LedSprite = null
spieler = game.createSprite(2, 4)
spieler.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    hindernisse = []
    luecke = randint(0, 4)
    for (let Index = 0; Index <= 4; Index++) {
        if (Index != luecke) {
            hindernisse.push(game.createSprite(Index, 0))
        }
    }
    for (let index = 0; index < 5; index++) {
        basic.pause(700)
        for (let hindernis of hindernisse) {
            hindernis.change(LedSpriteProperty.Y, 1)
        }
    }
    for (let hindernis of hindernisse) {
        hindernis.delete()
    }
})
