const { isGood } = require("../src/524-check-array-is.js");

describe("Check If Array Is Good", () => {
    const tests = [
        { args: [[2, 1, 3]], res: false },
        { args: [[1, 3, 3, 2]], res: true },
        { args: [[1, 1]], res: true },
        { args: [[3, 4, 4, 1, 2, 1]], res: false }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(isGood(...args)).toStrictEqual(res);
        });
    }
});
