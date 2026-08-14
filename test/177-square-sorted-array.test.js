const { sortedSquares } = require("../src/177-square-sorted-array.js");

describe("Square Of A Sorted Array", () => {
    const tests = [
        { args: [[-4, -1, 0, 3, 10]], res: [0, 1, 9, 16, 100] },
        { args: [[-7, -3, 2, 3, 11]], res: [4, 9, 9, 49, 121] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sortedSquares(...args)).toStrictEqual(res);
        });
    }
});
