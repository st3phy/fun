/**
 * @param {character[][]} grid
 * @return {number[]}
 */
const lastVisitedCell = grid => {
    const canMove = (grid, i, j) => {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return false;
        if (grid[i][j] === 1) return false;
        return true;
    };

    let i = 0;
    let j = 0;

    while (grid[i][j] !== 1) {
        const tempI = i;
        const tempJ = j;

        switch (grid[i][j]) {
            case "R":
                if (canMove(grid, i, j + 1)) {
                    j++;
                }
                break;
            case "L":
                if (canMove(grid, i, j - 1)) {
                    j--;
                }
                break;
            case "D":
                if (canMove(grid, i + 1, j)) {
                    i++;
                }
                break;
            case "U":
                if (canMove(grid, i - 1, j)) {
                    i--;
                }
                break;
        }
        grid[tempI][tempJ] = 1;
    }

    return [i, j];
};

module.exports = { lastVisitedCell };

console.log(lastVisitedCell([["R", "R", "R"]]));
