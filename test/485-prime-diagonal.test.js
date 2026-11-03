const { diagonalPrime } = require("../src/485-prime-diagonal.js");

describe("Prime In Diagonal", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2, 3],
                    [5, 6, 7],
                    [9, 10, 11]
                ]
            ],
            res: 11
        },
        {
            args: [
                [
                    [1, 2, 3],
                    [5, 17, 7],
                    [9, 11, 10]
                ]
            ],
            res: 17
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(diagonalPrime(...args)).toStrictEqual(res);
        });
    }
});
