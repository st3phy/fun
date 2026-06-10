/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = grid => {
    // let perimeter = 0;

    // for (let i = 0; i < grid.length; i++) {
    //     for (let j = 0; j < grid[i].length; j++) {
    //         // If we find land
    //         if (grid[i][j] === 1) {
    //             // If we are on the first horizontal line, count the top side
    //             if (i === 0) perimeter++;
    //             // Otherwise, count the top side only if there is water there and so on
    //             else if (!grid[i - 1][j]) perimeter++;
    //             if (i === grid.length - 1) perimeter++;
    //             else if (!grid[i + 1][j]) perimeter++;
    //             if (!grid[i][j - 1]) perimeter++;
    //             if (!grid[i][j + 1]) perimeter++;
    //         }
    //     }
    // }

    // return perimeter;

    // Mathematical solution: Count land squares -> derive perimeter as "land squares * 4"
    // Substract 2 every time a land square has a neighbor to the left or to the top
    let squares = 0;
    let adjacentSquares = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                squares++;
                if (i > 0 && grid[i - 1][j]) adjacentSquares++;
                if (j > 0 && grid[i][j - 1]) adjacentSquares++;
            }
        }
    }

    return squares * 4 - adjacentSquares * 2;
};

module.exports = { islandPerimeter };

console.log(islandPerimeter([[1, 0]]));
