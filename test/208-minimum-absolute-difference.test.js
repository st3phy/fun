const { minimumAbsDifference } = require("../src/208-minimum-absolute-difference.js");

describe("Minimum Absolute Difference", () => {
    const tests = [
        {
            args: [[4, 2, 1, 3]],
            res: [
                [1, 2],
                [2, 3],
                [3, 4]
            ]
        },
        { args: [[1, 3, 6, 10, 15]], res: [[1, 3]] },
        {
            args: [[3, 8, -10, 23, 19, -4, -14, 27]],
            res: [
                [-14, -10],
                [19, 23],
                [23, 27]
            ]
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minimumAbsDifference(...args)).toStrictEqual(res);
        });
    }
});
