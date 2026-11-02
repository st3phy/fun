const { leftRightDifference } = require("../src/478-left-right-sum.js");

describe("Left And Right Sum Differences", () => {
    const tests = [
        { args: [[10, 4, 8, 3]], res: [15, 1, 11, 22] },
        { args: [[1]], res: [0] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(leftRightDifference(...args)).toStrictEqual(res);
        });
    }
});
