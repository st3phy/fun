/**
 * @param {character[][]} board
 * @return {number}
 */
const numRookCaptures = board => {
    let pos = [];
    let count = 0;

    // Look for the Rook
    outer: for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === "R") {
                pos = [i, j];
                break outer;
            }
        }
    }

    // Look up
    for (let i = pos[0] - 1; i >= 0; i--) {
        const piece = board[i][pos[1]];
        if (piece === "B") {
            break; // Found a Bishop so we can go no further
        } else if (piece === "p") {
            count++; // Found a pawn and no Bishop in the way, so we can attack
            break;
        }
    }

    // Look down
    for (let i = pos[0] + 1; i < 8; i++) {
        const piece = board[i][pos[1]];
        if (piece === "B") {
            break; // Found a Bishop so we can go no further
        } else if (piece === "p") {
            count++; // Found a pawn and no Bishop in the way, so we can attack
            break;
        }
    }

    // Look left
    for (let i = pos[1] - 1; i >= 0; i--) {
        const piece = board[pos[0]][i];
        if (piece === "B") {
            break; // Found a Bishop so we can go no further
        } else if (piece === "p") {
            count++; // Found a pawn and no Bishop in the way, so we can attack
            break;
        }
    }

    // Look right
    for (let i = pos[1] + 1; i < 8; i++) {
        const piece = board[pos[0]][i];
        if (piece === "B") {
            break; // Found a Bishop so we can go no further
        } else if (piece === "p") {
            count++; // Found a pawn and no Bishop in the way, so we can attack
            break;
        }
    }

    return count;
};

module.exports = { numRookCaptures };

console.log(
    numRookCaptures([
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", "p", ".", ".", ".", "."],
        [".", ".", ".", "R", ".", ".", ".", "p"],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", "p", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", "."]
    ])
);
