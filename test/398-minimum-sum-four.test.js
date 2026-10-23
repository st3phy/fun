const { minimumSum } = require("../src/398-minimum-sum-four.js");

describe("Minimum Sum Of Four Digit Number After Splitting Digits", () => {
    const tests = [
        { args: [2932], res: 52 },
        { args: [4009], res: 13 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minimumSum(...args)).toStrictEqual(res);
        });
    }
});
