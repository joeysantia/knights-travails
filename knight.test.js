import { Knight, Game } from './knight' 

test('initialization creates a valid Knight', () => {
    let game = new Game([3,3])
    expect(game.knight.pos).toEqual([3,3])
    expect(game.knight.deg30).toEqual([2,5])
    expect(game.knight.deg60).toEqual([1,4])
    expect(game.knight.deg120).toEqual([1,2])
    expect(game.knight.deg150).toEqual([2,1])
    expect(game.knight.deg210).toEqual([4,1])
    expect(game.knight.deg240).toEqual([5,2])
    expect(game.knight.deg300).toEqual([5,4])
    expect(game.knight.deg330).toEqual([4,5])
})

test('updateStart returns a new Knight', () => {
    let game = new Game([0,0])
    game.updateStart([3,3])

    expect(game.knight.pos).toEqual([3,3])
    expect(game.knight.deg30).toEqual([2,5])
    expect(game.knight.deg60).toEqual([1,4])
    expect(game.knight.deg120).toEqual([1,2])
    expect(game.knight.deg150).toEqual([2,1])
    expect(game.knight.deg210).toEqual([4,1])
    expect(game.knight.deg240).toEqual([5,2])
    expect(game.knight.deg300).toEqual([5,4])
    expect(game.knight.deg330).toEqual([4,5])
})


test('can find the distance between a given Knight and a given space', () => {
    let game = new Game([3,3])
    expect(game.findDistance([3,7])).toEqual(2)
})


test('returns 0 as the distance between a Knight and itself', () => {
    let game = new Game([3,3])
    expect(game.findDistance([3,3])).toEqual(0)
})

test('knightMoves displays the distance and path between a Knight and its target', () => {
    let game = new Game([3,3])
    let expected = `=> You made it in 4 moves! Here's your path: \n3,3 \n2,5 \n3,7 \n5,6 \n7,7 \n`
    expect(game.knightMoves([7,7])).toEqual(expected)
})