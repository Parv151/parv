controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.confetti)
})
let mySprite: Sprite = null
scene.setBackgroundColor(14)
game.splash("HELLO I am parv . I welcome you")
mySprite = sprites.create(img`
    . . . . . c c c c c . . . . . . 
    . . . c d 8 8 8 8 8 c . . . . . 
    . . . c d d d d d 8 8 c . . . . 
    . . c 1 9 d d 9 1 d 8 c c . . . 
    . f d d 2 2 d d d d 8 d d c . . 
    . f f d d d d f d d 8 d c c c . 
    . f d f f f f d d d 8 d c f d c 
    . . f d d d d d d 8 8 c c d d c 
    . . . f d d d d 8 8 c c 8 c c c 
    . . . . c c c 8 8 c 8 8 8 c . . 
    . . . . c 8 8 8 8 8 8 8 c c c . 
    . . . c 8 8 8 8 8 8 c c c 2 c . 
    . . c c 8 8 8 8 c c c c c 2 c . 
    . c f d c 8 8 c f f c c c 2 c . 
    . c d d c 8 8 c d d c c c c c . 
    . c c c c c c c c c c c c c . . 
    `, SpriteKind.Player)
