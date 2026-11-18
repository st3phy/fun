/**
 * @param {number[][]} nums
 * @returns {number}
 */
const numberOfPoints = nums => {
    // let points = 0;
    // const hasCar = new Array(101).fill(0);

    // for (const [start, end] of nums) {
    //     for (let i = start; i <= end; i++) {
    //         hasCar[i] = 1;
    //     }
    // }

    // for (let i = 1; i <= 100; i++) {
    //     if (hasCar[i]) points++;
    // }

    // return points;

    nums = nums.sort((a, b) => a[0] - b[0]);

    // [3, 8], [4,4] , [9,10], [9,10]

    let points = 0;
    let currEnd = 0;
    for (const [start, end] of nums) {
        if (end <= currEnd) continue;
        points += end - Math.max(start, currEnd + 1) + 1;
        currEnd = end;
    }

    return points;
};

module.exports = { numberOfPoints };

console.log(
    numberOfPoints([
        [4, 4],
        [9, 10],
        [9, 10],
        [3, 8]
    ])
);
