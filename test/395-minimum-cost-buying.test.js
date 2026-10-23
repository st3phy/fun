const { minimumCost } = require("../src/395-minimum-cost-buying.js");

describe("Minimum Cost Of Buying Candies With Discount", () => {
    const tests = [
        { args: [[1, 2, 3]], res: 5 },
        { args: [[6, 5, 7, 9, 2, 2]], res: 23 },
        { args: [[5, 5]], res: 10 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minimumCost(...args)).toStrictEqual(res);
        });
    }
});
