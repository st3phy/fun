const { isToeplitzMatrix } = require("../src/141-toeplitz-matrix.js");

describe("Toeplitz Matrix", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2, 3, 4],
                    [5, 1, 2, 3],
                    [9, 5, 1, 2]
                ]
            ],
            res: true
        },
        {
            args: [
                [
                    [1, 2],
                    [1, 2]
                ]
            ],
            res: false
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isToeplitzMatrix(...args)).toStrictEqual(res);
        });
    }
});
