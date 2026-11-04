const { rowAndMaximumOnes } = require("../src/493-row-maximum-ones.js");

describe("Row With Maximum Ones", () => {
    const tests = [
        {
            args: [
                [
                    [0, 1],
                    [1, 0]
                ]
            ],
            res: [0, 1]
        },
        {
            args: [
                [
                    [0, 0, 0],
                    [0, 1, 1]
                ]
            ],
            res: [1, 2]
        },
        {
            args: [
                [
                    [0, 0],
                    [1, 1],
                    [0, 0]
                ]
            ],
            res: [1, 2]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(rowAndMaximumOnes(...args)).toStrictEqual(res);
        });
    }
});
