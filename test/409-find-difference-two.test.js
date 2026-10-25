const { findDifference } = require("../src/409-find-difference-two.js");

describe("Find The Difference Of Two Arrays", () => {
    const tests = [
        {
            args: [
                [1, 2, 3],
                [2, 4, 6]
            ],
            res: [
                [1, 3],
                [4, 6]
            ]
        },
        {
            args: [
                [1, 2, 3, 3],
                [1, 1, 2, 2]
            ],
            res: [[[3], []]]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findDifference(...args)).toStrictEqual(res);
        });
    }
});
