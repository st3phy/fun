/**
 * Check if a player won
 *
 * @param {number[][]} arr
 * @param {number} startIndex
 * @returns {boolean}
 */
const checkWin = (arr, startIndex) => {
    // Count the number of times the player placed inside a row or a column
    let rows = new Array(3).fill(0);
    let cols = new Array(3).fill(0);
    const set = new Set();

    for (let i = startIndex; i < arr.length; i += 2) {
        rows[arr[i][0]]++;
        cols[arr[i][1]]++;

        // Add current move to a set
        set.add(JSON.stringify(arr[i]));
    }

    // If the player placed 3 times in the same row or column, he won
    if (rows.includes(3) || cols.includes(3)) {
        return true;
    }

    // If the player placed in [1,1], we might have a diagonal
    if (set.has("[1,1]")) {
        if ((set.has("[0,0]") && set.has("[2,2]")) || (set.has("[2,0]") && set.has("[0,2]"))) {
            return true;
        }
    }

    return false;
};

/**
 * @param {number[][]} moves
 * @returns {string}
 */
const tictactoe = moves => {
    // Check if "A" won
    if (checkWin(moves, 0)) return "A";

    // Check if "B" wom
    if (checkWin(moves, 1)) return "B";

    // If no player won and we filled the board
    if (moves.length === 9) return "Draw";

    return "Pending";
};

module.exports = { tictactoe };

console.log(
    tictactoe([
        [0, 0],
        [1, 1],
        [0, 1],
        [0, 2],
        [1, 0],
        [2, 0]
    ])
);
