const { matricReshape } = require("../src/110-reshape-matrix.js");

describe("Reshape The Matrix", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2],
                    [3, 4]
                ],
                1,
                4
            ],
            res: [[1, 2, 3, 4]]
        },
        {
            args: [
                [
                    [1, 2],
                    [3, 4]
                ],
                1,
                2
            ],
            res: [
                [1, 2],
                [3, 4]
            ]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(matricReshape(...args)).toStrictEqual(res);
        });
    }
});
