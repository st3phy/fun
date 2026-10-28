const { largestLocal } = require("../src/439-largest-local-values.js");

describe("Largest Local Values In A Matrix", () => {
    const tests = [
        {
            args: [
                [
                    [9, 9, 8, 1],
                    [5, 6, 2, 6],
                    [8, 2, 6, 4],
                    [6, 2, 2, 2]
                ]
            ],
            res: [
                [9, 9],
                [8, 6]
            ]
        },
        {
            args: [
                [
                    [1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1],
                    [1, 1, 2, 1, 1],
                    [1, 1, 1, 1, 1],
                    [1, 1, 1, 1, 1]
                ]
            ],
            res: [
                [2, 2, 2],
                [2, 2, 2],
                [2, 2, 2]
            ]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(largestLocal(...args)).toStrictEqual(res);
        });
    }
});
