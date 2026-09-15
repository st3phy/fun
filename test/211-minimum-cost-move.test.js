const { minCostToMoveChips } = require("../src/211-minimum-cost-move.js");

describe("Minimum Cost To Move Chips To The Same Position", () => {
    const tests = [
        { args: [[1, 2, 3]], res: 1 },
        { args: [[2, 2, 2, 3, 3]], res: 2 },
        { args: [[1, 1000000000]], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minCostToMoveChips(...args)).toStrictEqual(res);
        });
    }
});
