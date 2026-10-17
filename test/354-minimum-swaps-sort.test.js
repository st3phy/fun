const { minSwaps } = require("../src/354-minimum-swaps-sort.js");

describe("Minimum Swaps To Sort By Digit Sum", () => {
    const tests = [
        { args: [[37, 100]], res: 1 },
        { args: [[22, 14, 33, 7]], res: 0 },
        { args: [[18, 43, 34, 16]], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minSwaps(...args)).toStrictEqual(res);
        });
    }
});
