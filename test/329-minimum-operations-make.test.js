const { minOperations } = require("../src/329-minimum-operations-make.js");

describe("Minimum Operations To Make The Array Increasing", () => {
    const tests = [
        { args: [[1, 1, 1]], res: 3 },
        { args: [[1, 5, 2, 4, 1]], res: 14 },
        { args: [[8]], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(minOperations(...args)).toStrictEqual(res);
        });
    }
});
