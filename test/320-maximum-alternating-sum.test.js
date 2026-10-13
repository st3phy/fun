const { maxAlternatingSum } = require("../src/320-maximum-alternating-sum.js");

describe("Maximum Alternating Sum Of Squares", () => {
    const tests = [
        { args: [[1, 2, 3]], res: 12 },
        { args: [[1, -1, 2, -2, 3, -3]], res: 16 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxAlternatingSum(...args)).toStrictEqual(res);
        });
    }
});
