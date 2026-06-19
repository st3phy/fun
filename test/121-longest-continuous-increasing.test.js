const { findLengthOfLCIS } = require("../src/121-longest-continuous-increasing.js");

describe("Longest Continuous Increasing Subsequence", () => {
    const tests = [
        { args: [[1, 3, 5, 4, 7]], res: 3 },
        { args: [[2, 2, 2, 2, 2]], res: 1 },
        { args: [[2, 2, 2, 2, 3]], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findLengthOfLCIS(...args)).toStrictEqual(res);
        });
    }
});
