const { floodFill } = require("../src/135-flood-fill.js");

describe("Flood Fill", () => {
    const tests = [
        {
            args: [
                [
                    [1, 1, 1],
                    [1, 1, 0],
                    [1, 0, 1]
                ],
                1,
                1,
                2
            ],
            res: [
                [2, 2, 2],
                [2, 2, 0],
                [2, 0, 1]
            ]
        },
        {
            args: [
                [
                    [0, 0, 0],
                    [0, 0, 0]
                ],
                0,
                0,
                0
            ],
            res: [
                [0, 0, 0],
                [0, 0, 0]
            ]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(floodFill(...args)).toStrictEqual(res);
        });
    }
});
