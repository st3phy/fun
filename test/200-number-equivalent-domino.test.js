const { numEquivDominoPairs } = require("../src/200-number-equivalent-domino.js");

describe("Number Of Equivalent Domino Pairs", () => {
    const tests = [
        {
            args: [
                [
                    [1, 2],
                    [2, 1],
                    [3, 4],
                    [5, 6]
                ]
            ],
            res: 1
        },
        {
            args: [
                [
                    [1, 2],
                    [1, 2],
                    [1, 1],
                    [1, 2],
                    [2, 2]
                ]
            ],
            res: 3
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(numEquivDominoPairs(...args)).toStrictEqual(res);
        });
    }
});
