const { findClosestNumber } = require("../src/414-find-closest-number.js");

describe("Find Closest Number To Zero", () => {
    const tests = [
        { args: [[-4, -2, 1, 4, 8]], res: 1 },
        { args: [[2, -1, 1]], res: 1 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findClosestNumber(...args)).toStrictEqual(res);
        });
    }
});
