function createCyclopsnake () {
    cyclopsnake = sprites.create(img`
        . . . c c c c c c . . . . . . . 
        . . c 4 5 5 5 5 4 c . . . . . . 
        . c a 4 5 5 4 a 5 5 c . . . . . 
        c 4 5 a 4 4 a 5 5 5 4 c . . . . 
        c 5 c 1 a a 1 c 5 5 5 c . . . . 
        f 5 4 1 2 2 1 4 5 5 5 f . . . . 
        f 5 5 b 1 1 b 5 a 5 a f . . c . 
        . f 5 5 b b 5 c 5 a 4 f . c 5 c 
        . . f c c c c 5 5 4 f c c 5 5 c 
        . . c 4 5 5 5 5 f c c 5 a a 5 c 
        . c 4 5 5 5 5 5 c f 4 5 5 c 4 f 
        . c 3 3 3 3 5 4 4 c 4 4 4 f f . 
        . c 3 3 3 3 3 4 4 4 4 4 4 c . . 
        . c 4 3 3 3 3 3 4 4 4 4 4 c . . 
        . . c 4 3 3 3 3 3 5 4 4 c . . . 
        . . . c c c c c c c c c . . . . 
        `, SpriteKind.Enemy)
    cyclopsnake.follow(ragnar, 25)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
	
})
function createRagnar () {
    ragnar = sprites.create(img`
        . f f . . . . f f . . . . f f . 
        f 5 5 f . . f 8 8 f . . f 5 5 f 
        f 5 5 4 f f 8 9 9 8 f f 4 5 5 f 
        . f 4 4 2 8 9 9 9 9 8 2 4 4 f . 
        . . f 2 2 8 9 9 9 9 8 2 2 f . . 
        . . f 8 8 a 8 9 9 8 a 8 8 f . . 
        . . f a a a b 8 8 b a a a f . . 
        . . f f f 5 b b b b 5 f f f . . 
        . f f f b 5 f d d f 5 b f f f . 
        . . f f f d d d d d d f f f . . 
        . . f f f f c c c c f f f f . . 
        . f 8 8 f c 8 c 8 c c f 8 8 f . 
        . f d d f c c 8 c 8 c f d d f . 
        . f b d f f f f f f f f d b f . 
        . . f 8 . f f . . f f . 8 f . . 
        . . . . f 8 f . . f 8 f . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(ragnar, 100, 100)
    scene.cameraFollowSprite(ragnar)
    tiles.placeOnRandomTile(ragnar, sprites.dungeon.floorDark2)
}
let ragnar: Sprite = null
let cyclopsnake: Sprite = null
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`dungeon room of orion`)
createRagnar()
createCyclopsnake()
