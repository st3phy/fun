const { climbStairs } = require("../src/16-climbing-stairs.js");

describe("Climbing Stairs", () => {
    const tests = [
        { args: [2], res: 2 },
        { args: [3], res: 3 },
        { args: [4], res: 5 },
        { args: [5], res: 8 },
        { args: [6], res: 13 },
        { args: [7], res: 21 },
        { args: [8], res: 34 },
        { args: [9], res: 55 },
        { args: [10], res: 89 },
        { args: [11], res: 144 },
        { args: [12], res: 233 },
        { args: [13], res: 377 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(climbStairs(...args)).toStrictEqual(res);
        });
    }
});
