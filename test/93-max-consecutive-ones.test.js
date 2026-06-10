const { findMaxConsecutiveOnes } = require("../src/93-max-consecutive-ones.js");

describe("Max Consecutive Ones", () => {
    const tests = [
        { args: [[1, 1, 0, 1, 1, 1]], res: 3 },
        { args: [[1, 0, 1, 1, 0, 1]], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findMaxConsecutiveOnes(...args)).toStrictEqual(res);
        });
    }
});
