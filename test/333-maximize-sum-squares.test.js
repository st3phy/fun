const { maxSumOfSquares } = require("../src/333-maximize-sum-squares.js");

describe("Maximize Sum Of Squares Of Digits", () => {
    const tests = [
        { args: [2, 3], res: "30" },
        { args: [2, 17], res: "98" },
        { args: [3, 1], res: "100" },
        { args: [1, 10], res: "" }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(maxSumOfSquares(...args)).toStrictEqual(res);
        });
    }
});
