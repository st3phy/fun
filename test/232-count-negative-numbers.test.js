const { countNegatives } = require("../src/232-count-negative-numbers.js");

describe("Count Negative Numbers In A Sorted Matrix", () => {
    const tests = [
        {
            args: [
                [
                    [4, 3, 2, -1],
                    [3, 2, 1, -1],
                    [1, 1, -1, -2],
                    [-1, -1, -2, -3]
                ]
            ],
            res: 8
        },
        {
            args: [
                [
                    [3, 2],
                    [1, 0]
                ]
            ],
            res: 0
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(countNegatives(...args)).toStrictEqual(res);
        });
    }
});
