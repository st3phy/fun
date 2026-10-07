const { frequencySort } = require("../src/287-sort-array-increasing.js");

describe("Sort Array By Increasing Frequency", () => {
    const tests = [
        { args: [[1, 1, 2, 2, 2, 3]], res: [3, 1, 1, 2, 2, 2] },
        { args: [[2, 3, 1, 3, 2]], res: [1, 3, 3, 2, 2] },
        { args: [[-1, 1, -6, 4, 5, -6, 1, 4, 1]], res: [5, -1, 4, 4, -6, -6, 1, 1, 1] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(frequencySort(...args)).toStrictEqual(res);
        });
    }
});
