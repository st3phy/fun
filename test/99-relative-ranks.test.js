const { findRelativeRanks } = require("../src/99-relative-ranks.js");

describe("Relative Ranks", () => {
    const tests = [
        { args: [[5, 4, 3, 2, 1]], res: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"] },
        { args: [[10, 3, 8, 9, 4]], res: ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"] }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(findRelativeRanks(...args)).toStrictEqual(res);
        });
    }
});
