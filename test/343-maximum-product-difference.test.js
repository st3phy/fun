const { maxProductDifference } = require("../src/343-maximum-product-difference.js");

describe("Maximum Product Difference Between Two Pairs", () => {
    const tests = [
        { args: [[5, 6, 2, 7, 4]], res: 34 },
        { args: [[4, 2, 5, 9, 7, 4, 8]], res: 64 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxProductDifference(...args)).toStrictEqual(res);
        });
    }
});
