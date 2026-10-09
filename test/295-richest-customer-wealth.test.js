const { maximumWealth } = require("../src/295-richest-customer-wealth.js");

describe("Richest Customer Wealth", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2, 3],
                    [3, 2, 1]
                ]
            ],
            res: 6
        },
        {
            args: [
                [
                    [1, 5],
                    [7, 3],
                    [3, 5]
                ]
            ],
            res: 10
        },
        {
            args: [
                [
                    [2, 8, 7],
                    [7, 1, 3],
                    [1, 9, 5]
                ]
            ],
            res: 17
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maximumWealth(...args)).toStrictEqual(res);
        });
    }
});
