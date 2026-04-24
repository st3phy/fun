const { searchInsert } = require("../src/10-search-insert-position.js");

describe("Search Insert Position", () => {
    const tests = [
        { args: [[1, 3, 5, 6], 5], res: 2 },
        { args: [[1, 3, 5, 6], 2], res: 1 },
        { args: [[1, 3, 5, 6], 7], res: 4 }
    ];

    for (const { args, res } of tests) {
        test(`${JSON.stringify(args)}: ${res}`, () => {
            expect(searchInsert(...args)).toStrictEqual(res);
        });
    }
});
