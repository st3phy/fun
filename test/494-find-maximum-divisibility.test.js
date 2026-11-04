const { maxDivScore } = require("../src/494-find-maximum-divisibility.js");

describe("Find The Maximum Divisibility Score", () => {
    const tests = [
        {
            args: [
                [2, 9, 15, 50],
                [5, 3, 7, 2]
            ],
            res: 2
        },
        {
            args: [
                [4, 7, 9, 3, 9],
                [5, 2, 3]
            ],
            res: 3
        },
        {
            args: [
                [20, 14, 21, 10],
                [10, 16, 20]
            ],
            res: 10
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxDivScore(...args)).toStrictEqual(res);
        });
    }
});
