const { sumOfSquares } = require("../src/519-sum-squares-special.js");

describe("Sum Of Squares Of Special Elements", () => {
    const tests = [
        { args: [[1, 2, 3, 4]], res: 21 },
        { args: [[2, 7, 1, 19, 18, 3]], res: 63 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sumOfSquares(...args)).toStrictEqual(res);
        });
    }
});
