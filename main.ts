let mySprite = sprites.create(img`
    .ff....ff....ff.
    f55f..f88f..f55f
    f554ff8998ff455f
    .f442899998244f.
    ..f2289999822f..
    ..f88a8998a88f..
    ..faaab88baaaf..
    ..fff5bbbb5fff..
    .fffb5fddf5bfff.
    ..fffddddddfff..
    ..ffffccccffff..
    .f88fc8c8ccf88f.
    .fddfcc8c8cfddf.
    .fbdfccccccfdbf.
    .fbb.f8998f.bbf.
    .f8f.ffffff.f8f.
    .ff..ff..ff..f..
    ....f8f..f8f....
    ...f888..888f...
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
scene.setBackgroundColor(7)
