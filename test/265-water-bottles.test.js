const { numWaterBottles } = require("../src/265-water-bottles.js");

describe("Water Bottles", () => {
    const tests = [
        { args: [9, 3], res: 13 },
        { args: [10, 3], res: 14 },
        { args: [15, 4], res: 19 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numWaterBottles(...args)).toStrictEqual(res);
        });
    }
});
