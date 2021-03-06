namespace SpriteKind {
    export const loot = SpriteKind.create()
}
function createCyclopsnake () {
    cyclopsnake = sprites.create(assets.image`cyclopsnake`, SpriteKind.Enemy)
    cyclopsnake.follow(ragnar, 25)
}
function createRagnar () {
    ragnar = sprites.create(assets.image`ragnar`, SpriteKind.Player)
    controller.moveSprite(ragnar, 100, 100)
    scene.cameraFollowSprite(ragnar)
    tiles.placeOnRandomTile(ragnar, sprites.dungeon.floorDark2)
}
function createDemonsprite () {
    demonSprite = sprites.create(assets.image`demonsprite`, SpriteKind.Enemy)
}
let demonSprite: Sprite = null
let ragnar: Sprite = null
let cyclopsnake: Sprite = null
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`dungeon room of memes and memories`)
createRagnar()
createCyclopsnake()
createDemonsprite()
let gold_pile = sprites.create(assets.image`pile of gold`, SpriteKind.loot)
let mySprite = sprites.create(assets.image`fireball`, SpriteKind.Projectile)
let Dragrogor = sprites.create(assets.image`Dragrogor`, SpriteKind.Enemy)
let axe = sprites.create(assets.image`axe`, SpriteKind.Projectile)
let smallsnake = sprites.create(assets.image`smallsnake`, SpriteKind.Enemy)
