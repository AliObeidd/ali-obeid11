controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
    projectile.setKind(SpriteKind.Projectile)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
})
let myEnemy: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(10)
mySprite = sprites.create(img`
    ........................
    ........................
    ........................
    ...........ccc..........
    ...........cccc.........
    .......ccc..ccccccc.....
    .......cccccc555555cc...
    ........ccb5555555555c..
    .....cc..b555555555555c.
    .....cccb55555bcc555555c
    ......cb555555555c55d55c
    ......b5555555555555555c
    ...cc.b555dd5555bb1bbbc.
    ....ccd55ddddd55bbb335c.
    ...ccbddddddddd5bb3335c.
    .ccccdddddddddd55b3335c.
    cdcccdddddb55bbd553335c.
    cddbddddddb555bb55555c..
    cddddddddddb5555bbccc...
    ccddddddbd55bb55cbc.....
    .ccddddbbbdd55ccbdc.....
    ...ccbbbcbddddccdddc....
    .....ccccdd555dccccc....
    ........cccccccc........
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdateInterval(500, function () {
    myEnemy = sprites.create(img`
        ...............bbbbbbbbbbbbbbbbbbb...............
        ...........bbbbdd111111111111111ddbbbb...........
        ........bbbd1111111111111111111111111dbbb........
        ......bbd11111111dddddddddddddd111111111dbb......
        ....bbd1111111ddd11111111111111dddd1111111dbb....
        ...bd111111ddd111111111111111111111ddd111111db...
        ..bd11111ddd111ddddddddddddddddddd111ddd11111db..
        .bd11111dd111dddd111111111111111dddd111dd11111db.
        .b11111d111ddd111111111111111111111ddd111d11111b.
        bd11111d1ddd1111111111111111111111111ddd1111111db
        b11111d1ddd111111111111111111111111111ddd1d11111b
        b11111ddddd111111111111111111111111111ddddd11111b
        b11111ddddd111111111111111111111111111dddbd11111b
        b111111dddd111111111111111111111111111dddb111111b
        bd111111dddd1111111111111111111111111dddbd11111db
        .b1111111dddd11111111111111111111111dddbd111111b.
        .bd1111111dbbdd1111111111111111111dddbbd111111db.
        ..bd11111111dbbdd111111111111111dddbbd1111111db..
        ...bd111111111dbbbbbbdddddddddddddd111111111db...
        ....bbd11111111111dbbbbbbbbbddd11111111111dbb....
        ......bbdd11111111111111111111111111111ddbb......
        ........bbbdd11111111111111111111111ddbbb........
        ...........bbbbbddd11111111111dddbbbbb...........
        ................bbbbbbbbbbbbbbbbb................
        `, SpriteKind.Enemy)
    myEnemy.setPosition(randint(0, 160), randint(0, 120))
})
