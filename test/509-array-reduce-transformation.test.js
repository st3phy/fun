const { reduce } = require("../src/509-array-reduce-transformation.js");

describe("Array Reduce Transformation", () => {
    const tests = [
        {
            args: [
                [1, 2, 3, 4],
                function sum(accum, curr) {
                    return accum + curr;
                },
                0
            ],
            res: 10
        },
        {
            args: [
                [1, 2, 3, 4],
                function sum(accum, curr) {
                    return accum + curr * curr;
                },
                100
            ],
            res: 130
        },
        {
            args: [
                [],
                function sum(accum, curr) {
                    return 0;
                },
                25
            ],
            res: 25
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(reduce(...args)).toStrictEqual(res);
        });
    }
});
