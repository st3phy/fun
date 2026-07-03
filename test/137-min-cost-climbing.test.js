const { minCostClimbingStairs } = require("../src/137-min-cost-climbing.js");

describe("Min Cost Climbing Stairs", () => {
    const tests = [
        { args: [[10, 15, 20]], res: 15 },
        { args: [[10, 15, 10]], res: 15 },
        { args: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]], res: 6 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minCostClimbingStairs(...args)).toStrictEqual(res);
        });
    }
});
