const { smallestRangeI } = require("../src/164-smallest-range-i.js");

describe("Smallest Range I", () => {
    const tests = [
        { args: [[1], 0], res: 0 },
        { args: [[0, 10], 2], res: 6 },
        { args: [[1, 3, 6], 3], res: 0 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(smallestRangeI(...args)).toStrictEqual(res);
        });
    }
});
