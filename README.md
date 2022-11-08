# knights-travails

Knight's Travails project for The Odin Project. This is an exercise in breadth-first search on a graph. I implemented a version Dijkstra's Algorithm to determine the minimum number of moves that a knight would need to make to get to a given space on a chessboard. The knight.js file contains two classes: Knight and Game. The Knight class takes a given space and defined all of the spaces to which a knight can travel to in one move from the given space. Upon initialization, the GAme class creates a new Knight, which starts at the given starting position on the grid. It also creates a board object, which is a HashMap representing the 0-indexed coordinates on the chessboard and the distance from those spaces to the Knight's starting position. The Game class can also perfrom the following methods: 

1. Can reset all of the distances in the board HashMap.
2. Can determine the minimum number of moves that the Knight will need to perform in order to reach all spaces on the board and store that number of moves as values in the board HashMap. 
3. Can update the Knight's starting position.
4. Can find the number of moves necessary to reach any given space.
5. Can find the path that the knight will travfel to reach any given space.
6. Can perform knightMoves, which returns an easy-to-read summary of the distance and path that the Knight will follow to reach a given space.
