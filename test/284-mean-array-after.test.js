const { trimMean } = require("../src/284-mean-array-after.js");

describe("Mean Of Array After Removing Some Elements", () => {
    const tests = [
        { args: [[1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]], res: 2 },
        { args: [[6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]], res: 4 },
        {
            args: [
                [
                    6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1,
                    0, 6, 10, 8, 2, 3, 4
                ]
            ],
            res: 4.77778
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(trimMean(...args)).toStrictEqual(res);
        });
    }
});
