const { minimumDifference } = require("../src/360-minimum-difference-between.js");

describe("Minimum Difference Between Highest And Lowest Of K Scores", () => {
    const tests = [
        { args: [[90], 1], res: 0 },
        { args: [[9, 4, 1, 7], 2], res: 2 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minimumDifference(...args)).toStrictEqual(res);
        });
    }
});
