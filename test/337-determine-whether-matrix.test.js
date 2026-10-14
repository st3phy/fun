const { findRotation } = require("../src/337-determine-whether-matrix.js");

describe("Determine Whether Matrix Can Be Obtained By Rotation", () => {
    const tests = [
        {
            args: [
                [
                    [0, 1],
                    [1, 0]
                ],
                [
                    [1, 0],
                    [0, 1]
                ]
            ],
            res: true
        },
        {
            args: [
                [
                    [0, 1],
                    [1, 1]
                ],
                [
                    [1, 0],
                    [0, 1]
                ]
            ],
            res: false
        },
        {
            args: [
                [
                    [0, 0, 0],
                    [0, 1, 0],
                    [1, 1, 1]
                ],
                [
                    [1, 1, 1],
                    [0, 1, 0],
                    [0, 0, 0]
                ]
            ],
            res: true
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findRotation(...args)).toStrictEqual(res);
        });
    }
});
