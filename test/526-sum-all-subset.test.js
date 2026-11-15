const { subsetXORSum } = require("../src/526-sum-all-subset.js");

describe("Sum Of All Subset XOR Totals", () => {
    const tests = [
        { args: [[1, 3]], res: 6 },
        { args: [[5, 1, 6]], res: 28 },
        { args: [[3, 4, 5, 6, 7, 8]], res: 480 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(subsetXORSum(...args)).toStrictEqual(res);
        });
    }
});
