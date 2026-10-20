const { calculateTax } = require("../src/368-calculate-amount-paid.js");

describe("Calculate Amount Paid In Taxes", () => {
    const tests = [
        {
            args: [
                [
                    [3, 50],
                    [7, 10],
                    [12, 25]
                ],
                10
            ],
            res: 2.65
        },
        {
            args: [
                [
                    [1, 0],
                    [4, 25],
                    [5, 50]
                ],
                2
            ],
            res: 0.25
        },
        { args: [[[2, 50]], 0], res: 0.0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(calculateTax(...args)).toStrictEqual(res);
        });
    }
});
