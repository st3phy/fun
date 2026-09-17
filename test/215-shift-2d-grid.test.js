const { shiftGrid } = require("../src/215-shift-2d-grid.js");

describe("Shift 2D Grid", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ],
                1
            ],
            res: [
                [9, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ]
        },
        {
            args: [
                [
                    [3, 8, 1, 9],
                    [19, 7, 2, 5],
                    [4, 6, 11, 10],
                    [12, 0, 21, 13]
                ],
                4
            ],
            res: [
                [12, 0, 21, 13],
                [3, 8, 1, 9],
                [19, 7, 2, 5],
                [4, 6, 11, 10]
            ]
        },
        {
            args: [
                [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9]
                ],
                9
            ],
            res: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(shiftGrid(...args)).toStrictEqual(res);
        });
    }
});
