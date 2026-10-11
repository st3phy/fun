const { sumOfUnique } = require("../src/309-sum-unique-elements.js");

describe("Sum Of Unique Elements", () => {
    const tests = [
        { args: [[1, 2, 3, 2]], res: 4 },
        { args: [[1, 1, 1, 1, 1]], res: 0 },
        { args: [[1, 2, 3, 4, 5]], res: 15 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(sumOfUnique(...args)).toStrictEqual(res);
        });
    }
});
