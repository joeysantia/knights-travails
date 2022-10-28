class Game {
  constructor(startingPos) {
    this.knight = new Knight(startingPos);
    this.unvisitedSet = new Set();
    this.board = this.unvisitedSet.size ? this.board : this.setBoard();
  }

  setBoard() {
    this.board = new Map();

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.board.set(`${i}${j}`, Number.MAX_VALUE);
        this.unvisitedSet.add(`${i}${j}`);
      }
    }

    this.setDistances();
    return this.board;
  }

  setDistances() {
    this.board.set(`${this.knight.pos[0]}${this.knight.pos[1]}`, 0);

    let neighbors = [];
    while (this.unvisitedSet.size) {
      let min = Number.MAX_VALUE;
      let node = null;

      for (const [key, value] of this.board) {
        if (value < min && this.unvisitedSet.has(key)) {
          min = value;
          node = key;
        }
      }

      this.unvisitedSet.delete(node);

      neighbors = new Knight([Number(node[0]), Number(node[1])]);

      for (const move in neighbors) {
        if (
          this.isValidSpace(neighbors[move]) &&
          this.unvisitedSet.has(`${neighbors[move][0]}${neighbors[move][1]}`)
        ) {
          this.board.set(
            `${neighbors[move][0]}${neighbors[move][1]}`,
            this.board.get(`${neighbors.pos[0]}${neighbors.pos[1]}`) + 1
          );
        }
      }
    }

    return this.board;
  }

  updateStart(pos) {
    this.knight = new Knight(pos);
    this.setBoard();
  }

  knightMoves(target) {
    let dist = this.findDistance(target);
    let spaces = this.findPath(target);

    let message = `=> You made it in ${dist} moves! Here's your path: \n`;

    for (let i = spaces.length - 1; i >= 0; i--) {
      message += `${spaces[i]} \n`;
    }

    return message;
  }

  findDistance(target) {
    return this.board.get(this.stringify(target));
  }

  findPath(end) {
    let path = [];

    path.push(end);
    while (this.board.get(`${end[0]}${end[1]}`) !== 0) {
      let targetKnight = new Knight(end);

      for (const move in targetKnight) {
        if (
          this.stringify(targetKnight[move]) !==
            this.stringify(targetKnight.pos) &&
          this.board.get(`${targetKnight[move][0]}${targetKnight[move][1]}`) ===
            this.board.get(`${targetKnight.pos[0]}${targetKnight.pos[1]}`) - 1
        ) {
          path.push(targetKnight[move]);
          end = targetKnight[move];
          break;
        }
      }
    }

    return path;
  }

  isValidSpace(pos) {
    return pos[0] >= 0 && pos[0] <= 8 && pos[1] >= 0 && pos[1] <= 8;
  }

  stringify(arr = []) {
    if (arr.length === 0) {
      return null;
    }

    let res = "";

    for (const val of arr) {
      res += val;
    }

    return res;
  }
}

class Knight {
  constructor(startingPos) {
    this.pos = startingPos;
    this.deg30 = [startingPos[0] - 1, startingPos[1] + 2];
    this.deg60 = [startingPos[0] - 2, startingPos[1] + 1];
    this.deg120 = [startingPos[0] - 2, startingPos[1] - 1];
    this.deg150 = [startingPos[0] - 1, startingPos[1] - 2];
    this.deg210 = [startingPos[0] + 1, startingPos[1] - 2];
    this.deg240 = [startingPos[0] + 2, startingPos[1] - 1];
    this.deg300 = [startingPos[0] + 2, startingPos[1] + 1];
    this.deg330 = [startingPos[0] + 1, startingPos[1] + 2];
  }
}

let test = new Game([0, 0]);
test.updateStart([3,3])
let test2 = new Game([3,3])
console.log(test.knightMoves([7, 7]));
