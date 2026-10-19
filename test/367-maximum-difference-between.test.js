const { maximumDifference } = require("../src/367-maximum-difference-between.js");

describe("Maximum Difference Between Increasing Elements", () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maximumDifference(...args)).toStrictEqual(res);
        });
    }
});
