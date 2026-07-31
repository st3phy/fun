/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = image => {
    // const rowLen = image[0].length;
    // const res = [];

    // for (let i = 0; i < image.length; i++) {
    //     res.push([]);
    //     for (let j = 0; j < rowLen; j++) {
    //         // Invert current number and add it to flipped position
    //         res[i][rowLen - 1 - j] = image[i][j] ^ 1;
    //     }
    // }

    // return res;

    // Ideal solution, change matrix in place, space complexity O(1)
    // 2 pointer solution
    for (let row of image) {
        let left = 0;
        let right = row.length - 1;
        while (left <= right) {
            // Swap left and right values, also invert them
            [row[left], row[right]] = [row[right] ^ 1, row[left] ^ 1];
            left++;
            right--;
        }
    }

    return image;
};

module.exports = { flipAndInvertImage };
