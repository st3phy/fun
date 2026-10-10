const { countGoodRectangles } = require("../src/305-number-rectangles-that.js");

describe("Number Of Rectangles That Can Form The Largest Square", () => {
    const tests = [
        {
            args: [
                [
                    [5, 8],
                    [3, 9],
                    [5, 12],
                    [16, 5]
                ]
            ],
            res: 3
        },
        {
            args: [
                [
                    [2, 3],
                    [3, 7],
                    [4, 3],
                    [3, 7]
                ]
            ],
            res: 3
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countGoodRectangles(...args)).toStrictEqual(res);
        });
    }
});
