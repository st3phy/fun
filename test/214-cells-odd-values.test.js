const { oddCells } = require("../src/214-cells-odd-values.js");

describe("Cells With Odd Values In A Matrix", () => {
    const tests = [
        {
            args: [
                2,
                3,
                [
                    [0, 1],
                    [1, 1]
                ]
            ],
            res: 6
        },
        {
            args: [
                2,
                2,
                [
                    [1, 1],
                    [0, 0]
                ]
            ],
            res: 0
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(oddCells(...args)).toStrictEqual(res);
        });
    }
});
