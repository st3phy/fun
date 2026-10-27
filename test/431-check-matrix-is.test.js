const { checkXMatrix } = require("../src/431-check-matrix-is.js");

describe("Check If Matrix Is X Matrix", () => {
    const tests = [
        {
            args: [
                [
                    [2, 0, 0, 1],
                    [0, 3, 1, 0],
                    [0, 5, 2, 0],
                    [4, 0, 0, 2]
                ]
            ],
            res: true
        },
        {
            args: [
                [
                    [5, 7, 0],
                    [0, 3, 1],
                    [0, 5, 0]
                ]
            ],
            res: false
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(checkXMatrix(...args)).toStrictEqual(res);
        });
    }
});
