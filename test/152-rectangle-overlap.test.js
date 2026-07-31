const { isRectangleOverlap } = require("../src/152-rectangle-overlap.js");

describe("Rectangle Overlap", () => {
    const tests = [
        {
            args: [
                [0, 0, 2, 2],
                [1, 1, 3, 3]
            ],
            res: true
        },
        {
            args: [
                [0, 0, 1, 1],
                [1, 0, 2, 1]
            ],
            res: false
        },
        {
            args: [
                [5, 15, 8, 18],
                [0, 3, 7, 9]
            ],
            res: false
        },
        {
            args: [
                [0, 0, 1, 1],
                [2, 2, 3, 3]
            ],
            res: false
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isRectangleOverlap(...args)).toStrictEqual(res);
        });
    }
});
