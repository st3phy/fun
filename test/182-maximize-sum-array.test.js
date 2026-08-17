const { largestSumAfterKNegations } = require("../src/182-maximize-sum-array.js");

describe("Maximize Sum Of Array After K Negations", () => {
    const tests = [
        { args: [[4, 2, 3], 2], res: 9 },
        { args: [[3, -1, 0, 2], 3], res: 6 },
        { args: [[-8, 3, -5, -3, -5, -2], 6], res: 22 },
        { args: [[-4, -2, -3], 4], res: 5 },
        { args: [[5, 6, 9, -3, 3], 2], res: 20 },
        { args: [[-100, -100, -100], 4], res: 100 },
        { args: [[2, -3, -1, 5, -4], 2], res: 13 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(largestSumAfterKNegations(...args)).toStrictEqual(res);
        });
    }
});
