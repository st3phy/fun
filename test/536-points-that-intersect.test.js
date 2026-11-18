const { numberOfPoints } = require("../src/536-points-that-intersect.js");

describe("Points That Intersect With Cars", () => {
    const tests = [
        {
            args: [
                [
                    [3, 6],
                    [1, 5],
                    [4, 7]
                ]
            ],
            res: 7
        },
        {
            args: [
                [
                    [1, 3],
                    [5, 8]
                ]
            ],
            res: 7
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numberOfPoints(...args)).toStrictEqual(res);
        });
    }
});
