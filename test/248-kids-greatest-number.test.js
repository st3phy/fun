const { kindWithCandies } = require("../src/248-kids-greatest-number.js");

describe("Kids With The Greatest Number Of Candies", () => {
    const tests = [
        { args: [[2, 3, 5, 1, 3], 3], res: [true, true, true, false, true] },
        { args: [[4, 2, 1, 1, 2], 1], res: [true, false, false, false, false] },
        { args: [[12, 1, 12], 10], res: [true, false, true] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(kindWithCandies(...args)).toStrictEqual(res);
        });
    }
});
