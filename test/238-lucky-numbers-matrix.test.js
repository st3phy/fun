const { luckyNumbers } = require("../src/238-lucky-numbers-matrix.js");

describe("Lucky Numbers In A Matrix", () => {
    const tests = [
        {
            args: [
                [
                    [3, 7, 8],
                    [9, 11, 13],
                    [15, 16, 17]
                ]
            ],
            res: [15]
        },
        {
            args: [
                [
                    [1, 10, 4, 2],
                    [9, 3, 8, 7],
                    [15, 16, 17, 12]
                ]
            ],
            res: [12]
        },
        {
            args: [
                [
                    [7, 8],
                    [1, 2]
                ]
            ],
            res: [7]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(luckyNumbers(...args)).toStrictEqual(res);
        });
    }
});
