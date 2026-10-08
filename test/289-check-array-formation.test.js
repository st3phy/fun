const { canFormArray } = require("../src/289-check-array-formation.js");

describe("Check Array Formation Through Concatenation", () => {
    const tests = [
        {
            args: [
                [15, 88],
                [[88], [15]]
            ],
            res: true
        },
        { args: [[49, 18, 16], [[16, 18, 49]]], res: false },
        {
            args: [
                [91, 4, 64, 78],
                [[78], [4, 64], [91]]
            ],
            res: true
        }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(canFormArray(...args)).toStrictEqual(res);
        });
    }
});
