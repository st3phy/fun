const { findLHS } = require("../src/112-longest-harmonious-subsequence.js");

describe("Longest Harmonious Subsequence", () => {
    const tests = [
        { args: [[1, 3, 2, 2, 5, 2, 3, 7]], res: 5 },
        { args: [[1, 2, 3, 4]], res: 2 },
        { args: [[1, 1, 1, 1]], res: 0 },
        { args: [[1, 3, 5, 7, 9, 11, 13, 15, 17]], res: 0 },
        { args: [[1, 1, 1, 1, 1, 1, 3, 5, 5, 6]], res: 3 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findLHS(...args)).toStrictEqual(res);
        });
    }
});
