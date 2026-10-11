const { check } = require("../src/310-check-array-is.js");

describe("Check If Array Is Sorted And Rotated", () => {
    const tests = [
        { args: [[3, 4, 5, 1, 2]], res: true },
        { args: [[2, 1, 3, 4]], res: false },
        { args: [[1, 2, 3]], res: true }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(check(...args)).toStrictEqual(res);
        });
    }
});
