const { totalMoney } = require("../src/303-calculate-money-leetcode.js");

describe("Calculate Money In Leetcode Bank", () => {
    const tests = [
        { args: [4], res: 10 },
        { args: [10], res: 37 },
        { args: [20], res: 96 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(totalMoney(...args)).toStrictEqual(res);
        });
    }
});
